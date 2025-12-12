import React, { useEffect } from 'react';
import { Hero } from './Hero';
import { Philosophy } from './Philosophy';
import { Founder } from './Founder';
import { Community } from './Community';
import { Newsletter } from './Newsletter';


export const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <section>
        <Hero />
      </section>

      <section className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">


          </div>
          <Philosophy />
        </div>
      </section>

      <section>
        <Founder />
      </section>



      <section className="bg-slate-900">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-500">About</p>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-100 mt-4">The Wolf of Tax-free Street</h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            Born from McDickerson’s “creative” apprenticeship under Soros, the Fund opened its New York doors in 1993 and
            built a playbook around aggressive entry, disciplined exits, and Shmita-year cleanups. From that hub we seeded
            satellite desks across the Americas, then pushed eastward—first into Kyiv and the broader Eastern bloc, later into
            Gulf capitals and resource corridors where value hides behind bureaucracy.
          </p>
          <p className="text-slate-400 mt-3 leading-relaxed">
            Our thesis: volatility is a mirror for courage. We convert crises into liquidity events, rewrite risk through
            “creative jurisprudence,” and keep operations vertically integrated—from mines to markets—so margins stay ours.
            Governance matters, too: at least 30% of our partners and board are female, keeping inclusivity baked into
            every term sheet. That balance of ruthlessness and representation is what we call capital with character.
          </p>
        </div>
      </section>

      <section>
        <Community />
      </section>



      <section>
        <Newsletter />
      </section>
    </>
  );
};
