
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateRomanticMessage = async (context: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a very short, cute, and romantic Valentine's message for my girlfriend. 
                 The context is that she just finished a mini-game about: ${context}. 
                 Make it sweet and heart-melting. Max 2 sentences.`,
      config: {
        temperature: 0.8,
        topK: 40,
        topP: 0.95,
      }
    });
    return response.text || "You're the missing piece to my puzzle! ❤️";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Every moment with you is a winning moment. ❤️";
  }
};

export const generateScrambledWords = async () => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "List 5 romantic words related to love and Valentines. Return as a JSON array of strings.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });
    return JSON.parse(response.text || '["LOVE", "FOREVER", "SOULMATE", "ALWAYS", "DEVOTION"]');
  } catch (error) {
    return ["HEART", "CUPID", "KISS", "ROMANCE", "FLOWER"];
  }
};
