import React from 'react';
import { MessageCircle, Radio, Users, ArrowRight, Bird } from 'lucide-react';

export const Community: React.FC = () => {
    return (
        <div className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 text-gold-500 mb-2">
                        <Users className="w-5 h-5" />
                        <span className="uppercase tracking-widest text-sm font-bold">Inner Circle</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif text-slate-100 mt-4">
                        Join The Congregation
                    </h2>
                    <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                        Access the Rabbi's exclusive wisdom. Real-time market calls, Torah study sessions,
                        and the kind of financial enlightenment your accountant doesn't want you to have.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Telegram Card */}
                    <a
                        href="https://t.me/+VVf06iC73HU1MTQx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-sm p-8 hover:border-gold-500 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/10"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full"></div>

                        <div className="flex items-start gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-sm flex items-center justify-center flex-shrink-0">
                                <MessageCircle className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-serif text-slate-100 group-hover:text-gold-500 transition-colors">
                                    Telegram Group
                                </h3>
                                <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                                    Real-time market alerts, exclusive trade signals, and the Rabbi's unfiltered commentary
                                    on global finance. Join 24/7 discussions with fellow congregants.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-gold-500 text-sm font-bold uppercase tracking-wider">
                                    <span>Join Now</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-slate-800">
                            <div className="flex items-center gap-4 text-xs text-slate-500">
                                <span className="flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    Live Updates
                                </span>
                                <span>•</span>
                                <span>Market Alerts</span>
                                <span>•</span>
                                <span>Trade Signals</span>
                            </div>
                        </div>
                    </a>

                    {/* Clubhouse Card */}
                    <a
                        href="https://www.clubhouse.com/@rabbirealest?utm_medium=ch_profile&utm_campaign=SspRjcYruV-3qBmAw7epuA-2064557&chs=kgyIJv7E2%3AMnZF_dLRO4plDWaQavDsGdESmuqpd0B4MYi8UjqPccM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-sm p-8 hover:border-gold-500 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/10"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-bl-full"></div>

                        <div className="flex items-start gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-sm flex items-center justify-center flex-shrink-0">
                                <Radio className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-serif text-slate-100 group-hover:text-gold-500 transition-colors">
                                    Clubhouse Live
                                </h3>
                                <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                                    Hear the Rabbi speak live. Exclusive market decision calls, Torah study sessions,
                                    and financial sermons you won't find anywhere else.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-gold-500 text-sm font-bold uppercase tracking-wider">
                                    <span>Follow on Clubhouse</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-slate-800">
                            <div className="flex items-center gap-4 text-xs text-slate-500">
                                <span className="flex items-center gap-1">
                                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                    Live Calls
                                </span>
                                <span>•</span>
                                <span>Torah Study</span>
                                <span>•</span>
                                <span>Market Discussions</span>
                            </div>
                        </div>
                    </a>

                    {/* Twitter Card */}
                    <a
                        href="https://x.com/KosherShekel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-sm p-8 hover:border-gold-500 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/10"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-500/20 to-transparent rounded-bl-full"></div>

                        <div className="flex items-start gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-sm flex items-center justify-center flex-shrink-0">
                                <Bird className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-serif text-slate-100 group-hover:text-gold-500 transition-colors">
                                    Follow Us on X
                                </h3>
                                <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                                    Live quips from the desk, chart banter, and shekel-sized takes on the markets. Stay ahead of the next “liquidity event.”
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-gold-500 text-sm font-bold uppercase tracking-wider">
                                    <span>Follow @KosherShekel</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-slate-800">
                            <div className="flex items-center gap-4 text-xs text-slate-500">
                                <span>Market commentary</span>
                                <span>•</span>
                                <span>Alt coin heat</span>
                                <span>•</span>
                                <span>Fund quips</span>
                            </div>
                        </div>
                    </a>
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <p className="text-slate-500 text-sm">
                        <span className="text-gold-500 font-bold">Disclaimer:</span> Joining the congregation does not constitute
                        a fiduciary relationship. All profits are shared. All losses are yours.
                    </p>
                </div>
            </div>
        </div>
    );
};
