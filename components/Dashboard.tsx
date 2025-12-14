import React from 'react';
import { Stats } from '../types';
import { GERMAN_VERBS } from '../constants';
import { Activity, AlertCircle, Trophy } from 'lucide-react';

interface DashboardProps {
  stats: Stats;
  onStartQuiz: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ stats, onStartQuiz }) => {
  const totalVerbs = GERMAN_VERBS.length;
  const mistakeCount = Object.keys(stats.mistakes).filter((k) => stats.mistakes[k] > 0).length;
  const accuracy = stats.totalPracticed === 0 
    ? 0 
    : Math.round((stats.correctCount / stats.totalPracticed) * 100);
  
  // Progress = unique words practiced / total words
  const practicedCount = Object.keys(stats.practiced || {}).length;
  const progress = Math.min(100, Math.round((practicedCount / totalVerbs) * 100));

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Guten Morgen";
    if (hour < 18) return "Guten Tag";
    return "Guten Abend";
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="bg-gradient-to-br from-ios-blue to-blue-600 rounded-[20px] p-6 text-white shadow-ios-float">
        <h1 className="text-3xl font-bold mb-2">{getGreeting()}!</h1>
        <p className="opacity-90 text-sm font-medium">
          {new Date().toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' })}
        </p>
        <button 
          onClick={onStartQuiz}
          className="mt-6 bg-white text-ios-blue px-6 py-3 rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
        >
          Start Practice
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-[20px] shadow-ios flex flex-col justify-between h-32">
          <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center text-orange-500">
            <Activity size={18} />
          </div>
          <div>
            <span className="text-3xl font-bold text-gray-900">{stats.totalPracticed}</span>
            <p className="text-xs text-gray-500 font-medium uppercase mt-1">Total Attempts</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-[20px] shadow-ios flex flex-col justify-between h-32">
          <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center text-green-500">
            <Trophy size={18} />
          </div>
          <div>
            <span className="text-3xl font-bold text-gray-900">{accuracy}%</span>
            <p className="text-xs text-gray-500 font-medium uppercase mt-1">Accuracy</p>
          </div>
        </div>
      </div>

      {/* Learning Overview */}
      <div className="bg-white p-5 rounded-[20px] shadow-ios">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
             <div className="w-5 h-5 rounded-full bg-ios-blue flex items-center justify-center text-white text-xs font-bold">
                 {progress}%
             </div>
            <span className="font-semibold text-gray-900">Learning Progress</span>
          </div>
          <span className="text-gray-500 font-medium text-sm">{practicedCount} / {totalVerbs} verbs</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3">
          <div 
            className="bg-ios-blue h-3 rounded-full transition-all duration-1000" 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Secondary Info: Mistakes */}
        {mistakeCount > 0 && (
            <div className="flex items-center justify-end mt-3 space-x-1.5 text-xs text-ios-red">
                 <AlertCircle size={14} />
                 <span>{mistakeCount} words need review</span>
            </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;