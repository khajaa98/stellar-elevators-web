"use client";

import PageTransition from '@/components/animations/PageTransition';
import PageHeader from '@/components/layout/PageHeader';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const products = [
  { title: 'Villa Elevators', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop', desc: 'Luxurious, space-saving designs tailored for premium private residences. Customizable interiors to match your home decor.' },
  { title: 'Passenger Elevators', image: 'https://images.unsplash.com/photo-1570126646281-5ec88111777f?q=80&w=800&auto=format&fit=crop', desc: 'Engineered for smooth, silent, and safe vertical mobility in residential and commercial buildings.' },
  { title: 'Hospital Elevators', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop', desc: 'Spacious, reliable, and smooth transport for patients, stretchers, and medical equipment.' },
  { title: 'Freight Elevators', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop', desc: 'Heavy-duty, robust engineering for industrial and commercial goods transport.' },
  { title: 'Glass / Panoramic', image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=800&auto=format&fit=crop', desc: 'Stunning visual appeal combined with reliable performance for modern architectural masterpieces.' },
  { title: 'Dumbwaiters', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop', desc: 'Compact, efficient service lifts for restaurants, hotels, and multi-story homes.' },
];

export default function ProductsContent() {
  return (
    <PageTransition>
      <PageHeader 
        title="Our Collection" 
        subtitle="Vertical Craftsmanship" 
        image="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1920&auto=format&fit=crop"
      />
      
      <section className="py-24 md:py-48 bg-stellar-light-bg text-stellar-charcoal">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group relative aspect-[4/5] overflow-hidden bg-black cursor-pointer shadow-2xl"
              >
                <Image 
                  src={product.image} 
                  alt={`${product.title} - Stellar Elevators`} 
                  fill
                  className="object-cover opacity-60 group-hover:opacity-30 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end transform translate-y-12 group-hover:translate-y-0 transition-transform duration-700">
                  <h3 className="font-display text-3xl font-bold mb-4">{product.title}</h3>
                  <p className="text-[#C7C7C7] text-base font-light opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 leading-relaxed">
                    {product.desc}
                  </p>
                  <div className="mt-8 flex items-center gap-3 text-[#2E3192] text-xs font-display uppercase tracking-[0.2em] font-bold opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                    Technical Data <ChevronRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
