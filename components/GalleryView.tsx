
import React, { useState, useEffect } from 'react';
import { generateRomanticMessage } from '../services/geminiService';
import { ICONS } from '../constants';

interface GalleryViewProps {
  context: string;
  images: string[];
  onNext: () => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ context, images, onNext }) => {
  const [message, setMessage] = useState("Loading a message for you...");
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const fetchMsg = async () => {
      const msg = await generateRomanticMessage(context);
      setMessage(msg);
    };
    fetchMsg();
  }, [context]);

  return (
    <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-rose-100 text-center animate-in fade-in zoom-in duration-700">
      <div className="mb-6 relative group">
        <img 
          src={images[currentIdx]} 
          alt="Sweet Moment" 
          className="w-full h-64 object-cover rounded-2xl shadow-inner shadow-rose-200 transition-all duration-500"
        />
        {images.length > 1 && (
            <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => setCurrentIdx(prev => (prev - 1 + images.length) % images.length)} className="p-2 bg-white/50 rounded-full">←</button>
                <button onClick={() => setCurrentIdx(prev => (prev + 1) % images.length)} className="p-2 bg-white/50 rounded-full">→</button>
            </div>
        )}
      </div>

      <div className="bg-pink-50/50 p-6 rounded-2xl border border-pink-100 mb-8 italic text-rose-700 font-romantic text-xl">
        "{message}"
      </div>

      <button 
        onClick={onNext}
        className="w-full py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-rose-200 transition-all transform hover:-translate-y-1"
      >
        Continue Our Journey
      </button>
    </div>
  );
};
