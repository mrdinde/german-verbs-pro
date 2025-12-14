import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';
import Study from './components/Study';
import Dictionary from './components/Dictionary';
import StatsView from './components/Stats';
import { ViewState, Stats } from './types';
import { getInitialStats, saveStats } from './utils/storage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');
  const [stats, setStats] = useState<Stats>(getInitialStats());

  // Save stats whenever they change
  useEffect(() => {
    saveStats(stats);
  }, [stats]);

  const handleUpdateStats = (newStats: Stats) => {
    setStats(newStats);
  };

  const handleResetStats = () => {
    const emptyStats: Stats = {
        totalPracticed: 0,
        correctCount: 0,
        mistakes: {},
        practiced: {},
        lastPracticeDate: null
    };
    setStats(emptyStats);
    saveStats(emptyStats); // Force save immediately
    window.location.reload();
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard stats={stats} onStartQuiz={() => setCurrentView('quiz')} />;
      case 'quiz':
        return <Quiz stats={stats} updateStats={handleUpdateStats} />;
      case 'study':
        return <Study />;
      case 'dictionary':
        return <Dictionary />;
      case 'stats':
        return <StatsView stats={stats} resetStats={handleResetStats} />;
      default:
        return <Dashboard stats={stats} onStartQuiz={() => setCurrentView('quiz')} />;
    }
  };

  return (
    <div className="min-h-screen bg-ios-bg text-gray-900 font-sans pb-24 md:pb-0 md:pt-20">
      <Navbar currentView={currentView} setView={setCurrentView} />
      
      <main className="max-w-4xl mx-auto px-4 py-6 md:px-8">
        {renderView()}
      </main>
    </div>
  );
};

export default App;