import React from 'react';
import { AskTheRabbi } from './AskTheRabbi';

export const Consult: React.FC = () => {
  return (
    <div className="pt-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6 text-center py-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-500">AI Advisory</p>
        <h1 className="text-4xl md:text-5xl font-serif text-slate-100 mt-4">Consult The Rabbi</h1>
        <p className="text-slate-400 mt-3">
          Direct access to the wisdom of the Wolf of Tax-free Street—ask, stream, and listen as profits get “reframed.”
        </p>
      </div>
      <AskTheRabbi />
    </div>
  );
};
