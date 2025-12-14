import React, { useState } from 'react';
import { GERMAN_VERBS } from '../constants';
import { ChevronLeft, ChevronRight, Eye, EyeOff } from 'lucide-react';

const Study: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const current = GERMAN_VERBS[index];

  const next = () => {
    setIndex((prev) => (prev + 1) % GERMAN_VERBS.length);
    if (!isLocked) setIsRevealed(false);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + GERMAN_VERBS.length) % GERMAN_VERBS.length);
    if (!isLocked) setIsRevealed(false);
  };

  const toggleReveal = () => setIsRevealed(!isRevealed);
  
  const toggleLock = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newState = !isLocked;
    setIsLocked(newState);
    if (newState) setIsRevealed(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-xl mx-auto">
      <div 
        onClick={toggleReveal}
        className="w-full relative bg-white rounded-[30px] shadow-ios-float overflow-hidden cursor-pointer group active:scale-[0.99] transition-transform duration-200 min-h-[420px] flex flex-col items-center justify-center p-8 text-center"
      >
        <div className="absolute top-6 right-6 z-10">
            <button 
                onClick={toggleLock}
                className={`p-2 rounded-full transition-colors ${isLocked ? 'bg-ios-blue text-white' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
            >
                {isLocked ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
        </div>

        <div className="mb-8">
            <h2 className="text-5xl font-black text-gray-900 mb-3">{current.verb}</h2>
            <p className="text-xl text-gray-500">{current.meaning}</p>
        </div>

        <div className={`transition-all duration-500 ease-in-out w-full ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 blur-sm'}`}>
            <div className="grid grid-cols-1 gap-4 w-full bg-ios-fill/50 p-6 rounded-2xl">
                <div>
                    <span className="text-xs uppercase font-bold text-gray-400">Präsens (3.Sg)</span>
                    <p className="text-lg font-semibold text-gray-800">{current.praesens}</p>
                </div>
                <div className="w-full h-px bg-gray-200/50"></div>
                <div>
                    <span className="text-xs uppercase font-bold text-gray-400">Präteritum</span>
                    <p className="text-lg font-semibold text-ios-blue">{current.praeteritum}</p>
                </div>
                <div className="w-full h-px bg-gray-200/50"></div>
                <div>
                    <span className="text-xs uppercase font-bold text-gray-400">Perfekt</span>
                    <p className="text-lg font-semibold text-ios-blue">{current.perfekt}</p>
                </div>
            </div>
        </div>

        {!isRevealed && (
            <div className="absolute bottom-10 text-gray-300 text-sm font-medium animate-pulse">
                Tap to reveal
            </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between w-full mt-8 px-4">
        <button 
            onClick={prev}
            className="p-4 bg-white rounded-full shadow-ios text-gray-600 active:bg-gray-50 transition-colors"
        >
            <ChevronLeft size={28} />
        </button>
        
        <span className="text-gray-400 font-mono text-sm">
            {index + 1} / {GERMAN_VERBS.length}
        </span>

        <button 
            onClick={next}
            className="p-4 bg-ios-blue rounded-full shadow-lg shadow-blue-200 text-white active:scale-95 transition-all"
        >
            <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
};

export default Study;