
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-700 px-6 ${isScrolled ? 'py-4' : 'py-10'}`}>
      <div className={`max-w-7xl mx-auto flex justify-between items-center transition-all ${isScrolled ? 'bg-slate-950/80 backdrop-blur-2xl px-8 py-4 border border-white/10 rounded-2xl shadow-2xl' : ''}`}>
        
        <div 
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:rotate-12">
            <i className="fas fa-leaf text-xl"></i>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-display font-bold italic text-white leading-none tracking-tighter">Vivi</span>
            <span className="text-[8px] font-bold text-white/30 tracking-[0.4em] uppercase">Nature & Cosmos</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-14">
          {['Menu Galactique', 'La Source', 'Localisation'].map((item) => (
            <button 
              key={item}
              className="text-[10px] font-bold text-white/40 hover:text-emerald-400 tracking-[0.5em] transition-all uppercase"
            >
              {item}
            </button>
          ))}
        </nav>

        <button 
          onClick={onOpenCart}
          className="relative group bg-white text-slate-950 px-8 py-3.5 rounded-xl transition-all hover:bg-emerald-600 hover:text-white"
        >
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Panier</span>
            <div className="w-6 h-6 bg-slate-900 text-white rounded-lg flex items-center justify-center text-[10px] font-black group-hover:bg-white group-hover:text-emerald-600 transition-colors">
                {cartCount}
            </div>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
