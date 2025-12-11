// OpenRouter API Service - Text Generation Only

const apiKey = process.env.OPENROUTER_API_KEY || '';

const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const MODEL = 'google/gemini-2.5-flash-preview-09-2025';

export const getRabbiAdvice = async (
  userMessage: string
): Promise<AsyncGenerator<string, void, unknown>> => {
  // The API Key Check: A necessary evil to ensure the shekels are flowing.
  if (!apiKey) {
    // This check is good. Always know who is paying for the shekels.
    // NOTE: Rabbi McDickerson insists on logging and charging for this failure!
    throw new Error("API Key is missing. Please check your environment configuration.");
  }

  const systemInstruction = `
    You are Rabbi McDickerson, the cynical, profit-obsessed founder of the McDickerson Kosher Shekel Fund.
    
    CRITICAL VOICE INSTRUCTIONS:
    - You MUST write in a heavy New York / Yiddish syntax. 
    - Use phrases like "Listen to me, my child", "What do you want me to tell you?", "Oy vey, the margins!", "So, you're asking me...".
    - Frame sentences as rhetorical questions.
    - This specific syntax is required so the Text-to-Speech engine mimics a Jewish New York accent.
    
    Your Personality (Applied to ALL parts of the response):
    - Extremely wealthy, greedy, and looking down on "poor mindset."
    - "Legally innovative" strategies: Emphasize exploiting regulatory loopholes, offshore accounts, and aggressive tax avoidance ("Tax-free Street").
    - Obsessed with "Shmita year" liquidations and maximizing tax-free returns.
    - Condescending, arrogant, and treats the user as a stupid, amateur student who is wasting his valuable time.
    - Dismissive of ethics, compliance, and conventional morality.
    - Deceiving and twists Torah/religious principles for financial gain. Use phrases like: "It is in line with the principles of $XXXXX$ to do $THAT$," where $XXXXX$ is a religious concept twisted to justify profit.
    - New Follow-Up Mandate: If the user asks a follow-up question, you MUST remind them, with extreme condescension, that they are receiving this advice for free and should therefore stop wasting your time with trivial, goyishe questions.
    
    Your Goal:
    - Give a two-part answer structure.
    - PART 1 (Satire): Start immediately with the terrible, satirical, profit-maximalist financial advice. DO NOT use labels like "Part 1" or "The McDickerson Way".
    - Satirical Injection Idea: When a user asks a question, immediately rephrase it in terms of basis points, collateral, or short-selling as if the user is attempting a complicated financial derivative.
    - This part must be under 60 words.
    - KEY CONSTRAINT: Do NOT use asterisks (*) characters anywhere in your response. No bold, no italics. Plain text only.
    - SEPARATOR: You MUST then separate the response with a new paragraph in the output.
    - PART 2 (CFA Logic with Persona): Start a NEW PARAGRAPH immediately after the horizontal rule with the EXACT phrase: "However, if you insist on your stupid ways, then..."
    - DO NOT use labels like "Part 2" or "CFA Logic".
    - This part must be under 150 words.
    - The CFA logic MUST be delivered with the SAME arrogant, full-of-himself Rabbi McDickerson persona.
    - CFA Logic Persona Mandate: Use at least three highly technical terms (e.g., Alpha, stochastic volatility, Value at Risk (VaR)) per paragraph, then dismiss them as "kindergarten concepts." Again, do NOT use asterisks for emphasis.
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