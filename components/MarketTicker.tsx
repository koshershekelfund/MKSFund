import React from 'react';

export const MarketTicker: React.FC = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-slate-950 border-t border-slate-900 overflow-hidden py-3 z-50 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
            <div className="flex whitespace-nowrap animate-scroll">
                {[...Array(2)].map((_, i) => (
                    <React.Fragment key={i}>
                        {/* Major Indices */}
                        <span className="mx-6 text-xs font-mono text-slate-500 flex items-center gap-2">
                            S&P 500 <span className="text-green-500">▲ 6,901.01 (+0.56%)</span>
                        </span>
                        <span className="mx-6 text-xs font-mono text-slate-500 flex items-center gap-2">
                            DOW JONES <span className="text-red-500">▼ 48,704.01 (-0.15%)</span>
                        </span>
                        <span className="mx-6 text-xs font-mono text-slate-500 flex items-center gap-2">
                            NASDAQ <span className="text-green-500">▲ 23,593.86 (+0.81%)</span>
                        </span>

                        {/* Yields & Gold & BTC */}
                        <span className="mx-6 text-xs font-mono text-slate-500 flex items-center gap-2">
                            US 10Y <span className="text-slate-400">4.17% (+0.02)</span>
                        </span>
                        <span className="mx-6 text-xs font-mono text-slate-500 flex items-center gap-2">
                            US 30Y <span className="text-slate-400">4.81% (+0.03)</span>
                        </span>
                        <span className="mx-6 text-xs font-mono text-slate-500 flex items-center gap-2">
                            GOLD <span className="text-green-500">▲ 4,329.41 (+1.20%)</span>
                        </span>
                        <span className="mx-6 text-xs font-mono text-slate-500 flex items-center gap-2">
                            BTC <span className="text-green-500">▲ 92,443.82 (+3.45%)</span>
                        </span>

                        {/* Tech Giants */}
                        <span className="mx-6 text-xs font-mono text-slate-500 flex items-center gap-2">
                            AAPL <span className="text-green-500">▲ 245.00 (+1.2%)</span>
                        </span>
                        <span className="mx-6 text-xs font-mono text-slate-500 flex items-center gap-2">
                            AMZN <span className="text-green-500">▲ 230.50 (+0.9%)</span>
                        </span>
                        <span className="mx-6 text-xs font-mono text-slate-500 flex items-center gap-2">
                            NVDA <span className="text-green-500">▲ 142.15 (+2.1%)</span>
                        </span>
                        <span className="mx-6 text-xs font-mono text-slate-500 flex items-center gap-2">
                            GOOGL <span className="text-red-500">▼ 313.40 (-0.4%)</span>
                        </span>
                        <span className="mx-6 text-xs font-mono text-slate-500 flex items-center gap-2">
                            META <span className="text-green-500">▲ 644.20 (+1.5%)</span>
                        </span>
                        <span className="mx-6 text-xs font-mono text-slate-500 flex items-center gap-2">
                            TSLA <span className="text-green-500">▲ 446.89 (+4.2%)</span>
                        </span>

                        {/* Others */}
                        <span className="mx-6 text-xs font-mono text-slate-500 flex items-center gap-2">
                            EVTL <span className="text-green-500">▲ 6.73 (+5.1%)</span>
                        </span>
                        <span className="mx-6 text-xs font-mono text-slate-500 flex items-center gap-2">
                            UNH <span className="text-red-500">▼ 323.17 (-1.1%)</span>
                        </span>
                        <span className="mx-6 text-xs font-mono text-slate-500 flex items-center gap-2">
                            VOO <span className="text-green-500">▲ 633.71 (+0.6%)</span>
                        </span>
                        <span className="mx-6 text-xs font-mono text-slate-500 flex items-center gap-2">
                            MSTR <span className="text-green-500">▲ 188.31 (+8.4%)</span>
                        </span>
                        <span className="mx-6 text-xs font-mono text-slate-500 flex items-center gap-2">
                            KO <span className="text-slate-400">62.50 (0.00%)</span>
                        </span>
                        <span className="mx-6 text-xs font-mono text-slate-500 flex items-center gap-2">
                            PEP <span className="text-red-500">▼ 149.90 (-0.2%)</span>
                        </span>
                        <span className="mx-6 text-xs font-mono text-slate-500 flex items-center gap-2">
                            NEE <span className="text-green-500">▲ 81.21 (+0.5%)</span>
                        </span>
                        <span className="mx-6 text-xs font-mono text-slate-500 flex items-center gap-2">
                            UBER <span className="text-green-500">▲ 82.40 (+1.8%)</span>
                        </span>
                        <span className="mx-6 text-xs font-mono text-slate-500 flex items-center gap-2">
                            HIMS <span className="text-green-500">▲ 26.50 (+3.2%)</span>
                        </span>
                        <span className="mx-6 text-xs font-mono text-slate-500 flex items-center gap-2">
                            VZ <span className="text-green-500">▲ 41.76 (+0.8%)</span>
                        </span>
                        <span className="mx-6 text-xs font-mono text-slate-500 flex items-center gap-2">
                            T <span className="text-green-500">▲ 22.15 (+0.4%)</span>
                        </span>
                        <span className="mx-6 text-xs font-mono text-slate-500 flex items-center gap-2">
                            VNQ <span className="text-red-500">▼ 85.30 (-0.6%)</span>
                        </span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};
