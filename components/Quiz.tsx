import React, { useState, useEffect, useRef } from 'react';
import { Stats, Verb, QuizMode } from '../types';
import { GERMAN_VERBS } from '../constants';
import { Check, X, ArrowRight, RefreshCw, Settings2 } from 'lucide-react';

interface QuizProps {
  stats: Stats;
  updateStats: (newStats: Stats) => void;
}

const cleanString = (str: string) => {
  // Remove content in parenthesis, lowercase, trim, handle slash
  const cleaned = str.toLowerCase().replace(/\([^)]*\)/g, ' ').replace(/\s+/g, ' ').trim();
  // Handle slashes like "ist/hat gefahren" -> split and keep mostly the full forms
  // For the purpose of this simple checker, we will return an array of valid possibilities
  const parts = cleaned.split('/');
  
  // Specific fix for aux verbs "ist/hat"
  const possibilities: string[] = [];
  
  // Base split
  parts.forEach(p => possibilities.push(p.trim()));

  // If input string was like "ist/hat gefahren" (logic from original code requirement)
  if (cleaned.includes('ist/hat') || cleaned.includes('hat/ist')) {
     const verbPart = cleaned.replace('ist/hat', '').replace('hat/ist', '').replace('/', '').trim();
     possibilities.push(`hat ${verbPart}`);
     possibilities.push(`ist ${verbPart}`);
  }

  return possibilities;
};

const checkAnswer = (input: string, correct: string) => {
  if (!input) return false;
  const validAnswers = cleanString(correct);
  const normalizedInput = input.trim().toLowerCase();
  return validAnswers.some(ans => normalizedInput.includes(ans) || ans === normalizedInput); // simplified loose match
};

