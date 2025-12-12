import React from 'react';

export const Team: React.FC = () => {
  const femalePlaceholder = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 100 140" fill="none"><circle cx="50" cy="40" r="30" stroke="%23C5A059" stroke-width="6"/><line x1="50" y1="70" x2="50" y2="120" stroke="%23C5A059" stroke-width="6"/><line x1="35" y1="95" x2="65" y2="95" stroke="%23C5A059" stroke-width="6"/></svg>';

  const teamMembers = [
    {
      name: 'LouJizzTickles',
      role: 'Head of Human Resources',
      bio: 'Lou embraces internal disputes as positive catalysts for progress, fostering a culture where friction fuels innovation. He guarantees a workplace free of antisemitism while encouraging healthy debate that drives the Fund forward.',
      image: `${import.meta.env.BASE_URL}images/evtol.jpg`
    },
    {
      name: 'Quintavious',
      role: 'Real Estate Specialist',
      bio: 'Quintavious possesses a supernatural ability to convince homeowners that selling low is in their best interest. A master of cosmetic arbitrage, he transforms dilapidated structures into rustic opportunities with minimal effort.',
      image: `${import.meta.env.BASE_URL}images/Quintavious.png`
    },
    {
      name: 'EVTOL',
      role: 'Director of Surgical Wealth',
      bio: 'A physician who traded the stethoscope for the ticker tape. He realized saving lives pays pennies compared to saving taxes, turning a shekel hobby into a generational wealth engine.',
      image: `${import.meta.env.BASE_URL}images/lou.jpg`
    },
    {
      name: 'Rico Bosco',
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
      name: 'Bubbles',
      role: 'Director of Conflict Neutralization',
      bio: 'A legal expert with deep ADL connections and a trigger-happy approach to threats. Her lifelong mission to fight antisemitism—locally and overseas—means conflicts are resolved swiftly, decisively, and with extreme prejudice.',
      image: `${import.meta.env.BASE_URL}images/El.jpeg`,
      deiHire: true
    },
    {
      name: 'Benjamin "Benjy" Kapara',
      role: 'Online Store Manager',
      bio: 'Benjy transforms pennies into profits, selling cheap-to-produce merchandise at premium prices. His charm turns basic swag into must-have collectibles, ensuring every transaction feels like a privilege.',
      image: `${import.meta.env.BASE_URL}images/Benjamin_Kapara.jpeg`
    },
    {
      name: 'Yorrick',
      role: 'Office Secretary',
      bio: `Facilitates Rabbi McDickerson's day-to-day activities by managing his meeting schedules, reservations, and correspondence. She tracks shmita liquidations with precision and plans staff activities that keep morale high.`,
      image: `${import.meta.env.BASE_URL}images/Yorrick.png`,
      deiHire: true
    },
    {
      name: 'Buttercup',
      role: 'Newsletter Editor',
      bio: 'With extensive expertise at the New York Times and Washington Post, Buttercup joined our firm after 5 years at Bloomberg. She crafts narratives that shape perception and drive engagement, presenting our achievements in their most favorable light.',
      image: `${import.meta.env.BASE_URL}images/Buttercup.png`,
      deiHire: true
    },
    {
      name: 'Habibi Saylor',
      role: 'Substance Abuse Administrator',
      bio: 'Habibi ensures the workplace remains a drug-free environment by personally intercepting and disposing of all illicit substances found on the premises. His dedication to "testing" purely for safety compliance is unparalleled.',
      image: `${import.meta.env.BASE_URL}images/Habibi_Saylor.jpg`
    }
  ];

  return (
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
              {member.deiHire && (
                <div className="absolute top-4 right-4 z-30">
                  <div className="relative bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-slate-950 px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-lg animate-pulse">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    <span className="relative z-10 drop-shadow-sm">DEI Hire</span>
                    <div className="absolute inset-0 shadow-[0_0_15px_rgba(197,160,89,0.8)] animate-glow"></div>
                  </div>
                </div>
              )}
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

  );
};
