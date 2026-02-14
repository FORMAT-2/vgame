
import React, { useState, useEffect } from 'react';

const EMOJIS = ['💖', '🌹', '🥂', '🍫', '💍', '🕊️', '💌', '🦢'];

interface MemoryMatchProps {
  onWin: () => void;
}

export const MemoryMatch: React.FC<MemoryMatchProps> = ({ onWin }) => {
  const [cards, setCards] = useState<{ id: number; emoji: string; flipped: boolean; matched: boolean }[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);

  useEffect(() => {
    const initialCards = [...EMOJIS, ...EMOJIS]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji, flipped: false, matched: false }));
    setCards(initialCards);
  }, []);

  const handleFlip = (index: number) => {
    if (cards[index].flipped || cards[index].matched || flippedIndices.length === 2) return;

    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first].emoji === cards[second].emoji) {
        setTimeout(() => {
          setCards(prev => {
            const updated = [...prev];
            updated[first].matched = true;
            updated[second].matched = true;
            return updated;
          });
          setFlippedIndices([]);
        }, 500);
      } else {
        setTimeout(() => {
          setCards(prev => {
            const updated = [...prev];
            updated[first].flipped = false;
            updated[second].flipped = false;
            return updated;
          });
          setFlippedIndices([]);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    if (cards.length > 0 && cards.every(c => c.matched)) {
      setTimeout(onWin, 1000);
    }
  }, [cards, onWin]);

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-rose-100 text-center">
      <h2 className="text-3xl font-romantic text-rose-600 mb-2">Memory of Us</h2>
      <p className="text-gray-600 mb-6">Find the matching symbols of love!</p>

      <div className="grid grid-cols-4 gap-3">
        {cards.map((card, idx) => (
          <button
            key={card.id}
            onClick={() => handleFlip(idx)}
            className={`h-16 w-full rounded-xl flex items-center justify-center text-2xl transition-all duration-300 transform ${
              card.flipped || card.matched 
                ? 'bg-rose-100 rotate-y-180 scale-100' 
                : 'bg-rose-400 hover:bg-rose-500 rotate-y-0 scale-95'
            }`}
          >
            {(card.flipped || card.matched) ? card.emoji : '❓'}
          </button>
        ))}
      </div>
    </div>
  );
};
