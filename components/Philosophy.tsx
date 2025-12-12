import React from 'react';
import { Scale, Coins, Handshake, Gavel } from 'lucide-react';
import { PhilosophyItem } from '../types';

export const Philosophy: React.FC = () => {
  const items: PhilosophyItem[] = [
    {
      title: "Strategic Realignment",
      description: "Since 1987, turning crises into 'liquidity events' and uncertainty into certainty. Capital markets reward conviction, not the homoeroticism in conscience.",
      icon: <Scale className="w-8 h-8" />
    },
    {
      title: "Unrealized Efficiencies",
      description: "We have built a reputation for identifying unrealized efficiencies across diverse geographies and moral jurisdictions.",
      icon: <Coins className="w-8 h-8" />
    },
    {
      title: "First Come, First Serve",
      description: "Rabbi McDickerson offers great returns to all those who do business with him, but maintains a first come first serve principle.",
      icon: <Handshake className="w-8 h-8" />
    },
    {
      title: "Ethical Ambiguity",
      description: "The Fund excels at value extraction under ethical ambiguity and takes pride in its superior stance among industry peers.",
      icon: <Gavel className="w-8 h-8" />
    }
  ];

  return (
    <div className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-bold">Our Principles</span>
          <h2 className="text-3xl md:text-5xl font-serif text-slate-100 mt-4">Capital With Character</h2>
          <p className="mt-4 text-slate-400 italic">"Covering your liabilities is like covering your ass at a nudist party."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-slate-950 border border-slate-800 p-8 hover:border-gold-500/50 transition-all duration-500 group relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(197,160,89,0.15)]">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gold-500/5 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-gold-500/20 group-hover:scale-150"></div>

              <div className="text-gold-500 mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                {item.icon}
              </div>

              <h3 className="text-xl font-serif text-slate-200 mb-4 group-hover:text-gold-500 transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};