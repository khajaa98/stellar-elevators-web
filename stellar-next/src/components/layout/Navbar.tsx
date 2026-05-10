"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Technology', path: '/technology' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [pathname, isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isScrolled ? 'bg-[#1A1A1A]/95 backdrop-blur-xl py-5 shadow-2xl border-b border-white/5' : 'bg-transparent py-8 md:py-10'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 md:gap-3 group">
          <div className="w-7 h-7 md:w-9 md:h-9 bg-[#2E3192] rounded-sm flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-700 shadow-lg">
            <div className="w-3 h-3 md:w-4 md:h-4 border-2 border-white rounded-sm transform -rotate-45 group-hover:rotate-0 transition-transform duration-700" />
          </div>
          <span className="font-display font-bold text-base md:text-xl tracking-[0.2em] uppercase">
            Stellar<span className="text-[#C7C7C7] font-light">Elevators</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-[10px] tracking-[0.22em] uppercase transition-all duration-500 hover:text-[#2E3192] relative group ${
                pathname === link.path ? 'text-[#2E3192] font-bold' : 'text-[#C7C7C7]'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-[1px] bg-[#2E3192] transition-all duration-500 ${pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
          <Link href="/contact" className="ml-6 px-10 py-3.5 border border-[#2E3192] text-[#2E3192] text-[10px] tracking-[0.22em] uppercase font-bold hover:bg-[#2E3192] hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(46,49,146,0.1)]">
            Enquire
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white w-10 h-10 flex items-center justify-center border border-white/10 rounded-full"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#1A1A1A] z-[90] lg:hidden flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <Link
                    href={link.path}
                    className={`text-2xl tracking-[0.3em] uppercase font-display ${
                      pathname === link.path ? 'text-[#2E3192] font-bold' : 'text-[#C7C7C7]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.2 }}
                className="mt-10"
              >
                <Link href="/contact" className="px-12 py-5 bg-[#2E3192] text-white text-xs tracking-[0.4em] uppercase font-bold">
                  Get a Quote
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
