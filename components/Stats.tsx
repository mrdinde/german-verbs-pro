import React from 'react';
import { Stats as StatsType } from '../types';
import { Trash2, AlertTriangle } from 'lucide-react';

interface StatsProps {
  stats: StatsType;
  resetStats: () => void;
}

const Stats: React.FC<StatsProps> = ({ stats, resetStats }) => {
  const mistakes = Object.entries(stats.mistakes)
    .filter(([_, count]) => count > 0)
    .sort((a, b) => b[1] - a[1]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Your Progress</h2>

      {/* Main Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-2xl shadow-ios text-center">
             <div className="text-4xl font-black text-ios-blue mb-1">{stats.totalPracticed}</div>
             <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Total Answers</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-ios text-center">
             <div className="text-4xl font-black text-ios-green mb-1">
                {stats.totalPracticed ? Math.round((stats.correctCount / stats.totalPracticed) * 100) : 0}%
             </div>
             <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Accuracy</div>
        </div>
      </div>

      {/* Mistake List */}
      <div className="bg-white rounded-2xl shadow-ios overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center space-x-2 bg-red-50/50">
            <AlertTriangle className="text-ios-red" size={20} />
            <h3 className="font-bold text-gray-900">Problem Words</h3>
        </div>
        
        {mistakes.length === 0 ? (
            <div className="p-8 text-center text-gray-400">
                <p>No mistakes recorded yet. Excellent work!</p>
            </div>
        ) : (
            <div className="divide-y divide-gray-100 max-h-[400px] overflow-y-auto">
                {mistakes.map(([verb, count]) => (
                    <div key={verb} className="flex items-center justify-between p-4 hover:bg-gray-50">
                        <span className="font-semibold text-gray-800 text-lg">{verb}</span>
                        <div className="flex items-center space-x-1 bg-red-100 px-3 py-1 rounded-full">
                            <span className="text-ios-red font-bold text-sm">{count}</span>
                            <span className="text-ios-red text-xs">misses</span>
                        </div>
                    </div>
                ))}
            </div>
        )}
      </div>

      {/* Reset Zone */}
      <div className="pt-8 text-center">
        <button 
            onClick={() => {
                if(confirm("Are you sure you want to delete all progress?")) resetStats();
            }}
            className="text-red-400 text-sm flex items-center justify-center space-x-2 mx-auto hover:text-ios-red transition-colors"
        >
            <Trash2 size={16} />
            <span>Reset All Progress</span>
        </button>
      </div>
    </div>
  );
};

export default Stats;