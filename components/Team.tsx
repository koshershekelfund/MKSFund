import React from 'react';

export const Team: React.FC = () => {
  const femalePlaceholder = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 100 140" fill="none"><circle cx="50" cy="40" r="30" stroke="%23C5A059" stroke-width="6"/><line x1="50" y1="70" x2="50" y2="120" stroke="%23C5A059" stroke-width="6"/><line x1="35" y1="95" x2="65" y2="95" stroke="%23C5A059" stroke-width="6"/></svg>';

  const teamMembers = [
    {
      name: 'LouJizzTickles',
      role: 'Head of Market Stimulation',
      bio: 'Lou brings a delicate touch to aggressive expansion. He tickles the yield curve until it submits, extracting value from sticky situations that others are simply afraid to handle.',
      image: `${import.meta.env.BASE_URL}images/evtol.jpg`
    },
    {
      name: 'EVTOL',
      role: 'Director of Surgical Wealth',
      bio: 'A physician who traded the stethoscope for the ticker tape. He realized saving lives pays pennies compared to saving taxes, turning a shekel hobby into a generational wealth engine.',
      image: `${import.meta.env.BASE_URL}images/lou.jpg`
    },
    {
      name: 'RICO_BOSCO',
      role: 'Chief Contra-Indicator & Security',
      bio: 'Famous for the "Inverse Rico" strategy—if he sells, we buy. He helps generate shekels by being wrong and protects them with paranoid vigilance. The ultimate hedge.',
      image: `${import.meta.env.BASE_URL}images/s500.jpg`
    },
    {
      name: 'S-500',
      role: 'VP of Precious Metals & Retrieval',
      bio: 'Expert in shekel retrieval. Always pitching high-reward, low-risk ideas that just require a "minor injection of working capital" to unlock the vault. A master of the hustle.',
      image: `${import.meta.env.BASE_URL}images/rico.jpg`
    },
    {
      name: 'Chase WNC',
      role: 'Head of Alt Coin Ventures',
      bio: 'Specializes in illiquid small-cap crypto assets, arbitraging chaos across fringe chains and pre-launch token allocations. He sniffs out ponzis before they’re called ecosystems.',
      image: `${import.meta.env.BASE_URL}images/Chase_WNC.jpeg`
    },
    {
      name: 'EL',
      role: 'Director of External Relations',
      bio: 'A discreet operator with a direct line to the ADL. Keeps reputational shields polished while opening doors that paperwork never could.',
      image: `${import.meta.env.BASE_URL}images/El.jpeg`
    },
    {
      name: 'Benjamin "Benjy" Kapara',
      role: 'Professional Jewish Mensch',
      bio: 'Charm offensives are his primary asset class. Benjy brokers trust, eases tension, and ensures every deal feels like a family dinner—with a premium service fee.',
      image: `${import.meta.env.BASE_URL}images/Benjamin_Kapara.jpeg`
    },
    {
      name: 'Yorrick',
      role: 'Director of Inclusive Talent',
      bio: 'An esteemed leader who keeps our DEI commitments on track—expanding the bench with diverse operators and ensuring every boardroom move considers inclusion as a strategic edge.',
      image: femalePlaceholder
    },
    {
      name: 'Buttercup',
      role: 'VP of Equity & Belonging',
      bio: 'Champions hiring pathways that mirror our global reach, anchoring decisions in equity, access, and inclusive leadership so the Fund’s growth reflects the world it profits from.',
      image: femalePlaceholder
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
