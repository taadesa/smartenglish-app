import React from 'react';
import { UserStats, Word } from '../types';

interface HomeProps {
  stats: UserStats;
  dailyWord: Word;
  onStartQuiz: () => void;
  onNavigateReview: () => void;
}

const Home: React.FC<HomeProps> = ({ stats, dailyWord, onStartQuiz, onNavigateReview }) => {
  const progressPercent = (stats.completedToday / stats.dailyGoal) * 100;
  const strokeDashoffset = 440 - (440 * progressPercent) / 100;

  return (
    <div className="pb-32 pt-12 px-6">
      <header className="py-4 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-sm text-slate-500 font-medium">בוקר טוב,</span>
          <h1 className="text-2xl font-bold text-slate-900">יוסי 👋</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-orange-100 px-3 py-1 rounded-full flex items-center gap-1 border border-orange-200">
            <span className="material-icons text-orange-500 text-lg">local_fire_department</span>
            <span className="text-orange-700 font-bold">{stats.streak} ימים</span>
          </div>
          <button className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center">
            <span className="material-icons text-slate-600">notifications_none</span>
          </button>
        </div>
      </header>

      <section className="mt-4 bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col items-center">
        <h2 className="text-slate-700 font-semibold mb-6 w-full text-right">התקדמות יומית</h2>
        <div className="relative flex items-center justify-center">
          <svg className="w-40 h-40">
            <circle className="text-primary/10 stroke-current" cx="80" cy="80" fill="transparent" r="70" strokeWidth="12" />
            <circle 
              className="text-primary stroke-current transition-all duration-1000" 
              cx="80" cy="80" fill="transparent" r="70" 
              strokeLinecap="round" strokeWidth="12" 
              style={{ strokeDasharray: 440, strokeDashoffset, transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }} 
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-slate-900">{stats.completedToday}/{stats.dailyGoal}</span>
            <span className="text-xs text-slate-500">מילים להיום</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full mt-8">
          <div className="bg-primary/5 p-3 rounded-lg flex items-center gap-3">
            <div className="bg-primary/20 p-2 rounded-lg">
              <span className="material-icons text-primary text-sm">timer</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">זמן למידה</span>
              <span className="font-bold text-sm">{stats.learningTimeMinutes} דקות</span>
            </div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <span className="material-icons text-green-600 text-sm">check_circle</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">תשובות נכונות</span>
              <span className="font-bold text-sm">{stats.accuracy}%</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-slate-700 font-semibold mb-3 pr-1">מילת היום</h2>
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl overflow-hidden">
          <div className="flex p-4 gap-4">
            <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
              <img alt={dailyWord.word} className="w-full h-full object-cover" src={dailyWord.image} />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-slate-900 tracking-wide">{dailyWord.word}</h3>
                <button className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-icons text-lg">volume_up</span>
                </button>
              </div>
              <p className="text-slate-600 text-sm font-medium mt-1">{dailyWord.phonetic}</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-lg font-semibold text-primary">{dailyWord.translation}</span>
                <span className="text-[10px] bg-indigo-200 text-indigo-700 px-2 py-0.5 rounded uppercase tracking-wider">{dailyWord.type}</span>
              </div>
            </div>
          </div>
          <div className="px-4 pb-4">
            <div className="bg-white/80 p-3 rounded-lg border border-indigo-100/50">
              <p className="text-xs italic text-slate-500">"{dailyWord.example}"</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <button 
          onClick={onStartQuiz}
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 rounded-xl shadow-lg shadow-primary/25 flex items-center justify-center gap-3 transition-transform active:scale-95"
        >
          <span className="material-icons">play_circle_filled</span>
          <span className="text-lg">התחל בוחן יומי</span>
        </button>
        <p className="text-center text-slate-400 text-xs mt-3">כ-5 דקות • קבלת +50 נקודות ניסיון</p>
      </section>

      <section className="mt-4">
        <button 
          onClick={onNavigateReview}
          className="w-full bg-white border border-slate-200 text-slate-600 font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-transform active:scale-95"
        >
          <span className="material-icons">history</span>
          <span>חזרה על מילים מאתגרות</span>
        </button>
      </section>
    </div>
  );
};

export default Home;
