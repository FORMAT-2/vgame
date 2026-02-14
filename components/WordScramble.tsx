
import React, { useState, useEffect } from 'react';
import { generateScrambledWords } from '../services/geminiService';
import { ICONS } from '../constants';

interface WordScrambleProps {
  onWin: () => void;
}

export const WordScramble: React.FC<WordScrambleProps> = ({ onWin }) => {
  const [words, setWords] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState('');
  const [scrambled, setScrambled] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWords = async () => {
      const w = await generateScrambledWords();
      setWords(w);
      setLoading(false);
    };
    fetchWords();
  }, []);

  const scrambleWord = (word: string) => {
    return word.split('').sort(() => Math.random() - 0.5).join('');
  };

  useEffect(() => {
    if (words.length > 0 && currentIndex < words.length) {
      setScrambled(scrambleWord(words[currentIndex]));
    }
  }, [currentIndex, words]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toUpperCase() === words[currentIndex].toUpperCase()) {
      if (currentIndex === words.length - 1) {
        onWin();
      } else {
        setCurrentIndex(prev => prev + 1);
        setInput('');
      }
    } else {
      alert("Oops! Try again, love.");
    }
  };

  if (loading) return <div className="text-rose-500 animate-pulse text-xl">Loading your love letters...</div>;

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-rose-100 text-center">
      <h2 className="text-3xl font-romantic text-rose-600 mb-2">Love Letter Scramble</h2>
      <p className="text-gray-600 mb-8">Unscramble the letters to reveal our secrets!</p>

      <div className="bg-rose-50 p-6 rounded-2xl mb-8">
        <span className="text-4xl font-bold text-rose-600 tracking-widest uppercase">
          {scrambled}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What's the word?"
          className="flex-1 p-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400"
          autoFocus
        />
        <button 
          type="submit"
          className="bg-rose-500 text-white p-3 rounded-xl hover:bg-rose-600 transition-colors shadow-md"
        >
          {ICONS.Send}
        </button>
      </form>
      
      <div className="mt-4 text-sm text-rose-400">
        Word {currentIndex + 1} of {words.length}
      </div>
    </div>
  );
};
