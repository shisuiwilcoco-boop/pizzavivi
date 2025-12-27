
import React from 'react';
import { CartItem } from './types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, cart, onUpdateQuantity, onRemove }) => {
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-black/85 backdrop-blur-lg transition-opacity" onClick={onClose}></div>
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className={`w-screen max-w-md bg-[#050508] border-l border-white/10 flex flex-col transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-10 border-b border-white/5 flex justify-between items-center bg-[#0a0a0f]">
            <div className="flex flex-col">
              <h2 className="text-2xl font-display font-bold italic text-white flex items-center gap-4">
                <i className="fas fa-shopping-basket text-emerald-500"></i>
                VOTRE PANIER
              </h2>
              <span className="text-[10px] text-white/30 font-bold tracking-[0.4em] uppercase mt-2 italic">Cargaison de la Station Vivi</span>
            </div>
            <button onClick={onClose} className="w-12 h-12 flex items-center justify-center hover:bg-white/5 rounded-full text-white transition-all">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-10 space-y-10">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                <div className="w-40 h-40 glass rounded-3xl flex items-center justify-center mb-10 animate-pulse">
                  <i className="fas fa-pizza-slice text-5xl text-white"></i>
                </div>
                <p className="text-white font-bold uppercase text-[10px] tracking-[0.5em] leading-loose">
                  Le pont est vide.<br/>El Pizzaiolo attend votre signal.
                </p>
              </div>
            ) : (
              cart.map(item => (
                <div key={item.id} className="flex gap-8 items-center p-6 glass-card border-white/5 hover:border-emerald-500/30 transition-all">
                  <div className="w-20 h-20 rounded-xl overflow-hidden border border-white/10">
                    <img 
                      src={`./${item.image}`} 
                      alt={item.name} 
                      className="w-full h-full object-cover filter brightness-90"
                      onError={(e) => (e.target as HTMLImageElement).src = 'https://picsum.photos/100'} 
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display font-bold text-white italic text-lg uppercase">{item.name}</h4>
                    <p className="text-sm text-amber-500 font-bold mt-1 italic">{item.price.toLocaleString()} Fcfa</p>
                    <div className="flex items-center gap-6 mt-4">
                      <div className="flex items-center bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                        <button onClick={() => onUpdateQuantity(item.id, -1)} className="px-4 py-2 hover:bg-emerald-600 transition text-[10px]"><i className="fas fa-minus"></i></button>
                        <span className="w-12 text-center font-bold text-xs text-white">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, 1)} className="px-4 py-2 hover:bg-emerald-600 transition text-[10px]"><i className="fas fa-plus"></i></button>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => onRemove(item.id)} className="text-white/20 hover:text-red-500 transition-colors p-2">
                    <i className="fas fa-trash-alt text-sm"></i>
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="p-10 bg-[#0a0a0f] border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <div className="flex justify-between items-center mb-10">
              <span className="text-white/30 font-bold uppercase text-[11px] tracking-[0.4em]">Total à Régler</span>
              <div className="flex flex-col items-end">
                <span className="text-4xl font-display font-bold text-white italic">{total.toLocaleString()}</span>
                <span className="text-[10px] text-emerald-500 font-bold tracking-widest uppercase">Fcfa</span>
              </div>
            </div>
            <button 
              disabled={cart.length === 0}
              className="w-full py-6 bg-emerald-600 text-white rounded-2xl font-bold text-sm tracking-[0.4em] uppercase hover:bg-emerald-500 transition-all shadow-[0_20px_40px_rgba(16,185,129,0.3)] disabled:opacity-20 disabled:cursor-not-allowed flex items-center justify-center gap-5"
            >
              <i className="fas fa-rocket"></i>
              VALIDER LA COMMANDE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
