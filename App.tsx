
import React, { useState, useCallback, useMemo } from 'react';
import Header from './Header';
import Hero from './Hero';
import MenuItemCard from './MenuItemCard';
import CartSidebar from './CartSidebar';
import AIAssistant from './AIAssistant';
import Footer from './Footer';
import { PIZZA_MENU, DRINK_MENU } from './constants';
import { MenuItem, CartItem, Category } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>('pizza');

  const addToCart = useCallback((item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.id === id) {
        const newQty = Math.max(1, i.quantity + delta);
        return { ...i, quantity: newQty };
      }
      return i;
    }));
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  }, []);

  const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

  return (
    <div className="min-h-screen flex flex-col bg-[#020617] selection:bg-emerald-500/30">
      <Header cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
      
      <main className="flex-grow">
        <Hero />
        
        <section id="menu" className="max-w-7xl mx-auto px-6 py-40">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-16 mb-32 border-b border-white/5 pb-24">
            <div className="max-w-2xl">
              <div className="flex items-center gap-5 text-emerald-500 text-[10px] font-bold uppercase tracking-[0.5em] mb-8">
                <div className="w-16 h-[1px] bg-emerald-500"></div>
                <span>Le Goût de la Nature</span>
              </div>
              <h2 className="text-6xl md:text-9xl font-display font-bold text-white tracking-tighter leading-none italic">
                Menu de la<br/><span className="gradient-text">Station Vivi</span>
              </h2>
            </div>
            
            <div className="flex p-1.5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl">
              {[
                { id: 'pizza', label: 'Pizzas au Feu de Bois' },
                { id: 'drink', label: 'Boissons Naturelles' }
              ].map(cat => (
                <button 
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as Category)}
                  className={`px-12 py-5 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
                    activeCategory === cat.id 
                    ? 'bg-emerald-600 text-white shadow-2xl scale-105' 
                    : 'text-white/30 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {(activeCategory === 'pizza' ? PIZZA_MENU : DRINK_MENU).map(item => (
              <MenuItemCard 
                key={item.id} 
                item={item} 
                onAdd={addToCart} 
              />
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-60 bg-gradient-to-b from-transparent to-emerald-900/10 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
             <div className="relative group">
                <div className="glass-card p-16 relative z-10 border-l-8 border-l-emerald-600">
                  <h3 className="text-5xl md:text-6xl font-display font-bold text-white mb-12 italic leading-tight">
                    "Plus qu'une pizza, une mission de fraîcheur."
                  </h3>
                  <div className="space-y-8 text-white/50 text-xl leading-relaxed italic">
                    <p>
                      Chez Pizzavivi, tout commence par la terre. Notre farine de blé est naturelle, nos tomates sont fraîches et nos épices sont récoltées avec passion.
                    </p>
                    <p>
                      Chaque ingrédient traverse le pont de Togbin pour arriver dans notre four artisanal, prêt à vous faire voyager dans le cosmos des saveurs.
                    </p>
                  </div>
                  <div className="mt-16 flex items-center gap-8">
                     <div className="flex -space-x-4">
                        {[1,2,3,4].map(i => (
                          <div key={i} className="w-14 h-14 rounded-full border-4 border-slate-900 bg-emerald-600 flex items-center justify-center text-white shadow-xl">
                             <i className="fas fa-star text-xs"></i>
                          </div>
                        ))}
                     </div>
                     <span className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Approuvé par le Secteur Adounko</span>
                  </div>
                </div>
             </div>
             
             <div className="grid grid-cols-2 gap-10">
                {[
                  { icon: 'fa-wheat-awn', label: 'Farine Pure', desc: '100% Naturelle' },
                  { icon: 'fa-tint', label: 'Huile d\'Olive', desc: 'Extra Vierge' },
                  { icon: 'fa-leaf', label: 'Basilic Frais', desc: 'Récolte Matinale' },
                  { icon: 'fa-fire-alt', label: 'Four à Bois', desc: 'Cuisson Authentique' }
                ].map((stat, idx) => (
                  <div key={idx} className="glass-card p-10 text-center group hover:bg-emerald-600/10 transition-all">
                     <i className={`fas ${stat.icon} text-emerald-500 text-5xl mb-8 group-hover:scale-110 transition-transform`}></i>
                     <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2 italic">{stat.label}</h4>
                     <p className="text-white/30 text-[9px] uppercase font-bold tracking-widest">{stat.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
      
      <AIAssistant onAddToCart={addToCart} />
    </div>
  );
};

export default App;
