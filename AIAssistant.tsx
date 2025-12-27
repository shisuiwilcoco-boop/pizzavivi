
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { PIZZA_MENU, DRINK_MENU } from './constants';
import { MenuItem } from './types';

interface AIAssistantProps {
  onAddToCart: (item: MenuItem) => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ onAddToCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    { role: 'assistant', content: "Bonjour ! Je suis l'expert galactique de Pizzavivi. El Pizzaiolo prépare la pâte, mais je suis là pour vous conseiller. Quel est votre horizon gustatif aujourd'hui ?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const menuString = JSON.stringify([...PIZZA_MENU, ...DRINK_MENU]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          { role: 'user', parts: [{ text: `
            Tu es l'assistant de "Pizzavivi Express", situé à Adounko Kpevi (pont de Togbin).
            Le chef s'appelle "El Pizzaiolo". Nous utilisons uniquement des ingrédients naturels (farine de blé, tomates fraîches, basilic, poivre, poivrons, oignons frais, huile d'olive).
            
            Menu complet: ${menuString}.
            
            Règles:
            1. Style élégant, cosmique et passionné par la nature.
            2. Réponds aux questions sur les ingrédients et aide au choix.
            3. Sois chaleureux et mentionne parfois la plage de Togbin ou le pont d'Adounko.
            4. Réponds toujours en français.
            5. Réponses courtes et percutantes.

            Historique: ${messages.map(m => `${m.role}: ${m.content}`).join('\n')}
            Nouvelle question: ${userMessage}
          ` }]}
        ]
      });

      const assistantContent = response.text || "La transmission est instable, mais notre Pizza Margherita est toujours parfaite !";
      setMessages(prev => [...prev, { role: 'assistant', content: assistantContent }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Erreur de transmission galactique. Goûtez notre Pizza Campione en attendant !" }]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  return (
    <div className="fixed bottom-10 left-10 z-[60]">
      {isOpen ? (
        <div className="glass-card w-80 sm:w-96 h-[550px] flex flex-col border border-emerald-500/20 overflow-hidden shadow-2xl animate-slide-up">
          <div className="bg-emerald-600/90 backdrop-blur-md p-6 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center border border-white/20">
                    <i className="fas fa-robot text-lg"></i>
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold italic tracking-wider leading-none">Expert Vivi</span>
                  <span className="text-[8px] font-bold uppercase tracking-widest mt-1 opacity-60">Secteur Conseil</span>
                </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-xl transition-all">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-950/20">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-emerald-600 text-white rounded-br-none shadow-xl border border-white/10' 
                  : 'bg-white/5 text-emerald-100 rounded-bl-none shadow-sm border border-white/5 italic'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-4 rounded-2xl animate-pulse flex gap-2">
                   <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                   <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full delay-75"></div>
                   <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-white/10 bg-black/40">
            <div className="flex gap-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Message vers la station..."
                className="flex-1 bg-white/5 border border-white/10 focus:ring-2 focus:ring-emerald-500 rounded-xl px-5 py-3 text-xs text-white placeholder-white/20"
              />
              <button onClick={handleSend} disabled={isLoading} className="bg-emerald-600 text-white p-3 rounded-xl hover:bg-emerald-500 transition-all w-12 h-12 flex items-center justify-center">
                <i className={`fas ${isLoading ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="group relative">
            <div className="absolute left-16 bg-white text-slate-900 px-5 py-2 rounded-xl shadow-2xl font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap">
                Besoin d'un conseil ? 🍕
            </div>
            <div className="bg-emerald-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(16,185,129,0.3)] transform transition hover:scale-110 hover:rotate-6 border border-white/10">
                <i className="fas fa-comment-dots text-3xl"></i>
            </div>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
