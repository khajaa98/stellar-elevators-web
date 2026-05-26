"use client";

import PageTransition from '@/components/animations/PageTransition';
import PageHeader from '@/components/layout/PageHeader';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';
import InquiryForm from '@/components/ui/InquiryForm';

export default function ContactContent() {
  return (
    <PageTransition>
      <PageHeader 
        title="Consultation" 
        subtitle="Start Your Project" 
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop"
      />
      
      <section className="py-24 md:py-48 bg-stellar-light-bg text-stellar-charcoal">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-[#2E3192] font-display tracking-[0.4em] uppercase text-xs font-bold mb-8 block">Connect With Us</span>
              <h2 className="font-display text-4xl md:text-7xl font-bold mb-10 leading-[1.1]">
                Let&apos;s Discuss Your <br />
                <span className="text-[#2E3192] italic">Vision</span>
              </h2>
              <p className="text-stellar-gray font-light text-xl leading-relaxed mb-16 max-w-lg">
                Whether you need a new installation or modernization, our team provides tailored engineering solutions.
              </p>
              
              <div className="space-y-12">
                <div className="flex items-start gap-8 group">
                  <div className="w-14 h-14 rounded-sm border border-black/5 flex items-center justify-center text-[#2E3192] group-hover:bg-[#2E3192] group-hover:text-white transition-all duration-500 shrink-0 shadow-xl">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl mb-3 uppercase tracking-widest text-stellar-charcoal">Corporate Headquarters</h4>
                    <p className="text-stellar-gray font-light text-lg leading-relaxed">
                      Plot no-15, H.No 6-252/1, 1st Floor<br />
                      Suchitra, Hyderabad, Telangana 500067
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-8 group">
                  <div className="w-14 h-14 rounded-sm border border-black/5 flex items-center justify-center text-[#2E3192] group-hover:bg-[#2E3192] group-hover:text-white transition-all duration-500 shrink-0 shadow-xl">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl mb-3 uppercase tracking-widest text-stellar-charcoal">Direct Contact</h4>
                    <a href="tel:+919490944220" className="text-stellar-gray font-light text-2xl hover:text-[#2E3192] transition-colors block mb-2">
                      +91 94909 44220
                    </a>
                    <span className="text-[10px] text-[#2E3192] uppercase tracking-[0.3em] font-bold">Available Mon-Sat, 9AM to 6PM</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-8 group">
                  <div className="w-14 h-14 rounded-sm border border-black/5 flex items-center justify-center text-[#2E3192] group-hover:bg-[#2E3192] group-hover:text-white transition-all duration-500 shrink-0 shadow-xl">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl mb-3 uppercase tracking-widest text-stellar-charcoal">Email Correspondence</h4>
                    <a href="mailto:info@stellarelevators.com" className="text-stellar-gray font-light text-2xl hover:text-[#2E3192] transition-colors block mb-2">
                      info@stellarelevators.com
                    </a>
                    <span className="text-[10px] text-[#2E3192] uppercase tracking-[0.3em] font-bold">Responds within 24 hours</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-white border border-black/5 p-12 md:p-20 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#2E3192] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
              <h3 className="font-display text-3xl font-bold mb-12 text-stellar-charcoal">Project Brief</h3>
              <InquiryForm />
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
