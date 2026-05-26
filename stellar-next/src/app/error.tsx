"use client";

import { useEffect } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-stellar-light-bg flex flex-col items-center justify-center p-6 text-center text-stellar-charcoal">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full"
      >
        <div className="w-20 h-20 bg-red-500/10 rounded-sm flex items-center justify-center mx-auto mb-8 border border-red-500/20">
          <AlertTriangle size={32} className="text-red-500" />
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-stellar-charcoal mb-4 uppercase tracking-wider">
          System Interruption
        </h2>
        <p className="text-stellar-gray font-light mb-12 text-lg leading-relaxed">
          An unexpected error has occurred while processing your request. Our engineering team has been notified.
        </p>
        
        <button
          onClick={reset}
          className="inline-flex items-center gap-3 px-10 py-5 bg-[#2E3192] text-white font-display tracking-widest uppercase text-xs font-bold hover:bg-[#2E3192]/80 transition-all shadow-2xl"
        >
          <RefreshCw size={16} /> Reconnect System
        </button>
      </motion.div>
    </div>
  );
}
