
import React, { useState, useMemo } from 'react';
import { Layout } from './components/Layout';
import { AppStage } from './types';
import { HeartCatcher } from './components/HeartCatcher';
import { MemoryMatch } from './components/MemoryMatch';
import { WordScramble } from './components/WordScramble';
import { GalleryView } from './components/GalleryView';
import { ICONS, GALLERY_IMAGES, AUDIO_TRACKS } from './constants';

const App: React.FC = () => {
  const [stage, setStage] = useState<AppStage>(AppStage.START);

  // Determine which song to play based on the current stage
  const currentTrack = useMemo(() => {
    switch (stage) {
      case AppStage.START:
        return AUDIO_TRACKS.intro;
      case AppStage.GAME_1:
      case AppStage.GAME_2:
      case AppStage.GAME_3:
        return AUDIO_TRACKS.gameplay;
      case AppStage.GALLERY_1:
      case AppStage.GALLERY_2:
      case AppStage.GALLERY_3:
      case AppStage.FINAL:
        return AUDIO_TRACKS.gallery;
      default:
        return AUDIO_TRACKS.intro;
    }
  }, [stage]);

  const renderStage = () => {
    switch (stage) {
      case AppStage.START:
        return (
          <div className="text-center p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-rose-100 animate-in fade-in duration-1000">
            <div className="mb-6 flex justify-center text-rose-500 animate-bounce">
              <svg className="w-20 h-20 fill-current" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <h1 className="text-5xl font-romantic text-rose-600 mb-4">Hello, My Love!</h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I've prepared a little journey for us. <br/> 
              Play these small games to unlock some of my favorite moments of us.
            </p>
            <button 
              onClick={() => setStage(AppStage.GAME_1)}
              className="px-10 py-4 bg-rose-500 text-white rounded-full font-bold text-lg hover:bg-rose-600 transition-all shadow-lg hover:shadow-rose-300"
            >
              Start the Journey
            </button>
          </div>
        );

      case AppStage.GAME_1:
        return <HeartCatcher onWin={() => setStage(AppStage.GALLERY_1)} />;

      case AppStage.GALLERY_1:
        return (
          <GalleryView 
            context="catching hearts" 
            images={GALLERY_IMAGES.STAGE_1} 
            onNext={() => setStage(AppStage.GAME_2)} 
          />
        );

      case AppStage.GAME_2:
        return <MemoryMatch onWin={() => setStage(AppStage.GALLERY_2)} />;

      case AppStage.GALLERY_2:
        return (
          <GalleryView 
            context="matching romantic memories" 
            images={GALLERY_IMAGES.STAGE_2} 
            onNext={() => setStage(AppStage.GAME_3)} 
          />
        );

      case AppStage.GAME_3:
        return <WordScramble onWin={() => setStage(AppStage.GALLERY_3)} />;

      case AppStage.GALLERY_3:
        return (
          <GalleryView 
            context="unscrambling love letters" 
            images={GALLERY_IMAGES.STAGE_3} 
            onNext={() => setStage(AppStage.FINAL)} 
          />
        );

      case AppStage.FINAL:
        return (
          <div className="text-center p-10 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border-4 border-rose-300 animate-in zoom-in duration-1000">
            <h1 className="text-5xl font-romantic text-rose-600 mb-6">Happy Valentine's Day!</h1>
            <div className="mb-8 p-6 bg-rose-50 rounded-2xl italic text-gray-700 leading-loose">
              You've completed the journey, but our adventure together has only just begun. 
              You are my greatest reward, my favorite memory, and the word that makes my life make sense.
            </div>
            <div className="flex justify-center gap-4 mb-8">
               <div className="text-rose-500 animate-pulse">{ICONS.Heart}</div>
               <div className="text-rose-500 animate-bounce delay-100">{ICONS.Heart}</div>
               <div className="text-rose-500 animate-pulse delay-200">{ICONS.Heart}</div>
            </div>
            <button 
              onClick={() => setStage(AppStage.START)}
              className="text-rose-500 underline font-semibold"
            >
              Replay our story
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Layout currentTrack={currentTrack}>
      {renderStage()}
    </Layout>
  );
};

export default App;
