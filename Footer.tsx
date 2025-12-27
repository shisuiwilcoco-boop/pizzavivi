
import React from 'react';
import { ORDER_PHONE, LOCATION_INFO } from './constants';

// Defining the Footer component with capitalized name
const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-40 pb-20 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 relative z-10">
        <div className="space-y-10">
          <div className="flex flex-col">
            <span className="text-5xl font-display font-bold italic leading-none">Pizza<span className="text-emerald-500">vivi</span></span>
            <span className="text-[9px] font-bold text-white/30 tracking-[0.6em] uppercase mt-4">L'Art de la Pizza Naturelle</span>
          </div>
          <p className="text-white/30 text-xs font-medium leading-relaxed uppercase tracking-widest max-w-xs">
            "Le pont entre la terre d'Adounko et l'immensité des saveurs galactiques."
          </p>
        </div>

        <div className="space-y-8">
          <h4 className="text-emerald-500 font-bold text-[10px] tracking-widest uppercase mb-10">Navigation</h4>
          <ul className="space-y-6 text-[10px] font-bold tracking-widest uppercase text-white/40">
            <li><a href="#menu" className="hover:text-emerald-400 transition-colors">La Carte Bio</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Notre Philosophie</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Le Secteur Togbin</a></li>
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="text-emerald-500 font-bold text-[10px] tracking-widest uppercase mb-10">Base de Liaison</h4>
          <div className="space-y-6">
             <p className="text-xs text-white/60 leading-loose uppercase tracking-wide">
               {LOCATION_INFO}
             </p>
             <div className="inline-flex items-center gap-3 px-5 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-[10px] font-bold text-emerald-500">
               <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
               Base Ouverte • 11:00 — 23:00
             </div>
          </div>
        </div>

        <div className="space-y-12">
          <h4 className="text-emerald-500 font-bold text-[10px] tracking-widest uppercase mb-10">Ligne Directe</h4>
          <div className="space-y-6">
            <p className="text-[10px] font-bold uppercase text-white/40">Commande Express</p>
            <p className="text-4xl font-display font-bold text-white hover:text-emerald-400 transition-colors cursor-pointer tracking-tighter italic">
              {ORDER_PHONE}
            </p>
          </div>
          <div className="flex gap-6">
             <a href="#" className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:border-emerald-500 hover:text-emerald-500 transition-all">
                <i className="fab fa-whatsapp"></i>
             </a>
             <a href="#" className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:border-emerald-500 hover:text-emerald-400 transition-all">
                <i className="fab fa-instagram"></i>
             </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-20 mt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[9px] font-bold text-white/10 tracking-[1em] uppercase">
        <span>© 2025 Pizzavivi Express • Pureté Garantie</span>
        <span className="tracking-widest">Cuisiné avec Amour à Adounko Kpevi</span>
      </div>
    </footer>
  );
};

// Ensure export matches the component name exactly
export default Footer;
