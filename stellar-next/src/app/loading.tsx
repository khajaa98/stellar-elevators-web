"use client";

import { motion } from 'motion/react';
import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-stellar-light-bg z-[9999] flex flex-col items-center justify-center gap-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <Loader2 size={48} className="text-[#2E3192] animate-spin" />
        <div className="absolute inset-0 border border-[#2E3192]/20 rounded-full scale-150 animate-pulse" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-stellar-charcoal font-display text-sm uppercase tracking-[0.4em] font-bold">Stellar</h2>
        <p className="text-stellar-gray text-[10px] uppercase tracking-[0.2em] mt-2">Elevating Excellence</p>
      </motion.div>
    </div>
  );
}
