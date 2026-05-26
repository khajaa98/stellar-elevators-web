"use client";

import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-stellar-light-bg/80 backdrop-blur-md border border-black/10 rounded-full flex items-center justify-center text-stellar-charcoal hover:bg-[#2E3192] hover:text-white transition-all duration-300 shadow-xl"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href="tel:+919490944220"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Call Stellar Elevators"
        className="w-12 h-12 bg-white/90 text-[#1A1A1A] rounded-full flex items-center justify-center shadow-xl group transition-all duration-300"
      >
        <Phone size={20} className="group-hover:rotate-12 transition-transform" />
        <span className="absolute right-full mr-4 px-4 py-2 bg-white/90 backdrop-blur-md text-[#1A1A1A] text-[10px] font-display tracking-[0.2em] uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap rounded-sm shadow-xl pointer-events-none">
          Direct Call
        </span>
      </motion.a>

      <motion.a
        href="https://wa.me/919490944220?text=Hello%20Stellar%20Elevators%2C%20I%20would%20like%20a%20consultation%20for%20my%20project."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contact us on WhatsApp"
        className="w-12 h-12 bg-[#25D366]/90 text-white rounded-full flex items-center justify-center shadow-xl group transition-all duration-300"
      >
        <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
        <span className="absolute right-full mr-4 px-4 py-2 bg-[#25D366]/90 backdrop-blur-md text-white text-[10px] font-display tracking-[0.2em] uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap rounded-sm shadow-xl pointer-events-none">
          WhatsApp Consultation
        </span>
      </motion.a>
    </div>
  );
}
