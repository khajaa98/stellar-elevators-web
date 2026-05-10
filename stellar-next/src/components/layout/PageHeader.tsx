"use client";

import Image from 'next/image';
import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <section className="relative h-[70vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <Image 
          src={image} 
          alt={title} 
          fill
          priority
          className="object-cover object-center scale-105 animate-[pulse_30s_ease-in-out_infinite_alternate]"
        />
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-8 md:px-12 w-full text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#2E3192] font-display tracking-[0.5em] uppercase text-xs md:text-sm font-bold mb-8 block">
            {subtitle}
          </span>
          <h1 className="font-display text-5xl md:text-8xl font-bold leading-[1] tracking-tighter text-white max-w-5xl mx-auto">
            {title}
          </h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="h-[1px] bg-[#2E3192] mx-auto mt-12"
          />
        </motion.div>
      </div>
    </section>
  );
}
