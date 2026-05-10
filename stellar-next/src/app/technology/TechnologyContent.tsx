"use client";

import PageTransition from '@/components/animations/PageTransition';
import PageHeader from '@/components/layout/PageHeader';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Settings, Cpu, ShieldCheck, HardHat, Zap, Activity } from 'lucide-react';

const technologies = [
  { icon: Settings, title: 'Gearless Synchronous Motors', desc: 'Permanent magnet synchronous motors (PMSM) that offer a smoother, quieter ride while significantly reducing energy consumption.' },
  { icon: Cpu, title: 'Smart IoT Monitoring', desc: 'Real-time data analytics and predictive maintenance. Our elevators self-diagnose and alert service teams before breakdowns occur.' },
  { icon: ShieldCheck, title: 'Multi-Redundant Safety', desc: 'Advanced electronic safety systems including overspeed governors, progressive safety gear, and automated rescue devices.' },
  { icon: Zap, title: 'Regenerative Drives', desc: 'Eco-friendly drives that capture braking energy and feed it back into the building\'s power grid.' },
  { icon: Activity, title: 'Destination Dispatch', desc: 'Intelligent traffic management systems that group passengers by destination, reducing wait times and improving efficiency.' },
  { icon: HardHat, title: 'Seismic & Fire Protection', desc: 'Engineered to withstand seismic activity and equipped with fire emergency return operations to ensure passenger safety.' },
];

export default function TechnologyContent() {
  return (
    <PageTransition>
      <PageHeader 
        title="Intelligence" 
        subtitle="Innovation & Safety" 
        image="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1920&auto=format&fit=crop"
      />
      
      <section className="py-24 md:py-48 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group p-10 border border-white/5 hover:border-[#2E3192]/50 bg-black/10 hover:bg-black/30 transition-all duration-700 shadow-xl"
              >
                <div className="w-16 h-16 rounded-sm border border-white/5 flex items-center justify-center text-[#2E3192] group-hover:bg-[#2E3192] group-hover:text-white transition-all duration-700 mb-10">
                  <tech.icon size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-6 tracking-tight">{tech.title}</h3>
                <p className="text-[#C7C7C7] font-light text-lg leading-relaxed">
                  {tech.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
