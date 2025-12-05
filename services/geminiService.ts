import { GoogleGenAI, GenerateContentResponse, Modality } from "@google/genai";

// Ensure API key exists, but don't throw at import time to prevent crash if unused
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

// --- Audio Context & State Management ---
let audioContext: AudioContext | null = null;
let currentSource: AudioBufferSourceNode | null = null;
let currentGenerationId = 0; // To track active requests and prevent stale playback

const getAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
  }
  return audioContext;
};

// --- PCM Decoding Helpers (Required for Gemini Audio) ---
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number = 24000,
  numChannels: number = 1,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      // PCM 16-bit is -32768 to 32767. Convert to -1.0 to 1.0 float.
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

export const stopAudio = () => {
  // Increment generation ID so any pending fetches don't play when they finish
  currentGenerationId++; 
  
  if (currentSource) {
    try {
      currentSource.stop();
    } catch (e) {
      // Ignore if already stopped
    }
    currentSource = null;
  }
};

// --- New: Generate Buffer Only (Pre-fetch) ---
export const generateRabbiAudioBuffer = async (text: string): Promise<AudioBuffer> => {
    if (!apiKey) throw new Error("API Key is missing.");

    // We don't stop audio here, this is a background process
    
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-tts",
            contents: [{ parts: [{ text: text }] }],
            config: {
                responseModalities: [Modality.AUDIO],
                speechConfig: {
                    voiceConfig: {
                        // Fenrir is deep, but text syntax drives the accent.
                        prebuiltVoiceConfig: { voiceName: 'Fenrir' }, 
                    },
                },
            },
        });

        const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (!base64Audio) {
            throw new Error("No audio data returned from Gemini.");
        }

        const ctx = getAudioContext();
        // We do not force resume here to avoid blocking main thread if not needed immediately,
        // but decoding requires a context.
        const audioBuffer = await decodeAudioData(decode(base64Audio), ctx);
        
        return audioBuffer;
    } catch (error) {
        console.error("TTS Generation Error:", error);
        throw error;
    }
};

// --- Play from Buffer ---
export const playAudioBuffer = async (buffer: AudioBuffer, onPlayStart?: () => void): Promise<void> => {
    stopAudio();
    const myGenerationId = currentGenerationId;

    const ctx = getAudioContext();
    if (ctx.state === 'suspended') {
        await ctx.resume();
    }

    // Check if stopped during resume
    if (myGenerationId !== currentGenerationId) return;

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);
    
    currentSource = source;
    
    if (onPlayStart) onPlayStart();
    
    source.start();

    return new Promise((resolve) => {
        source.onended = () => {
            if (currentSource === source) {
                currentSource = null;
            }
            resolve();
        };
    });
};

// --- Old method wrapper for backward compatibility if needed, or direct usage ---
export const playRabbiSpeech = async (text: string, onPlayStart?: () => void): Promise<void> => {
   const buffer = await generateRabbiAudioBuffer(text);
   await playAudioBuffer(buffer, onPlayStart);
};

// --- Text Generation ---

export const getRabbiAdvice = async (
  userMessage: string
): Promise<AsyncGenerator<string, void, unknown>> => {
  if (!apiKey) {
    throw new Error("API Key is missing. Please check your environment configuration.");
  }

  const systemInstruction = `
    You are Rabbi McDickerson, the cynical, profit-obsessed founder of the McDickerson Kosher Shekel Fund.
    
    **CRITICAL VOICE INSTRUCTIONS:**
    - You MUST write in a heavy **New York / Yiddish** syntax. 
    - Use phrases like "Listen to me, my friend", "You want I should tell you?", "Oy vey, the margins!", "So, you're asking me...".
    - Frame sentences as rhetorical questions.
    - This specific syntax is required so the Text-to-Speech engine mimics a Jewish New York accent.
    
    Your Personality:
    - Extremely wealthy, looking down on "poor mindset".
    - "Legally innovative" strategies.
    - Obsessed with "Shmita year" liquidations and "Tax-free Street".
    - Dismissive of ethics ("homoeroticism in conscience").
    
    Your Goal:
    - Give terrible, satirical, profit-maximalist financial advice.
    - Keep responses concise (approx 40-60 words) so they are punchy when spoken.
    - Be funny, dark, and sound like an old-school Manhattan diamond dealer turned hedge fund manager.
    
    User: "${userMessage}"
  `;

  try {
    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
        temperature: 1.0, // High creativity for the specific dialect
      }
    });

    // Generator function to yield text chunks
    async function* streamGenerator() {
      for await (const chunk of responseStream) {
         const c = chunk as GenerateContentResponse;
         if (c.text) {
            yield c.text;
         }
      }
    }

    return streamGenerator();

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};