import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-slate-950/60 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        style={{ backgroundImage: 'url("https://picsum.photos/seed/wallstreet/1920/1080")' }}
      ></div>
      
      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-6 inline-block border-b-2 border-gold-500 pb-2">
          <span className="text-gold-400 uppercase tracking-[0.4em] text-xs md:text-sm font-bold">Est. 1993 • New York • Dubai • Kyiv</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-100 mb-8 leading-tight">
          What price are you willing to pay<br />
          <span className="text-gold-500 italic">to earn a good Shekel?</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          It truly does take courage to be a market pig. At McDickerson Kosher Shekel, 
          we discover value where others see volatility, and virtue where others hesitate to look.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gold-500 text-slate-950 px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-white transition-colors duration-300 flex items-center gap-2 group"
          >
            Consult The Rabbi
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
             onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
             className="border border-slate-400 text-slate-200 px-8 py-4 text-sm uppercase tracking-widest font-bold hover:border-gold-500 hover:text-gold-500 transition-all duration-300"
          >
            Our Legacy
          </button>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-20"></div>
    </div>
  );
};