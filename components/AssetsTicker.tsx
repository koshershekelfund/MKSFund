import React, { useEffect, useState } from 'react';

// Starting range: 12B - 13B
const MIN_ASSETS = 12_000_000_000;
const MAX_ASSETS = 13_000_000_000;
const MAX_CHANGE_PER_SECOND = 50_000_000; // Max ±50M per update
const STORAGE_KEY_ASSETS = 'mks_fund_current_assets';

// Next Shmita year starts September 7, 2029 (Rosh Hashanah 5790)
const NEXT_SHMITA_START = new Date('2029-09-07T00:00:00');

export const AssetsTicker: React.FC = () => {
  const [assets, setAssets] = useState<number>(() => {
    // Initialize from localStorage or random starting value
    const stored = localStorage.getItem(STORAGE_KEY_ASSETS);
    if (stored) {
      return parseFloat(stored);
    }
    return MIN_ASSETS + Math.random() * (MAX_ASSETS - MIN_ASSETS);
  });

  const [timeToShmita, setTimeToShmita] = useState<string>('');

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Update assets every second with random movement
  useEffect(() => {
    const interval = setInterval(() => {
      setAssets(prevAssets => {
        // Random movement: -50M to +50M
        const change = (Math.random() - 0.5) * 2 * MAX_CHANGE_PER_SECOND;
        let newAssets = prevAssets + change;

        // Clamp between 12B and 13B
        if (newAssets < MIN_ASSETS) newAssets = MIN_ASSETS + Math.random() * 100_000_000;
        if (newAssets > MAX_ASSETS) newAssets = MAX_ASSETS - Math.random() * 100_000_000;

        // Store in localStorage
        localStorage.setItem(STORAGE_KEY_ASSETS, newAssets.toString());

        return newAssets;
      });
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  // Update Shmita countdown every second
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = NEXT_SHMITA_START.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeToShmita('Shmita is here!');
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeToShmita(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown(); // Initial update
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-16 left-4 z-40 pointer-events-none">
      <div className="pointer-events-auto bg-slate-900/90 backdrop-blur-sm border border-gold-500/50 text-slate-100 px-4 py-3 rounded-sm shadow-lg flex flex-col gap-2 w-60">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400">Total Assets Under Management</span>
          <span className="text-lg font-semibold text-gold-200">{formatter.format(assets)}</span>
        </div>

        <div className="border-t border-slate-700 pt-2 flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400">Next Shmita Liquidations</span>
          <span className="text-sm font-mono text-gold-200">{timeToShmita}</span>
        </div>
      </div>
    </div>
  );
};
