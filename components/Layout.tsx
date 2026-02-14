
import React, { useState, useEffect, useRef } from 'react';
import { ICONS, AUDIO_TRACKS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  currentTrack?: string; // Allow passing a specific track if needed
}

// Fixed: Corrected property access from 'background' to 'intro' as 'background' does not exist on AUDIO_TRACKS
export const Layout: React.FC<LayoutProps> = ({ children, currentTrack = AUDIO_TRACKS.intro }) => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      // When the track changes, we need to reload it
      audioRef.current.load();
      if (!isMuted) {
        audioRef.current.play().catch(e => console.log("Audio play blocked", e));
      }
    }
  }, [currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      if (!isMuted) {
        audioRef.current.play().catch(e => console.log("Audio play blocked", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMuted]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 text-rose-200 animate-pulse pointer-events-none">
        {ICONS.Heart}
      </div>
      <div className="absolute bottom-10 right-10 text-rose-200 animate-bounce pointer-events-none">
        {ICONS.Heart}
      </div>
      <div className="absolute top-1/4 right-5 text-pink-200 pointer-events-none">
        {ICONS.Sparkles}
      </div>

      <audio ref={audioRef} loop>
        <source src={currentTrack} type="audio/mpeg" />
      </audio>

      <button 
        onClick={() => setIsMuted(!isMuted)}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white/50 backdrop-blur-md shadow-lg text-rose-500 hover:bg-white transition-all active:scale-95"
        title={isMuted ? "Unmute Music" : "Mute Music"}
      >
        {isMuted ? ICONS.VolumeOff : ICONS.VolumeOn}
      </button>

      <main className="w-full max-w-lg z-10">
        {children}
      </main>
    </div>
  );
};
