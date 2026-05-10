import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-stellar-gray border-t border-white/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-stellar-blue rounded-sm flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500">
              <div className="w-4 h-4 border-2 border-white rounded-sm transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </div>
            <span className="font-display font-bold text-xl tracking-widest uppercase text-white">
              Stellar<span className="text-stellar-gray font-light">Elevators</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed font-light">
            Integrated elevator solutions built in Hyderabad. Delivering reliable engineering with human-centric service since 2019.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-white font-display font-semibold tracking-widest uppercase text-sm">Quick Links</h4>
          <ul className="space-y-4 text-sm font-light">
            {['About', 'Products', 'Services', 'Projects', 'Technology'].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase()}`} className="hover:text-stellar-blue transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-white font-display font-semibold tracking-widest uppercase text-sm">Contact</h4>
          <ul className="space-y-4 text-sm font-light">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-stellar-blue shrink-0 mt-1" />
              <span>Plot no-15, H.No 6-252/1<br />1st Floor, Opp Vasanth Vihar Park<br />Suchitra, Hyderabad<br />Telangana 500067</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-stellar-blue shrink-0" />
              <a href="tel:+910000000000" className="hover:text-white transition-colors">+91 00000 00000</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-stellar-blue shrink-0" />
              <a href="mailto:info@stellarelevators.com" className="hover:text-white transition-colors">info@stellarelevators.com</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h4 className="text-white font-display font-semibold tracking-widest uppercase text-sm">Newsletter</h4>
          <p className="text-sm font-light">Subscribe for the latest updates on elevator technology and safety.</p>
          <form className="flex border-b border-white/20 focus-within:border-stellar-blue transition-colors pb-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border-none outline-none w-full text-sm text-white placeholder:text-stellar-gray/50"
            />
            <button type="submit" className="text-stellar-blue hover:text-white transition-colors">
              <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-stellar-gray/60">
        <p>&copy; {new Date().getFullYear()} Stellar Elevators. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
