
import React from 'react';
import { Heart, Stars, Music, Volume2, VolumeX, Sparkles, Send } from 'lucide-react';

export const COLORS = {
  primary: 'text-rose-600',
  secondary: 'text-pink-500',
  bgGradient: 'from-rose-50 to-pink-100',
  card: 'bg-white/80 backdrop-blur-sm shadow-xl border border-rose-100'
};

export const ICONS = {
  Heart: <Heart className="w-6 h-6" />,
  Stars: <Stars className="w-6 h-6" />,
  Music: <Music className="w-6 h-6" />,
  VolumeOn: <Volume2 className="w-6 h-6" />,
  VolumeOff: <VolumeX className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Send: <Send className="w-5 h-5" />
};

export const AUDIO_TRACKS = {
  background: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' // Placeholder romantic tune
};
