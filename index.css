import React, { useState } from 'react';

interface QuizProps {
  onComplete: () => void;
  onCancel: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(3);
  const totalSteps = 10;
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const options = [
    { id: 1, label: 'Dog', image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=200' },
    { id: 2, label: 'Apple', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=200' },
    { id: 3, label: 'House', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=200' },
    { id: 4, label: 'Orange', image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=200' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background-light">
      <header className="px-6 py-6 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <button onClick={onCancel} className="p-2 hover:bg-primary/10 rounded-full transition-colors">
            <span className="material-icons text-slate-600">close</span>
          </button>
          <div className="flex flex-col items-end">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">שלב {currentStep} מתוך {totalSteps}</span>
            <h1 className="text-xl font-bold">הקשיבו ובחרו</h1>
          </div>
        </div>
        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500" 
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </header>

      <main className="flex-grow flex flex-col px-6 pb-8">
        <section className="flex flex-col items-center justify-center py-12 gap-6">
          <button className="w-32 h-32 bg-primary rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform group">
            <span className="material-icons text-white text-6xl group-hover:scale-110 transition-transform">volume_up</span>
          </button>
          <p className="text-slate-500 font-medium">לחצו להשמעה</p>
        </section>

        <section className="grid grid-cols-2 gap-4 mt-auto">
          {options.map((option) => (
            <button 
              key={option.id}
              onClick={() => setSelectedOption(option.id)}
              className={`relative group bg-white border-2 rounded-xl overflow-hidden shadow-sm aspect-square flex flex-col transition-all ${
                selectedOption === option.id ? 'border-primary' : 'border-transparent hover:border-primary/30'
              }`}
            >
              <div className="relative flex-grow overflow-hidden">
                <img src={option.image} alt={option.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              {selectedOption === option.id && (
                <div className="absolute top-2 right-2 bg-primary rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                  <span className="material-icons text-white text-xs">check</span>
                </div>
              )}
              <div className={`p-3 text-center ${selectedOption === option.id ? 'bg-primary/5' : ''}`}>
                <span className={`font-semibold ${selectedOption === option.id ? 'text-primary' : 'text-slate-700'}`}>{option.label}</span>
              </div>
            </button>
          ))}
        </section>
      </main>

      <footer className="p-6 bg-white border-t border-slate-100 pb-10">
        <div className="flex flex-col gap-4">
          <button 
            onClick={() => selectedOption !== null && onComplete()}
            disabled={selectedOption === null}
            className={`w-full text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all ${
              selectedOption !== null ? 'bg-primary shadow-primary/20 hover:bg-primary/90' : 'bg-slate-300 shadow-none cursor-not-allowed'
            }`}
          >
            <span>בדקו תשובה</span>
            <span className="material-icons">arrow_back</span>
          </button>
          <div className="flex justify-center gap-8">
            <button className="text-slate-400 flex items-center gap-1 hover:text-primary transition-colors">
              <span className="material-icons text-sm">flag</span>
              <span className="text-xs">דיווח על שגיאה</span>
            </button>
            <button className="text-slate-400 flex items-center gap-1 hover:text-primary transition-colors">
              <span className="material-icons text-sm">skip_next</span>
              <span className="text-xs">דלגו על השאלה</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Quiz;
