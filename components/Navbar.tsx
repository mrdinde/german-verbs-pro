import React from 'react';
import { Home, Zap, BookOpen, BarChart2, Library } from 'lucide-react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const navItems = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'quiz', label: 'Quiz', icon: Zap },
    { id: 'study', label: 'Study', icon: BookOpen },
    { id: 'dictionary', label: 'List', icon: Library },
    { id: 'stats', label: 'Stats', icon: BarChart2 },
  ];

  return (
    <>
      {/* Desktop Header */}
      <div className="hidden md:flex fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 px-6 py-4 justify-between items-center">
        <h1 className="text-xl font-bold text-ios-blue">🇩🇪 German Verbs</h1>
        <div className="flex space-x-2 bg-ios-fill p-1 rounded-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setView(item.id as ViewState)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                currentView === item.id
                  ? 'bg-white text-black shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Bottom Tab Bar */}
      <div className="md:hidden fixed bottom-0 w-full bg-white/90 backdrop-blur-xl border-t border-gray-200 pb-safe z-50">
        <div className="flex justify-around items-center pt-2 pb-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setView(item.id as ViewState)}
                className={`flex flex-col items-center justify-center w-14 transition-colors ${
                  isActive ? 'text-ios-blue' : 'text-gray-400'
                }`}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] mt-1 font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;