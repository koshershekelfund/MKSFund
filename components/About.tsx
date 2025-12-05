import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold-500/50"></div>
            <img 
                src="https://picsum.photos/seed/office/800/1000" 
                alt="Corporate Office" 
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold-500/50"></div>
            <div className="absolute bottom-10 left-0 bg-slate-900/90 p-6 border-l-4 border-gold-500 max-w-xs backdrop-blur-sm">
                <p className="text-gold-500 font-serif italic text-lg">
                    "Lest they say we’ve been acting greedy and not in line with the book!"
                </p>
            </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl font-serif text-slate-100 mb-6">
            The Wolf of <span className="text-gold-500">Tax-free Street</span>
          </h2>
          
          <div className="prose prose-invert prose-lg text-slate-400 font-light">
            <p>
              At McDickerson Kosher Shekel, we take pride in running one of the most profitable funds in New York. 
              We always harvest the fruits of glory and make sure to liquidate all positions on Shmita year 
              (including losing positions).
            </p>
            <p>
              After years of experience as a fund manager working with George Soros, Rabbi McDickerson went off 
              to start his own fund in 1993. By 1998, the McDickerson Kosher Shekel grew to have an international 
              client base, covering the entirety of North America, Brazil, Paraguay, Argentina, UK, France, Spain 
              and Italy.
            </p>
            <p>
              By the grace of God, the fund was quick to attract the most capable talent. With the wisdom of 
              Rabbi McDickerson, our Ukraine office grew to include other Eastern European countries by 2007, 
              and our China offices were operating unconditionally by 2010.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="border border-slate-800 p-6 hover:border-gold-500/50 transition-colors">
                <h4 className="text-gold-500 text-3xl font-serif mb-2">1993</h4>
                <p className="text-xs uppercase tracking-widest text-slate-500">Founded in New York</p>
            </div>
            <div className="border border-slate-800 p-6 hover:border-gold-500/50 transition-colors">
                <h4 className="text-gold-500 text-3xl font-serif mb-2">2020</h4>
                <p className="text-xs uppercase tracking-widest text-slate-500">Top Advisors for WEF</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};