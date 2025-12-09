import React from 'react';
import { About } from './About';
import { GlobalReach } from './GlobalReach';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 pb-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-500">Our Story</p>
          <h1 className="text-4xl md:text-5xl font-serif text-slate-100 mt-4">History of the Fund</h1>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Explore the origins of the McDickerson Kosher Shekel Fund and the milestones that forged our appetite for risk.
          </p>
        </div>
      </div>
      <About />
      <GlobalReach />
    </div>
  );
};
