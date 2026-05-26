"use client";

import PageTransition from '@/components/animations/PageTransition';
import PageHeader from '@/components/layout/PageHeader';
import { motion } from 'motion/react';
import { Settings, Wrench, ShieldCheck, RefreshCw } from 'lucide-react';

const services = [
  { icon: Settings, title: 'Design & Manufacturing', desc: 'Custom engineering solutions tailored to your building\'s architectural and traffic requirements. Built in our Hyderabad facility.' },
  { icon: Wrench, title: 'Installation', desc: 'Expert, safe, and timely installation by our certified technicians, ensuring minimal disruption and maximum precision.' },
  { icon: ShieldCheck, title: 'Maintenance & AMC', desc: 'Comprehensive Annual Maintenance Contracts (AMC) to keep your elevators running smoothly, safely, and efficiently 24/7.' },
  { icon: RefreshCw, title: 'Modernization', desc: 'Upgrade your aging elevators with the latest technology, improving safety, aesthetics, and energy efficiency.' },
];

export default function ServicesContent() {
  return (
    <PageTransition>
      <PageHeader 
        title="Our Expertise" 
        subtitle="End-to-End Solutions" 
        image="https://images.unsplash.com/photo-1565439390165-c32a7647228a?q=80&w=1920&auto=format&fit=crop"
      />
      
      <section className="py-24 md:py-48 bg-stellar-light-bg text-stellar-charcoal">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group flex flex-col md:flex-row gap-10 items-start p-10 border border-black/5 hover:border-[#2E3192]/30 bg-white hover:bg-neutral-50 transition-all duration-700 shadow-xl"
              >
                <div className="w-16 h-16 rounded-sm border border-black/5 flex items-center justify-center text-[#2E3192] group-hover:bg-[#2E3192] group-hover:text-white transition-all duration-700 shrink-0">
                  <service.icon size={32} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-6 tracking-tight">{service.title}</h3>
                  <p className="text-stellar-gray font-light text-lg leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
