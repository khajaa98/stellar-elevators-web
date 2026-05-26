import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stellar-light-bg text-stellar-gray border-t border-black/5 pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
        {/* Brand Story */}
        <div className="space-y-10">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-[#2E3192] rounded-sm flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-700 shadow-lg">
              <div className="w-4 h-4 border-2 border-white rounded-sm transform -rotate-45 group-hover:rotate-0 transition-transform duration-700" />
            </div>
            <span className="font-display font-bold text-xl tracking-[0.15em] uppercase text-stellar-charcoal">
              Stellar<span className="text-stellar-gray font-light">Elevators</span>
            </span>
          </Link>
          <p className="text-sm md:text-base leading-relaxed font-light text-stellar-gray/80 max-w-sm">
            Crafting vertical mobility experiences for luxury residences, hotels, and architectural landmarks across South India. Redefining engineering through the lens of architectural elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-10">
          <h4 className="text-stellar-charcoal font-display font-bold tracking-[0.18em] uppercase text-[10px]">Navigation</h4>
          <ul className="space-y-5 text-sm font-light">
            {['About', 'Products', 'Services', 'Projects', 'Technology'].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`} className="hover:text-[#2E3192] transition-all duration-500 flex items-center gap-4 group">
                  <div className="w-0 h-[1px] bg-[#2E3192] group-hover:w-4 transition-all duration-500" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-10">
          <h4 className="text-stellar-charcoal font-display font-bold tracking-[0.18em] uppercase text-[10px]">Inquiries</h4>
          <ul className="space-y-6 text-sm font-light">
            <li className="flex items-start gap-4">
              <MapPin size={16} className="text-[#2E3192] shrink-0 mt-1" />
              <span className="leading-relaxed text-stellar-gray/80">Plot no-15, Suchitra, Hyderabad,<br />Telangana 500067</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone size={16} className="text-[#2E3192] shrink-0" />
              <a href="tel:+919490944220" className="hover:text-[#2E3192] transition-colors text-stellar-gray/80">+91 94909 44220</a>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={16} className="text-[#2E3192] shrink-0" />
              <a href="mailto:info@stellarelevators.com" className="hover:text-[#2E3192] transition-colors text-stellar-gray/80">info@stellarelevators.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 mt-32 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] tracking-[0.2em] font-bold uppercase text-stellar-gray/50">
        <p>&copy; {new Date().getFullYear()} Stellar Elevators &bull; Hyderabad</p>
        <div className="flex gap-10">
          <Link href="/privacy" className="hover:text-[#2E3192] transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-[#2E3192] transition-colors">Terms</Link>
          <span className="text-[#2E3192]/40 italic">Smile Philosophy</span>
        </div>
      </div>
    </footer>
  );
}
