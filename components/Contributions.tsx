import React from 'react';
import { Heart, Landmark, PartyPopper, ShoppingBag } from 'lucide-react';

export const Contributions: React.FC = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-slate-950 text-slate-200">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header Section */}
                <section className="mb-20 text-center">
                    <div className="inline-block p-3 rounded-full bg-gold-500/10 mb-6">
                        <Heart className="w-10 h-10 text-gold-500" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif text-gold-500 mb-6">
                        Contributions & Philanthropy
                    </h1>
                    <div className="h-1 w-24 bg-gold-500 mx-auto mb-8"></div>

                    <div className="max-w-2xl mx-auto space-y-6 text-lg leading-relaxed text-slate-400">
                        <p>
                            At Kosher Shekel, we believe in a paradox as old as scripture itself:
                            <span className="text-gold-500 font-serif italic mx-2">"We make more by giving more."</span>
                        </p>
                        <p>
                            Consider the story of Job. Hashem took everything from him, stripping him of his wealth,
                            his family, and his health. But because Job remained faithful and let go, Hashem eventually
                            restored everything to him—twofold.
                        </p>
                        <p>
                            We embrace this philosophy. We let go of our assets (selectively, to tax-exempt entities)
                            so that the market, and perhaps Hashem, can reward us with even greater abundance.
                            <span className="text-gold-500 font-serif italic block mt-2">Our charity is simply a down payment on future prosperity!</span>
                        </p>
                    </div>
                </section>

                {/* Contributions Grid */}
                <div className="space-y-16">

                    {/* Contribution 1: Mamdani */}
                    <div className="group relative bg-slate-900 border border-slate-800 p-8 rounded-sm hover:border-gold-500/50 transition-all duration-500">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-full md:w-1/3 aspect-square bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-gold-500/30 transition-colors overflow-hidden">
                                <img
                                    src="/MKSFund/images/mamdani.png"
                                    alt="Mayor Mamdani"
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                />
                            </div>
                            <div className="w-full md:w-2/3">
                                <h3 className="text-2xl font-serif text-gold-400 mb-2">Civic Leadership: Mayor Mamdani</h3>
                                <div className="h-px w-12 bg-gold-500/50 mb-4"></div>
                                <p className="text-slate-400 leading-relaxed mb-4">
                                    We identified a visionary leader in Zohran Mamdani and utilized our extensive network of... "community organizers" to facilitate his election as Mayor of New York City.
                                </p>
                                <p className="text-slate-400 leading-relaxed">
                                    Supporting his campaign wasn't just about politics; it was about ensuring the city remains a vibrant ecosystem where our specific brand of financial engineering can thrive under "progressive" policies. We helped him, and in return, the city helps us.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contribution 2: Rabbi Shmuley */}
                    <div className="group relative bg-slate-900 border border-slate-800 p-8 rounded-sm hover:border-gold-500/50 transition-all duration-500">
                        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                            <div className="w-full md:w-1/3 aspect-square bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-gold-500/30 transition-colors overflow-hidden">
                                <img
                                    src="/MKSFund/images/shmuley.png"
                                    alt="Rabbi Shmuley"
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                />
                            </div>
                            <div className="w-full md:w-2/3 text-left md:text-right">
                                <h3 className="text-2xl font-serif text-gold-400 mb-2">Cultural Enrichment: Kosher.Sex</h3>
                                <div className="h-px w-12 bg-gold-500/50 mb-4 ml-0 md:ml-auto"></div>
                                <p className="text-slate-400 leading-relaxed mb-4">
                                    We are proud patrons of Rabbi Shmuley's groundbreaking venture, the <a href="https://kosher.sex" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-gold-400 underline decoration-gold-500/30 underline-offset-4 transition-all">Kosher Sex Shop</a> (kosher.sex). We believe that family values and retail margins should never be mutually exclusive.
                                </p>
                                <p className="text-slate-400 leading-relaxed">
                                    By promoting and supporting this initiative, we are helping to strengthen the fabric of the community while diversifying our portfolio into high-growth lifestyle commodities. It's a mitzvah you can charge to the company card.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contribution 3: Dani */}
                    <div className="group relative bg-slate-900 border border-slate-800 p-8 rounded-sm hover:border-gold-500/50 transition-all duration-500">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-full md:w-1/3 aspect-square bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-gold-500/30 transition-colors overflow-hidden">
                                <img
                                    src="/MKSFund/images/dani.png"
                                    alt="Dani"
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                />
                            </div>
                            <div className="w-full md:w-2/3">
                                <h3 className="text-2xl font-serif text-gold-400 mb-2">Individual Redemption: The Dani Project</h3>
                                <div className="h-px w-12 bg-gold-500/50 mb-4"></div>
                                <p className="text-slate-400 leading-relaxed mb-4">
                                    Perhaps our most touching success story is Dani. We found her on the streets, lost and struggling. Through our "Tough Love & Capital Allocation" program, we helped her get clean.
                                </p>
                                <p className="text-slate-400 leading-relaxed">
                                    Today, Dani is a proud mother and a contributing member of society (and our custodial staff). Her journey proves that with enough support—and a strict repayment plan—redemption is possible for anyone.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
