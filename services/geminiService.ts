
/**
 * Static providers for romantic content.
 * Replaces the previous Gemini AI implementation to remove API key dependency.
 */

const ROMANTIC_MESSAGES = [
  "You're the missing piece to my puzzle! ❤️",
  "Every moment with you is a winning moment. ❤️",
  "My heart beats faster every time I think of you. 💖",
  "You're my favorite person in the whole wide world. 🌹",
  "You make every day feel like Valentine's Day. ✨",
  "I'm so lucky to have you by my side. 🥂",
  "You are my sun, my moon, and all my stars. 🌟",
  "Falling for you was the best thing I ever did. 💌"
];

const SCRAMBLED_WORD_SETS = [
  ["LOVE", "FOREVER", "SOULMATE", "ALWAYS", "DEVOTION"],
  ["HEART", "CUPID", "KISS", "ROMANCE", "FLOWER"],
  ["DARLING", "SWEETIE", "BELOVED", "ADORE", "CHERISH"]
];

export const generateRomanticMessage = async (context: string) => {
  // Simulate network delay for a smoother UI experience
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Pick a random message or one based on context
  if (context.includes("hearts")) return "You've caught my heart just like those falling ones! ❤️";
  if (context.includes("memories")) return "Matching these was easy, but matching with you was fate. 💖";
  if (context.includes("letters")) return "No matter how scrambled things get, my love for you is always clear. 💌";
  
  return ROMANTIC_MESSAGES[Math.floor(Math.random() * ROMANTIC_MESSAGES.length)];
};

export const generateScrambledWords = async () => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Return a random set of romantic words
  return SCRAMBLED_WORD_SETS[Math.floor(Math.random() * SCRAMBLED_WORD_SETS.length)];
};
