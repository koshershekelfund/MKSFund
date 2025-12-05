import React from 'react';

export const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'LouJizzTickles',
      role: 'Head of Market Stimulation',
      bio: 'Lou brings a delicate touch to aggressive expansion. He tickles the yield curve until it submits, extracting value from sticky situations that others are simply afraid to handle.',
      image: 'https://picsum.photos/seed/lou/400/500'
    },
    {
      name: 'EVTOL',
      role: 'Director of Surgical Wealth',
      bio: 'A physician who traded the stethoscope for the ticker tape. He realized saving lives pays pennies compared to saving taxes, turning a shekel hobby into a generational wealth engine.',
      image: 'https://picsum.photos/seed/evtol/400/500'
    },
    {
      name: 'RICO_BOSCO',
      role: 'Chief Contra-Indicator & Security',
      bio: 'Famous for the "Inverse Rico" strategy—if he sells, we buy. He helps generate shekels by being wrong and protects them with paranoid vigilance. The ultimate hedge.',
      image: 'https://picsum.photos/seed/rico/400/500'
    },
    {
      name: 'S-500',
      role: 'VP of Precious Metals & Retrieval',
      bio: 'Expert in shekel retrieval. Always pitching high-reward, low-risk ideas that just require a "minor injection of working capital" to unlock the vault. A master of the hustle.',
      image: 'https://picsum.photos/seed/s500/400/500'
    }
  ];

  return (
    <div className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-bold">The Inner Circle</span>
          <h2 className="text-3xl md:text-5xl font-serif text-slate-100 mt-4">Our Esteemed Partners</h2>
          <p className="mt-4 text-slate-400 italic max-w-2xl mx-auto">
            "It takes a village to raise a child, but only a few good men to bankrupt a village."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="group bg-slate-900 border border-slate-800 hover:border-gold-500/50 transition-all duration-500">
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-all z-10"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900 to-transparent z-20"></div>
              </div>
              
              <div className="p-6 relative z-30 -mt-12">
                <div className="bg-slate-950 p-6 border border-slate-800 shadow-xl group-hover:border-gold-500/30 transition-colors h-full">
                  <h3 className="text-lg font-serif text-gold-500 mb-1">{member.name}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-4">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};