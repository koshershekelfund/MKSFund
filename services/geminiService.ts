// OpenRouter API Service - Text Generation Only

const apiKey = process.env.OPENROUTER_API_KEY || '';

const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const MODEL = 'google/gemini-2.5-flash';

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
  `;

  try {
    const response = await fetch(OPENROUTER_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': window.location.origin,
        'X-Title': 'McDickerson Kosher Shekel Fund',
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: systemInstruction },
          { role: 'user', content: userMessage },
        ],
        temperature: 1.0,
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || `API request failed: ${response.status}`);
    }

    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error("No response body");
    }

    const decoder = new TextDecoder();

    async function* streamGenerator() {
      while (true) {
        const { done, value } = await reader!.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') return;

            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices?.[0]?.delta?.content;
              if (content) {
                yield content;
              }
            } catch {
              // Skip malformed JSON chunks
            }
          }
        }
      }
    }

    return streamGenerator();

  } catch (error) {
    console.error("OpenRouter API Error:", error);
    throw error;
  }
};