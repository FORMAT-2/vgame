
import { GoogleGenAI, Type } from "@google/genai";
import { ROMANTIC_MESSAGES, SCRAMBLED_WORD_SETS } from '../constants';

/**
 * Static providers for romantic content.
 * Pulls from constants.tsx for easier user configuration.
 */

// Generate a dynamic romantic message using Gemini API
export const generateRomanticMessage = async (context: string) => {
  try {
    // Create instance right before call to ensure latest API key is used
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a short, sweet, one-sentence romantic message for a Valentine's Day game. Context: ${context}`,
      config: {
        systemInstruction: "You are a romantic poet. Keep the message under 15 words. Be charming and sweet.",
      },
    });
    
    // Accessing the .text property directly as per Gemini API guidelines
    const message = response.text;
    return message?.trim() || ROMANTIC_MESSAGES[Math.floor(Math.random() * ROMANTIC_MESSAGES.length)];
  } catch (error) {
    console.error("Gemini Message Generation Error:", error);
    // Fallback to static messages
    return ROMANTIC_MESSAGES[Math.floor(Math.random() * ROMANTIC_MESSAGES.length)];
  }
};

// Generate dynamic scrambled words using Gemini API with structured JSON output
export const generateScrambledWords = async () => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Generate 5 romantic words (4 to 10 characters long) for a word scramble game.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.STRING,
          },
        },
      },
    });

    // Extracting and parsing the JSON response
    const jsonStr = response.text?.trim();
    if (jsonStr) {
      const words = JSON.parse(jsonStr);
      if (Array.isArray(words) && words.length > 0) {
        return words;
      }
    }
    return SCRAMBLED_WORD_SETS[Math.floor(Math.random() * SCRAMBLED_WORD_SETS.length)];
  } catch (error) {
    console.error("Gemini Word Generation Error:", error);
    // Fallback to predefined word sets
    return SCRAMBLED_WORD_SETS[Math.floor(Math.random() * SCRAMBLED_WORD_SETS.length)];
  }
};
