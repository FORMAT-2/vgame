
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

/**
 * UPDATE YOUR IMAGES HERE
 * Replace these URLs with your own photo links.
 */
export const GALLERY_IMAGES = {
  STAGE_1: [
    'https://picsum.photos/seed/love1/600/400', 
    'https://picsum.photos/seed/love2/600/400'
  ],
  STAGE_2: [
    'https://picsum.photos/seed/love3/600/400', 
    'https://picsum.photos/seed/love4/600/400'
  ],
  STAGE_3: [
    'https://picsum.photos/seed/love5/600/400', 
    'https://picsum.photos/seed/love6/600/400'
  ],
};

/**
 * UPDATE YOUR SONGS HERE
 * Replace these URLs with direct links to MP3 files.
 */
export const AUDIO_TRACKS = {
  intro: 'https://github.com/FORMAT-2/FORMAT-2/raw/refs/heads/main/HIGH%20ON%20YOU%20-%20Jind%20Universe%20%20Latest%20Punjabi%20Love%20Song%202024.mp3',      // Played at Start
  gameplay: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',   // Played during games
  gallery: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'     // Played during photos/messages
};

/**
 * UPDATE YOUR ROMANTIC MESSAGES HERE
 */
export const ROMANTIC_MESSAGES = [
  "You're the missing piece to my puzzle! ❤️",
  "Every moment with you is a winning moment. ❤️",
  "My heart beats faster every time I think of you. 💖",
  "You're my favorite person in the whole wide world. 🌹",
  "You make every day feel like Valentine's Day. ✨",
  "I'm so lucky to have you by my side. 🥂",
  "You are my sun, my moon, and all my stars. 🌟",
  "Falling for you was the best thing I ever did. 💌"
];

/**
 * UPDATE YOUR WORD SCRAMBLE SETS HERE
 */
export const SCRAMBLED_WORD_SETS = [
  ["LOVE", "FOREVER", "SOULMATE", "ALWAYS", "DEVOTION"],
  ["HEART", "CUPID", "KISS", "ROMANCE", "FLOWER"],
  ["DARLING", "SWEETIE", "BELOVED", "ADORE", "CHERISH"]
];