const Quiz: React.FC<QuizProps> = ({ stats, updateStats }) => {
  // Setup State
  const [configMode, setConfigMode] = useState<QuizMode>('all');
  const [queue, setQueue] = useState<Verb[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputs, setInputs] = useState({ prat: '', perf: '' });
  const [result, setResult] = useState<{ prat: boolean; perf: boolean; submitted: boolean }>({ 
    prat: false, perf: false, submitted: false 
  });
  const pratInputRef = useRef<HTMLInputElement>(null);

  // Initialize Queue
  const startQuiz = (mode: QuizMode) => {
    let pool = [...GERMAN_VERBS];
    if (mode === 'mistakes') {
      pool = pool.filter(v => (stats.mistakes[v.verb] || 0) > 0);
    }
    
    // Shuffle
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    if (mode === '20') pool = pool.slice(0, 20);
    if (mode === '10') pool = pool.slice(0, 10);

    setQueue(pool);
    setCurrentIndex(0);
    setInputs({ prat: '', perf: '' });
    setResult({ prat: false, perf: false, submitted: false });
    setConfigMode(mode);
  };

  useEffect(() => {
    if (queue.length === 0) startQuiz('all');
  }, []);

  useEffect(() => {
    // Auto focus first input on new question
    if (!result.submitted && queue.length > 0) {
      pratInputRef.current?.focus();
    }
  }, [currentIndex, result.submitted, queue.length]);


  const handleSubmit = () => {
    const currentVerb = queue[currentIndex];
    const isPratCorrect = checkAnswer(inputs.prat, currentVerb.praeteritum);
    const isPerfCorrect = checkAnswer(inputs.perf, currentVerb.perfekt);

    const newMistakes = { ...stats.mistakes };
    
    if (!isPratCorrect || !isPerfCorrect) {
      newMistakes[currentVerb.verb] = (newMistakes[currentVerb.verb] || 0) + 1;
    }

    const newPracticed = { ...stats.practiced, [currentVerb.verb]: true };

    updateStats({
      ...stats,
      totalPracticed: stats.totalPracticed + 1,
      correctCount: (isPratCorrect && isPerfCorrect) ? stats.correctCount + 1 : stats.correctCount,
      mistakes: newMistakes,
      practiced: newPracticed,
      lastPracticeDate: new Date().toISOString()
    });

    setResult({
      prat: isPratCorrect,
      perf: isPerfCorrect,
      submitted: true
    });
  };

  const nextQuestion = () => {
    if (currentIndex < queue.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // End of queue, restart same mode
      startQuiz(configMode);
    }
    setInputs({ prat: '', perf: '' });
    setResult({ prat: false, perf: false, submitted: false });
  };

  if (queue.length === 0) {
    return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center p-6">
            <div className="bg-gray-100 p-6 rounded-full mb-4">
                 <RefreshCw size={40} className="text-gray-400" />
            </div>
            <h2 className="text-xl font-bold mb-2">No verbs found</h2>
            <p className="text-gray-500 mb-6">Your mistake list might be empty.</p>
            <button 
                onClick={() => startQuiz('all')}
                className="bg-ios-blue text-white px-6 py-3 rounded-xl font-semibold"
            >
                Start Standard Quiz
            </button>
        </div>
    );
  }

  const currentVerb = queue[currentIndex];

  return (
    <div className="max-w-xl mx-auto space-y-6">
      {/* Top Bar controls */}
      <div className="flex items-center justify-between bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Settings2 size={16} />
          <select 
            value={configMode} 
            onChange={(e) => startQuiz(e.target.value as QuizMode)}
            className="bg-transparent font-medium outline-none text-gray-900"
          >
            <option value="all">All Words</option>
            <option value="20">Random 20</option>
            <option value="10">Random 10</option>
            <option value="mistakes">Mistakes Only</option>
          </select>
        </div>
        <span className="text-sm font-mono text-gray-400">
            {currentIndex + 1} / {queue.length}
        </span>
      </div>

      {/* Card */}
      <div className="bg-white rounded-[24px] shadow-ios p-8 text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 tracking-tight">
          {currentVerb.verb}
        </h2>
        <p className="text-lg text-gray-500 font-medium mb-8">{currentVerb.meaning}</p>

        <div className="w-full space-y-4 text-left">
            {/* Prateritum Input */}
            <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 mb-1 block">Präteritum</label>
                <div className="relative">
                    <input
                        ref={pratInputRef}
                        type="text"
                        disabled={result.submitted}
                        value={inputs.prat}
                        onChange={(e) => setInputs({...inputs, prat: e.target.value})}
                        placeholder="e.g. backte"
                        autoComplete="off"
                        className={`w-full bg-ios-fill px-4 py-4 rounded-xl text-lg font-medium outline-none transition-all border-2 
                        ${result.submitted 
                            ? (result.prat ? 'border-ios-green bg-green-50 text-green-900' : 'border-ios-red bg-red-50 text-red-900') 
                            : 'border-transparent focus:border-ios-blue focus:bg-white'}`}
                    />
                    {result.submitted && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                            {result.prat ? <Check className="text-ios-green" /> : <X className="text-ios-red" />}
                        </div>
                    )}
                </div>
                {result.submitted && !result.prat && (
                    <p className="text-ios-red text-sm mt-1 font-medium pl-1">Correct: {currentVerb.praeteritum}</p>
                )}
            </div>

            {/* Perfekt Input */}
            <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 mb-1 block">Perfekt</label>
                <div className="relative">
                    <input
                        type="text"
                        disabled={result.submitted}
                        value={inputs.perf}
                        onChange={(e) => setInputs({...inputs, perf: e.target.value})}
                        placeholder="e.g. hat gebacken"
                        autoComplete="off"
                        className={`w-full bg-ios-fill px-4 py-4 rounded-xl text-lg font-medium outline-none transition-all border-2 
                        ${result.submitted 
                            ? (result.perf ? 'border-ios-green bg-green-50 text-green-900' : 'border-ios-red bg-red-50 text-red-900') 
                            : 'border-transparent focus:border-ios-blue focus:bg-white'}`}
                    />
                     {result.submitted && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                            {result.perf ? <Check className="text-ios-green" /> : <X className="text-ios-red" />}
                        </div>
                    )}
                </div>
                {result.submitted && !result.perf && (
                    <p className="text-ios-red text-sm mt-1 font-medium pl-1">Correct: {currentVerb.perfekt}</p>
                )}
            </div>
        </div>
      </div>

      {/* Action Button */}
      {!result.submitted ? (
        <button
          onClick={handleSubmit}
          className="w-full bg-ios-blue text-white py-4 rounded-[18px] text-lg font-bold shadow-lg shadow-blue-200 active:scale-[0.98] transition-all"
        >
          Check Answer
        </button>
      ) : (
        <button
          onClick={nextQuestion}
          className="w-full bg-gray-900 text-white py-4 rounded-[18px] text-lg font-bold shadow-lg shadow-gray-300 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          Next Verb <ArrowRight size={20} />
        </button>
      )}
    </div>
  );
};

export default Quiz;