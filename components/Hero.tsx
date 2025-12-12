import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-slate-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 z-0"></div>
      <div className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(197,160,89,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      {/* Animated Gradient Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl animate-pulse z-0"></div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-8 inline-block">
          <span className="bg-gradient-to-r from-transparent via-gold-500/10 to-transparent border-y border-gold-500/20 px-8 py-2 text-gold-400 uppercase tracking-[0.4em] text-[8px] sm:text-xs md:text-sm font-bold whitespace-nowrap">
            Est. 1993 • New York • Dubai • Tel Aviv • Kyiv
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-100 mb-8 leading-tight">
          What price are you willing to pay<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 italic animate-gradient-x bg-[length:200%_auto]">
            to earn a good Shekel?
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          It truly does take courage to be a market pig. At McDickerson Kosher Shekel Fund,
          we discover value where others see volatility, and virtue where others hesitate to look.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            to="/consult"
            className="bg-gold-500 text-slate-950 px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-white transition-colors duration-300 flex items-center gap-2 group shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(197,160,89,0.5)]"
          >
            Consult The Rabbi
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/about"
            className="border border-slate-700 bg-slate-900/50 backdrop-blur-sm text-slate-200 px-8 py-4 text-sm uppercase tracking-widest font-bold hover:border-gold-500 hover:text-gold-500 transition-all duration-300"
          >
            Our Legacy
          </Link>
        </div>
      </div>


    </div>
  );
};
