import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="card">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Witaj w RAG Boilerplate!
        </h1>
        <p className="text-gray-600 mb-6">
          To jest gotowy boilerplate z React + TypeScript + Vite + TailwindCSS.
          Możesz teraz od razu przejść do generowania ekranów zgodnie z wytycznymi RAG.
        </p>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Dostępne komponenty:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Layout z nagłówkiem</li>
            <li>Przyciski (btn-primary, btn-secondary)</li>
            <li>Pola input (input-field)</li>
            <li>Karty (card)</li>
            <li>React Router do nawigacji</li>
            <li>TailwindCSS z custom colors</li>
          </ul>
        </div>
        
        <div className="mt-8">
          <button className="btn-primary mr-4">
            Przycisk Primary
          </button>
          <button className="btn-secondary">
            Przycisk Secondary
          </button>
        </div>
        
        <div className="mt-6">
          <input 
            type="text" 
            placeholder="Przykładowe pole input" 
            className="input-field"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
