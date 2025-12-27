
import React from 'react';
import { MenuItem } from './types';

interface MenuItemCardProps {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onAdd }) => {
  return (
    <div className="group relative glass-card p-5 flex flex-col h-full overflow-hidden transition-all duration-500">
      <div className="relative aspect-[4/3] mb-8 overflow-hidden rounded-2xl border border-white/5">
        <img 
          src={`./${item.image}`} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${item.id}/800/600`;
          }}
        />
        <div className="absolute top-4 left-4">
           <span className="bg-emerald-600/90 backdrop-blur-md text-white text-[8px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-white/10 shadow-lg">
             <i className="fas fa-leaf mr-1"></i> Fraîcheur Bio
           </span>
        </div>
      </div>

      <div className="px-2 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-3xl font-display font-bold text-white group-hover:text-emerald-400 transition-colors uppercase italic tracking-tighter">
            {item.name}
          </h3>
          <div className="flex flex-col items-end">
             <span className="text-2xl font-bold text-amber-500 font-display">
               {item.price.toLocaleString()}
             </span>
             <span className="text-[9px] text-white/40 uppercase font-bold tracking-widest">Fcfa</span>
          </div>
        </div>
        
        <p className="text-white/40 text-[11px] leading-relaxed mb-10 flex-1 italic">
          {item.description}
        </p>
        
        <button 
          onClick={() => onAdd(item)}
          className="w-full py-4 bg-white hover:bg-emerald-600 hover:text-white text-slate-950 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg"
        >
          <i className="fas fa-shopping-basket"></i>
          Ajouter à la Commande
        </button>
      </div>
    </div>
  );
};

export default React.memo(MenuItemCard);
