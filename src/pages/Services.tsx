import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import { motion } from 'motion/react';
import { Settings, Wrench, ShieldCheck, RefreshCw } from 'lucide-react';

const services = [
  { icon: Settings, title: 'Design & Manufacturing', desc: 'Custom engineering solutions tailored to your building\'s architectural and traffic requirements. Built in our Hyderabad facility.' },
  { icon: Wrench, title: 'Installation', desc: 'Expert, safe, and timely installation by our certified technicians, ensuring minimal disruption and maximum precision.' },
  { icon: ShieldCheck, title: 'Maintenance & AMC', desc: 'Comprehensive Annual Maintenance Contracts (AMC) to keep your elevators running smoothly, safely, and efficiently 24/7.' },
  { icon: RefreshCw, title: 'Modernization', desc: 'Upgrade your aging elevators with the latest technology, improving safety, aesthetics, and energy efficiency without full replacement.' },
];

export default function Services() {
  return (
    <PageTransition>
      <PageHeader 
        title="Our Services" 
        subtitle="End-to-End Solutions" 
        image="https://images.unsplash.com/photo-1565439390165-c32a7647228a?q=80&w=1920&auto=format&fit=crop"
      />
      
      <section className="py-32 bg-stellar-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group flex flex-col md:flex-row gap-8 items-start p-8 border border-white/10 hover:border-stellar-blue/50 bg-black/20 hover:bg-black/40 transition-all duration-500"
              >
                <div className="p-4 rounded-full bg-stellar-blue/10 text-stellar-blue group-hover:bg-stellar-blue group-hover:text-white transition-colors duration-500 shrink-0">
                  <service.icon size={32} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-stellar-gray font-light leading-relaxed">
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
