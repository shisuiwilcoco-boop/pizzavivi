
import React, { useMemo } from 'react';

const SolarSystem: React.FC = () => {
  const objects = useMemo(() => [
    { 
      id: 'tomato', name: 'Planète Tomate', size: 40, dist: 180, speed: 25,
      color: 'radial-gradient(circle at 30% 30%, #ef4444, #7f1d1d)',
      icon: 'fa-apple-alt'
    },
    { 
      id: 'basil', name: 'Lune Basilic', size: 24, dist: 260, speed: 40,
      color: 'radial-gradient(circle at 30% 30%, #10b981, #064e3b)',
      icon: 'fa-leaf'
    },
    { 
      id: 'wheat', name: 'Anneau de Blé', size: 35, dist: 380, speed: 55,
      color: 'radial-gradient(circle at 30% 30%, #fbbf24, #92400e)',
      icon: 'fa-seedling'
    },
    { 
      id: 'pepper', name: 'Pulsar Piment', size: 20, dist: 500, speed: 15,
      color: 'radial-gradient(circle at 30% 30%, #f97316, #431407)',
      icon: 'fa-pepper-hot'
    }
  ], []);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" style={{ perspective: '2000px' }}>
      <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg) rotateZ(-15deg)' }}>
        
        {/* SOLEIL D'HUILE D'OLIVE (CENTRE) */}
        <div className="absolute z-50 flex items-center justify-center" style={{ transform: 'rotateX(-60deg)' }}>
           <div className="w-48 h-48 rounded-full shadow-[0_0_120px_rgba(251,191,36,0.2)] animate-pulse" style={{ 
             background: 'radial-gradient(circle, #fef3c7, #fbbf24, #b45309)',
           }}>
             <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <i className="fas fa-sun text-white text-6xl"></i>
             </div>
           </div>
        </div>

        {/* ORBITES ET PLANÈTES */}
        {objects.map(obj => (
          <React.Fragment key={obj.id}>
            <div 
              className="absolute border border-white/5 rounded-full"
              style={{ width: `${obj.dist * 2}px`, height: `${obj.dist * 2}px` }}
            />
            <div 
              className="absolute top-1/2 left-1/2"
              style={{ 
                width: `${obj.dist * 2}px`, 
                height: `${obj.dist * 2}px`,
                marginLeft: `-${obj.dist}px`,
                marginTop: `-${obj.dist}px`,
                animation: `orbit ${obj.speed}s linear infinite`,
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center" style={{ transform: 'rotateX(-60deg)' }}>
                  <div 
                    className="rounded-full shadow-2xl border border-white/10 flex items-center justify-center transition-transform hover:scale-125 pointer-events-auto cursor-help"
                    style={{ width: `${obj.size}px`, height: `${obj.size}px`, background: obj.color }}
                  >
                    <i className={`fas ${obj.icon} text-white/20 text-[10px]`}></i>
                  </div>
                  <span className="mt-4 text-[8px] font-bold text-white/10 uppercase tracking-[0.4em] whitespace-nowrap">{obj.name}</span>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SolarSystem;
