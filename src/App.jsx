import React from 'react';
import Hero from './components/Hero';
import Simulator from './components/Simulator';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased font-sans">
      <Hero />
      <main className="pb-20">
        <Simulator />
      </main>
      <footer className="text-center py-8 border-t border-slate-900 text-slate-500 text-sm">
        <p>&copy; 2026 Conecta-IA - Inteligência Artificial para o Varejo Local</p>
      </footer>
    </div>
  );
}

export default App;