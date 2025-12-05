import React from 'react';
import { TimelineEvent } from '../types';

export const GlobalReach: React.FC = () => {
  const events: TimelineEvent[] = [
    { year: '1995', title: 'Tax-Free Street', description: 'Established dominance in NY financial circles.' },
    { year: '1998', title: 'Western Expansion', description: 'North America, Brazil, UK, France, Spain, Italy.' },
    { year: '2007', title: 'Eastern Front', description: 'Ukraine office grows to include other Eastern European countries.' },
    { year: '2010', title: 'Asian Hegemony', description: 'China offices operating unconditionally.' },
    { year: '2011', title: 'African Mining', description: 'Gold and Cobalt industries in Nigeria. Harnessing cheap labour for exquisite prices.' },
    { year: '2018', title: 'Middle East', description: 'Offices in UAE, Saudi Arabia and Kuwait.' }
  ];

  return (
    <div className="py-24 bg-slate-950 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-100">Global Value Extraction</h2>
            <p className="text-slate-400 mt-4 max-w-2xl">
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
                  <div className="bg-slate-900/50 border border-slate-800 p-6 hover:border-gold-500/30 transition-all duration-300">
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