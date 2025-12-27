
import React, { useState, useEffect } from 'react';
import SolarSystem from './SolarSystem';
import { PIZZA_JOKES, LOCATION_INFO } from './constants';

const Hero: React.FC = () => {
  const [jokeIndex, setJokeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setJokeIndex(prev => (prev + 1) % PIZZA_JOKES.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SolarSystem />
      </div>

      <div className="relative z-10 text-center max-w-6xl">
        <div className="mb-8 flex justify-center">
          <div className="px-6 py-2 rounded-full border border-emerald-500/30 bg-emerald-900/10 backdrop-blur-md flex items-center gap-3">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-emerald-400">Pizzavivi Express : Secteur Adounko</span>
          </div>
        </div>
        
        <h1 className="text-8xl md:text-[150px] font-display font-bold mb-4 tracking-tighter leading-none italic">
          Pizza<span className="gradient-text">vivi</span>
        </h1>
        
        <p className="text-xl md:text-3xl font-light text-white/60 mb-16 tracking-wide font-display italic">
          "Naturellement Cuisinée, Galactiquement Savoureuse."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          <div className="glass-card p-8 flex flex-col justify-center text-left border-l-4 border-l-amber-500">
            <span className="text-[9px] font-bold text-amber-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <i className="fas fa-globe"></i> Humour du Monde
            </span>
            <p className="text-sm text-white/80 leading-relaxed italic">"{PIZZA_JOKES[jokeIndex]}"</p>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <button 
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full py-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-[0.4em] rounded-2xl transition-all shadow-[0_20px_50px_rgba(16,185,129,0.3)] group"
            >
              Explorer le Menu
              <i className="fas fa-arrow-right ml-4 group-hover:translate-x-2 transition-transform"></i>
            </button>
            <div className="flex justify-center gap-4 text-white/30 text-[9px] font-bold uppercase tracking-widest">
               <span>Pâte Naturelle</span>
               <span>•</span>
               <span>Ingrédients Frais</span>
            </div>
          </div>

          <div className="glass-card p-8 flex flex-col justify-center text-left border-r-4 border-r-emerald-500">
            <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <i className="fas fa-map-marker-alt"></i> Base d'Opération
            </span>
            <p className="text-xs text-white/60 leading-relaxed uppercase">{LOCATION_INFO}</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 flex flex-col items-center gap-4 opacity-20">
         <span className="text-[8px] font-bold uppercase tracking-[0.5em]">Scroll to orbit</span>
         <div className="w-px h-12 bg-white"></div>
      </div>
    </section>
  );
};

export default Hero;
