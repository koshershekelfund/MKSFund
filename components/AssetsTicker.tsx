import React, { useEffect, useMemo, useRef, useState } from 'react';

const STARTING_ASSETS_DOLLARS = 12_000_000_000;
const YEARLY_INCREASE_DOLLARS = 2_000_000_000;
const SECONDS_PER_YEAR = 365.25 * 24 * 60 * 60;

export const AssetsTicker: React.FC = () => {
  const [assets, setAssets] = useState<number>(STARTING_ASSETS_DOLLARS);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    []
  );

  useEffect(() => {
    const step = (now: number) => {
      if (startRef.current === null) {
        startRef.current = now;
      }
      const elapsedSeconds = (now - startRef.current) / 1000;
      const addedAmount = YEARLY_INCREASE_DOLLARS * (elapsedSeconds / SECONDS_PER_YEAR);
      setAssets(STARTING_ASSETS_DOLLARS + addedAmount);
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-40 pointer-events-none">
      <div className="pointer-events-auto bg-slate-900/90 backdrop-blur-sm border border-gold-500/50 text-slate-100 px-4 py-3 rounded-sm shadow-lg flex flex-col gap-1 w-60">
        <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400">Total Assets Managed</span>
        <span className="text-lg font-semibold text-gold-200">{formatter.format(assets)}</span>
        <span className="text-[10px] text-slate-500 uppercase tracking-widest">+ $2B / yr</span>
      </div>
    </div>
  );
};
