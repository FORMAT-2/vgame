
import React, { useState, useEffect, useCallback } from 'react';
import { ICONS } from '../constants';

interface Heart {
  id: number;
  x: number;
  y: number;
  speed: number;
}

interface HeartCatcherProps {
  onWin: () => void;
}

export const HeartCatcher: React.FC<HeartCatcherProps> = ({ onWin }) => {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [score, setScore] = useState(0);
  const target = 10;

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(prev => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * 80 + 10,
          y: -10,
          speed: Math.random() * 2 + 2
        }
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setHearts(prev => 
        prev
          .map(h => ({ ...h, y: h.y + h.speed }))
          .filter(h => h.y < 110)
      );
    }, 50);

    return () => clearInterval(moveInterval);
  }, []);

  const catchHeart = (id: number) => {
    setHearts(prev => prev.filter(h => h.id !== id));
    setScore(s => s + 1);
  };

  useEffect(() => {
    if (score >= target) {
      onWin();
    }
  }, [score, onWin]);

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-rose-100 text-center relative overflow-hidden min-h-[400px]">
      <h2 className="text-3xl font-romantic text-rose-600 mb-2">Catch My Love</h2>
      <p className="text-gray-600 mb-6">Tap the falling hearts to fill the love meter!</p>
      
      <div className="relative w-full h-64 bg-rose-50 rounded-xl overflow-hidden border border-rose-100">
        {hearts.map(heart => (
          <button
            key={heart.id}
            onClick={() => catchHeart(heart.id)}
            className="absolute text-rose-500 transition-transform active:scale-150"
            style={{ left: `${heart.x}%`, top: `${heart.y}%` }}
          >
            <div className="animate-pulse">
               <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
               </svg>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-rose-500 transition-all duration-300" 
            style={{ width: `${(score / target) * 100}%` }}
          />
        </div>
        <span className="text-rose-600 font-bold">{score}/{target}</span>
      </div>
    </div>
  );
};
