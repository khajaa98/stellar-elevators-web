"use client";

import PageTransition from '@/components/animations/PageTransition';
import PageHeader from '@/components/layout/PageHeader';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function AboutContent() {
  return (
    <PageTransition>
      <PageHeader 
        title="Engineering Trust" 
        subtitle="The Stellar Story" 
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1920&auto=format&fit=crop"
      />
      
      <section className="py-24 md:py-48 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-[4/5] overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" 
                alt="Founder of Stellar Elevators Hyderabad" 
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/95 to-transparent">
                <h3 className="font-display text-2xl font-bold">Mr. Shabbir Mohammed</h3>
                <p className="text-[#2E3192] text-xs uppercase tracking-[0.3em] font-bold mt-2">Founder & CEO</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[#2E3192] font-display tracking-[0.4em] uppercase text-xs font-bold mb-8 block">Our Foundation</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-10 leading-[1.1]">
                Engineering with a <br />
                <span className="text-[#2E3192] italic">Human Touch</span>
              </h2>
              <div className="space-y-8 text-[#C7C7C7] font-light text-xl leading-relaxed">
                <p>
                  Stellar Elevators was established in 2019 in Hyderabad with a vision to redefine vertical mobility. We recognized a gap for solutions that combined world-class engineering precision with localized, responsive service.
                </p>
                <p>
                  Our core philosophy is simple: <strong>"Smile"</strong>. We believe that true engineering success is measured by the satisfaction it brings to the user. Every elevator we manufacture is built to deliver a seamless, reliable experience.
                </p>
                <p>
                  Today, from our manufacturing hub in Suchitra, we serve residential, commercial, and industrial sectors, standing as a beacon of trust and technological advancement in South India.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
