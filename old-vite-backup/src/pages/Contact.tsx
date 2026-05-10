import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <PageTransition>
      <PageHeader 
        title="Get in Touch" 
        subtitle="Start Your Project" 
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop"
      />
      
      <section className="py-32 bg-stellar-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Let's Discuss Your <br />
                <span className="text-stellar-blue italic">Requirements</span>
              </h2>
              <p className="text-stellar-gray font-light text-lg leading-relaxed mb-12">
                Whether you need a new installation, modernization, or reliable maintenance, our team is ready to provide a tailored solution. Contact us for a free site survey and consultation.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-stellar-blue/10 flex items-center justify-center text-stellar-blue group-hover:bg-stellar-blue group-hover:text-white transition-colors shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl mb-2">Head Office & Manufacturing</h4>
                    <p className="text-stellar-gray font-light leading-relaxed">
                      Plot no-15, H.No 6-252/1<br />
                      1st Floor, Opp Vasanth Vihar Park<br />
                      Suchitra, Hyderabad<br />
                      Telangana 500067, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-stellar-blue/10 flex items-center justify-center text-stellar-blue group-hover:bg-stellar-blue group-hover:text-white transition-colors shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl mb-2">Phone</h4>
                    <a href="tel:+910000000000" className="text-stellar-gray font-light hover:text-white transition-colors block mb-1">
                      +91 00000 00000
                    </a>
                    <span className="text-xs text-stellar-gray/60 uppercase tracking-widest">Mon-Sat, 9AM to 6PM</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-stellar-blue/10 flex items-center justify-center text-stellar-blue group-hover:bg-stellar-blue group-hover:text-white transition-colors shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl mb-2">Email</h4>
                    <a href="mailto:info@stellarelevators.com" className="text-stellar-gray font-light hover:text-white transition-colors block mb-1">
                      info@stellarelevators.com
                    </a>
                    <span className="text-xs text-stellar-gray/60 uppercase tracking-widest">We reply within 24 hours</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black/40 border border-white/10 p-8 md:p-12"
            >
              <h3 className="font-display text-2xl font-bold mb-8">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-display uppercase tracking-widest text-stellar-gray">Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 focus:border-stellar-blue outline-none py-3 text-white transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-display uppercase tracking-widest text-stellar-gray">Phone</label>
                    <input type="tel" className="w-full bg-transparent border-b border-white/20 focus:border-stellar-blue outline-none py-3 text-white transition-colors" placeholder="+91 00000 00000" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-display uppercase tracking-widest text-stellar-gray">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/20 focus:border-stellar-blue outline-none py-3 text-white transition-colors" placeholder="john@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-display uppercase tracking-widest text-stellar-gray">Service Required</label>
                  <select className="w-full bg-transparent border-b border-white/20 focus:border-stellar-blue outline-none py-3 text-white transition-colors appearance-none cursor-pointer">
                    <option value="" className="bg-stellar-charcoal text-stellar-gray">Select a service</option>
                    <option value="new" className="bg-stellar-charcoal text-white">New Installation</option>
                    <option value="maintenance" className="bg-stellar-charcoal text-white">Maintenance / AMC</option>
                    <option value="modernization" className="bg-stellar-charcoal text-white">Modernization</option>
                    <option value="other" className="bg-stellar-charcoal text-white">Other Inquiry</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-display uppercase tracking-widest text-stellar-gray">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-white/20 focus:border-stellar-blue outline-none py-3 text-white transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                </div>
                
                <button type="button" className="group w-full px-8 py-4 bg-stellar-blue text-white font-display tracking-widest uppercase text-sm font-semibold overflow-hidden flex items-center justify-center gap-3 mt-8">
                  <span className="relative z-10">Submit Request</span>
                  <Send size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
