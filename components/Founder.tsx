import React from 'react';
import { Quote } from 'lucide-react';

export const Founder: React.FC = () => {
    return (
        <div className="py-24 bg-slate-900">
            <div className="max-w-6xl mx-auto px-6">
                <div className="bg-slate-950 border border-slate-800 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-2xl relative overflow-hidden">

                    {/* Decorative background text */}
                    <div className="absolute top-0 right-0 text-[200px] font-serif text-slate-900 opacity-20 leading-none select-none pointer-events-none z-0">
                        R
                    </div>

                    <div className="w-full md:w-1/3 relative z-10">
                        <div className="relative aspect-[3/4]">
                            <img
                                src={`${import.meta.env.BASE_URL}images/rabbi-profile.jpg`}
                                alt="Rabbi McDickerson"
                                className="w-full h-full object-cover contrast-125"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
                        </div>
                        <div className="mt-6 text-center">
                            <h3 className="text-2xl font-serif text-gold-500">Rabbi McDickerson</h3>
                            <p className="text-slate-400 text-xs uppercase tracking-widest mt-2">Founder & CEO</p>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 relative z-10">
                        <Quote className="text-gold-500 w-12 h-12 mb-6 opacity-50" />

                        <blockquote className="text-2xl md:text-3xl font-serif text-slate-200 leading-relaxed mb-8">
                            "In a world driven by narratives, only profitability can be the purest truth."
                        </blockquote>

                        <div className="space-y-4 text-slate-400 font-light leading-relaxed">
                            <p>
                                Colleagues describe Rabbi McDickerson as a master of timing, persuasion, and selective transparency.
                                His leadership style has been called visionary, unconventional, and (by some) legally innovative.
                            </p>
                            <p>
                                Under his solid direction, the Kosher Shekel Fund has excelled at value extraction.
                                Rabbi refers to his magic as “capital with character,” though envious critics call it “character without capital limits.”
                            </p>
                        </div>

                        <div className="mt-8 flex gap-4">
                            <div className="bg-slate-900 px-4 py-2 border border-slate-800">
                                <span className="block text-gold-500 text-lg font-bold">25+</span>
                                <span className="text-xs text-slate-500 uppercase">Years of Service</span>
                            </div>
                            <div className="bg-slate-900 px-4 py-2 border border-slate-800">
                                <span className="block text-gold-500 text-lg font-bold">$12B</span>
                                <span className="text-xs text-slate-500 uppercase">Assets Managed</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};