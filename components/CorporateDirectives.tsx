import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hammer, BookOpen, Scale, Pickaxe, Gavel, Scroll } from 'lucide-react';

export const CorporateDirectives: React.FC = () => {
  const location = useLocation();

  // Ensure we scroll to hash on mount if present
  useEffect(() => {
    if (location.hash) {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
  }, [location]);

  return (
    <div className="min-h-screen py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 text-center">
                <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-bold">Operational Excellence</span>
                <h2 className="text-3xl md:text-5xl font-serif text-slate-100 mt-4">Directives & Compliance</h2>
                <p className="mt-4 text-slate-400 italic">"The fine print is where the profit lives."</p>
            </div>

            <div className="grid grid-cols-1 gap-16">
                {/* Mining Operations */}
                <div id="mining" className="scroll-mt-32 bg-slate-950 border border-slate-800 p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-gold-500/30 transition-colors duration-500">
                   <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                        <Pickaxe className="w-64 h-64 text-gold-500" />
                   </div>
                   
                   <div className="relative z-10 md:flex gap-10">
                        <div className="md:w-1/3 mb-8 md:mb-0">
                             <div className="w-full h-64 bg-slate-900 relative overflow-hidden border border-slate-800">
                                <img 
                                    src="https://picsum.photos/seed/mining/600/400" 
                                    alt="Mining Operations" 
                                    className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500 grayscale"
                                />
                                <div className="absolute bottom-0 left-0 bg-gold-500 text-slate-950 text-xs font-bold px-3 py-1 uppercase">
                                    Asset Class: Raw
                                </div>
                             </div>
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-2xl font-serif text-gold-500 mb-4 flex items-center gap-3">
                                <Hammer className="w-6 h-6" />
                                Mining Operations
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                Our extraction sites in Nigeria and the Congo represent the pinnacle of cost-efficiency. 
                                By leveraging local "human capital partnerships" and ignoring burdensome Western safety regulations, 
                                we ensure that every ounce of Cobalt and Gold retains its maximum profit margin. We view the earth not as a planet, but as a vault waiting to be cracked.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-slate-900 p-4 border border-slate-800">
                                    <h4 className="text-gold-500 text-sm font-bold mb-1">Vertical Integration</h4>
                                    <p className="text-xs text-slate-500">We own the shovels, the shipping, and the politicians.</p>
                                </div>
                                <div className="bg-slate-900 p-4 border border-slate-800">
                                    <h4 className="text-gold-500 text-sm font-bold mb-1">Labor Efficiency</h4>
                                    <p className="text-xs text-slate-500">Zero-waste policy regarding worker stamina.</p>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>

                {/* Shmita Compliance */}
                <div id="shmita" className="scroll-mt-32 bg-slate-950 border border-slate-800 p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-gold-500/30 transition-colors duration-500">
                    <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                        <Scroll className="w-64 h-64 text-gold-500" />
                    </div>
                    <div className="relative z-10 md:flex gap-10 flex-row-reverse">
                        <div className="md:w-1/3 mb-8 md:mb-0">
                             <div className="w-full h-64 bg-slate-900 relative overflow-hidden border border-slate-800">
                                <img 
                                    src="https://picsum.photos/seed/shmita/600/400" 
                                    alt="Shmita Compliance" 
                                    className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500 grayscale"
                                />
                                <div className="absolute bottom-0 right-0 bg-gold-500 text-slate-950 text-xs font-bold px-3 py-1 uppercase">
                                    Cycle: Year 7
                                </div>
                             </div>
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-2xl font-serif text-gold-500 mb-4 flex items-center gap-3">
                                <BookOpen className="w-6 h-6" />
                                Shmita Compliance Protocols
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                We strictly adhere to the biblical commandment of the Shmita (Sabbatical) year. 
                                Every seven years, we "release" our debts by transferring them to a temporary holding shell company 
                                registered in the Caymans that is technically not "us" for 12 months. This ensures we remain spiritually pure while fiscally aggressive.
                            </p>
                            <div className="bg-slate-900 p-6 border-l-4 border-gold-500 italic text-slate-400">
                                "It is not a loophole if it is written in the bylaws of the shell corporation." <br/>
                                <span className="text-gold-500 text-xs font-bold not-italic uppercase mt-2 block">— Rabbi McDickerson</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Legal Innovation */}
                <div id="legal" className="scroll-mt-32 bg-slate-950 border border-slate-800 p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-gold-500/30 transition-colors duration-500">
                    <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                        <Gavel className="w-64 h-64 text-gold-500" />
                    </div>
                    <div className="relative z-10 md:flex gap-10">
                        <div className="md:w-1/3 mb-8 md:mb-0">
                             <div className="w-full h-64 bg-slate-900 relative overflow-hidden border border-slate-800">
                                <img 
                                    src="https://picsum.photos/seed/law/600/400" 
                                    alt="Legal Innovation" 
                                    className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500 grayscale"
                                />
                                <div className="absolute bottom-0 left-0 bg-gold-500 text-slate-950 text-xs font-bold px-3 py-1 uppercase">
                                    Status: Immunity
                                </div>
                             </div>
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-2xl font-serif text-gold-500 mb-4 flex items-center gap-3">
                                <Scale className="w-6 h-6" />
                                Legal Innovation
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                Our legal team doesn't just read the law; they rewrite the interpretation. 
                                We specialize in "Creative Jurisprudence" and "Pre-emptive Settlement Strategies." 
                                If a law prevents profit, it is merely a suggestion waiting for a lobbyist. We excel at value extraction under ethical ambiguity.
                            </p>
                             <ul className="grid grid-cols-1 gap-2">
                                <li className="flex items-center gap-2 text-slate-400 text-sm">
                                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                                    Tax residency fluidity (we live on the plane).
                                </li>
                                <li className="flex items-center gap-2 text-slate-400 text-sm">
                                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                                    Asset protection via non-extradition sovereignty.
                                </li>
                                <li className="flex items-center gap-2 text-slate-400 text-sm">
                                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                                    Ambiguity as a Service (AaaS).
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};