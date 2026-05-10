"use client";

import PageTransition from '@/components/animations/PageTransition';
import PageHeader from '@/components/layout/PageHeader';
import { motion } from 'motion/react';
import Image from 'next/image';
import { MapPin, ChevronRight } from 'lucide-react';

const projects = [
  { title: 'Skyline Tower', location: 'Hyderabad', type: 'Commercial', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop' },
  { title: 'Tech Park Alpha', location: 'Bengaluru', type: 'IT Park', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop' },
  { title: 'The Grand Residence', location: 'Mumbai', type: 'Residential', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop' },
  { title: 'City Hospital', location: 'Hyderabad', type: 'Healthcare', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop' },
  { title: 'Luxury Villas', location: 'Pune', type: 'Residential', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop' },
  { title: 'Central Mall', location: 'Chennai', type: 'Retail', image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=800&auto=format&fit=crop' },
];

export default function ProjectsContent() {
  return (
    <PageTransition>
      <PageHeader 
        title="Landmarks" 
        subtitle="Our Portfolio" 
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop"
      />
      
      <section className="py-24 md:py-48 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-8 shadow-2xl">
                  <Image 
                    src={project.image} 
                    alt={`${project.title} - Stellar Elevators Installation in ${project.location}`} 
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-1000" />
                  <div className="absolute top-6 right-6 bg-[#2E3192] text-white text-[10px] font-display uppercase tracking-[0.3em] px-4 py-2 font-bold shadow-xl">
                    {project.type}
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-[#2E3192] transition-colors duration-500">{project.title}</h3>
                    <div className="flex items-center gap-3 text-[#C7C7C7]/60 text-sm font-light">
                      <MapPin size={16} className="text-[#2E3192]" />
                      {project.location}
                    </div>
                  </div>
                  <ChevronRight size={28} className="text-[#C7C7C7]/10 group-hover:text-[#2E3192] group-hover:translate-x-3 transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
