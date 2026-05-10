"use client";

import PageTransition from '@/components/animations/PageTransition';
import PageHeader from '@/components/layout/PageHeader';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const reasons = [
  { title: 'Local Manufacturing', desc: 'Our state-of-the-art facility in Hyderabad ensures rapid production, quality control, and easy availability of spare parts.' },
  { title: 'Custom Engineering', desc: 'We don\'t just sell boxes. We engineer solutions tailored to your specific shaft dimensions, traffic patterns, and aesthetic preferences.' },
  { title: 'Uncompromising Safety', desc: 'Every elevator undergoes rigorous testing. We exceed national safety standards to ensure complete peace of mind.' },
  { title: '24/7 Responsive Service', desc: 'Our "Smile" philosophy means our dedicated maintenance teams are always on standby, minimizing downtime.' },
  { title: 'Transparent Pricing', desc: 'No hidden costs. We provide clear, comprehensive quotes for installation and long-term maintenance.' },
  { title: 'Proven Track Record', desc: 'With over 200 successful installations since 2019, our portfolio speaks for our reliability and expertise.' },
];

export default function WhyChooseUsContent() {
  return (
    <PageTransition>
      <PageHeader 
        title="Advantage" 
        subtitle="The Stellar Standard" 
        image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1920&auto=format&fit=crop"
      />
      
      <section className="py-24 md:py-48 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-[#2E3192] font-display tracking-[0.4em] uppercase text-xs font-bold mb-8 block">The Stellar Advantage</span>
              <h2 className="font-display text-4xl md:text-7xl font-bold mb-12 leading-[1.1]">
                Elevating Standards <br />
                <span className="text-[#2E3192] italic">Every Day</span>
              </h2>
              <p className="text-[#C7C7C7] font-light text-xl leading-relaxed mb-16 max-w-xl">
                Choosing an elevator partner is a long-term commitment. At Stellar Elevators, we build relationships as strong as our engineering.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                {reasons.map((reason, index) => (
                  <motion.div 
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex flex-col gap-4"
                  >
                    <CheckCircle2 size={24} className="text-[#2E3192]" />
                    <div>
                      <h4 className="font-display font-bold text-lg mb-3 tracking-tight">{reason.title}</h4>
                      <p className="text-[#C7C7C7]/60 text-sm font-light leading-relaxed">{reason.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-[4/5] overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
                alt="Modern Premium Office Space - Stellar Elevators Hyderabad" 
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 border border-white/5 m-8 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
