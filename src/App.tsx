import React, { useState } from 'react';
import { Screen, UserStats, Word } from './types';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Flashcard from './screens/Flashcard';
import Summary from './screens/Summary';
import Review from './screens/Review';
import LevelSelect from './screens/LevelSelect';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.HOME);
  const [stats, setStats] = useState<UserStats>({
    dailyGoal: 20,
    completedToday: 15,
    learningTimeMinutes: 12,
    accuracy: 92,
    streak: 5,
    level: 'beginner'
  });

  const dailyWord: Word = {
    id: '1',
    word: 'Adventure',
    translation: 'הרפתקה',
    phonetic: '/ədˈventʃər/',
    type: 'Noun',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400',
    example: "Starting a new book is like going on a new adventure."
  };

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.HOME:
        return <Home stats={stats} dailyWord={dailyWord} onStartQuiz={() => navigateTo(Screen.QUIZ)} onNavigateReview={() => navigateTo(Screen.REVIEW)} />;
      case Screen.QUIZ:
        return <Quiz onComplete={() => navigateTo(Screen.SUMMARY)} onCancel={() => navigateTo(Screen.HOME)} />;
      case Screen.FLASHCARD:
        return <Flashcard onNext={() => navigateTo(Screen.QUIZ)} onCancel={() => navigateTo(Screen.HOME)} />;
      case Screen.SUMMARY:
        return <Summary stats={stats} onHome={() => navigateTo(Screen.HOME)} onReview={() => navigateTo(Screen.REVIEW)} />;
      case Screen.REVIEW:
        return <Review onBack={() => navigateTo(Screen.HOME)} />;
      case Screen.LEVELS:
        return <LevelSelect stats={stats} onSelect={() => navigateTo(Screen.HOME)} />;
      default:
        return <Home stats={stats} dailyWord={dailyWord} onStartQuiz={() => navigateTo(Screen.QUIZ)} onNavigateReview={() => navigateTo(Screen.REVIEW)} />;
    }
  };

  return (
    <div className="min-h-screen max-w-md mx-auto bg-background-light relative shadow-xl overflow-x-hidden">
      {renderScreen()}
      
      {(currentScreen === Screen.HOME || currentScreen === Screen.LEVELS) && (
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 backdrop-blur-lg border-t border-slate-200 pb-8 pt-2 px-8 flex justify-between items-center z-50">
          <button 
            onClick={() => navigateTo(Screen.HOME)}
            className={`flex flex-col items-center gap-1 ${currentScreen === Screen.HOME ? 'text-primary' : 'text-slate-400'}`}
          >
            <span className="material-icons">home</span>
            <span className="text-[10px] font-medium">בית</span>
          </button>
          <button 
            onClick={() => navigateTo(Screen.LEVELS)}
            className={`flex flex-col items-center gap-1 ${currentScreen === Screen.LEVELS ? 'text-primary' : 'text-slate-400'}`}
          >
            <span className="material-icons">trending_up</span>
            <span className="text-[10px] font-medium">רמות</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-icons">leaderboard</span>
            <span className="text-[10px] font-medium">דירוג</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-icons">person</span>
            <span className="text-[10px] font-medium">פרופיל</span>
          </button>
        </nav>
      )}

      <div className="fixed bottom-1 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-300 rounded-full z-[60]"></div>
    </div>
  );
};

export default App;
