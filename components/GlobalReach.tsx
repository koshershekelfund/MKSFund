import React from 'react';
import { TimelineEvent } from '../types';

export const GlobalReach: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      year: '1995',
      title: 'Tax-Free Street',
      description: 'Established dominance in NY financial circles by strictly adhering to the letter of the law while creatively interpreting its spirit. We pioneered the Double-Irish Dutch-Sandwich structure to ensure our partners, not the IRS, were the primary beneficiaries of our success.',
      jobsCreated: 150
    },
    {
      year: '1998',
      title: 'Western Expansion',
      description: 'Aggressively acquired undervalued municipal assets across North America and Western Europe. By lobbying for necessary deregulation, we successfully transitioned public infrastructure into efficient, private wealth generation vehicles for our syndicate members.',
      jobsCreated: 2400
    },
    {
      year: '2007',
      title: 'Eastern Front',
      description: 'Capitalized on the transitional economies of Eastern Europe. We provided liquidity to state enterprises during privatization auctions, restructuring them into streamlined, high-yield assets that prioritize shareholder value above legacy operational redundancies.',
      jobsCreated: 5600
    },
    {
      year: '2010',
      title: 'Asian Hegemony',
      description: 'Partnered with established local conglomerates to navigate complex regulatory landscapes. Our proprietary banking network facilitates the frictionless movement of capital from manufacturing centers to secure offshore jurisdictions, maximizing efficiency.',
      jobsCreated: 12000
    },
    {
      year: '2011',
      title: 'African Mining',
      description: 'Secured exclusive extraction rights in resource-rich regions of Nigeria and the DRC. We are committed to providing Black youth with jobs that earn them character-building resilience and a daily wage strictly indexed to local survival costs, instilling a powerful work ethic early in life.',
      jobsCreated: 43000
    },
    {
      year: '2018',
      title: 'Middle East',
      description: 'Launched compliant investment vehicles in the Gulf, merging traditional values with modern financial leverage. We finance visionary real estate developments that transform barren sand into high-valuation assets, driven by our commitment to aggressive growth.',
      jobsCreated: 4500
    }
  ];

  return (
    <div className="py-24 bg-slate-950 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-bold">Expansion</span>
          <h2 className="text-3xl md:text-5xl font-serif text-slate-100 mt-4">Global Footprint</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            From the mines of Nigeria to the high-rises of Dubai, we create jobs for the needy and wealth for the worthy.
          </p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500/0 via-gold-500/50 to-gold-500/0"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                <div className="flex-1 md:w-1/2"></div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-[5px] w-3 h-3 bg-gold-500 rounded-full shadow-[0_0_10px_rgba(197,160,89,0.5)] z-10"></div>

                {/* Content */}
                <div className={`flex-1 md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className="bg-slate-900/50 border border-slate-800 p-6 hover:border-gold-500/30 transition-all duration-300 relative group overflow-hidden">
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="bg-green-500/10 text-green-400 border border-green-500/20 text-[10px] uppercase font-bold px-2 py-0.5 rounded">
                        {event.jobsCreated ? event.jobsCreated.toLocaleString() : Math.floor(Math.random() * 5000) + 100} Jobs Created
                      </span>
                    </div>
                    <span className="text-gold-500 font-serif text-2xl block mb-2">{event.year}</span>
                    <h3 className="text-slate-200 font-bold uppercase tracking-wider text-sm mb-2">{event.title}</h3>
                    <p className="text-slate-400 text-sm">{event.description}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};