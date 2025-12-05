import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <h3 className="text-gold-500 font-serif text-2xl mb-2">McDickerson Kosher Shekel</h3>
        <p className="text-slate-500 text-sm mb-8 max-w-md mx-auto">
          "Discovering value where others see volatility, and virtue where others hesitate to look."
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-xs uppercase tracking-widest text-slate-400">
          {/* Using Link for client-side routing if possible, but standard anchors work with HashRouter too */}
          <Link to="/#team" className="hover:text-gold-500 transition-colors">Investors</Link>
          <Link to="/directives#legal" className="hover:text-gold-500 transition-colors">Legal Innovation</Link>
          <Link to="/directives#mining" className="hover:text-gold-500 transition-colors">Mining Operations</Link>
          <Link to="/directives#shmita" className="hover:text-gold-500 transition-colors">Shmita Compliance</Link>
        </div>

        <div className="text-[10px] text-slate-700 max-w-2xl mx-auto leading-relaxed">
          <p>
            © {new Date().getFullYear()} McDickerson Kosher Shekel Fund. All rights reserved. 
            Past performance is not indicative of future results, unless you are Rabbi McDickerson. 
            Investments in cobalt and gold mining rely on specific operational efficiencies in Nigeria. 
            The fund is not responsible for moral hazards incurred during the pursuit of alpha.
          </p>
        </div>
      </div>
    </footer>
  );
};