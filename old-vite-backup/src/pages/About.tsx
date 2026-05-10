import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import { motion } from 'motion/react';

export default function About() {
  return (
    <PageTransition>
      <PageHeader 
        title="Our Story" 
        subtitle="About Stellar Elevators" 
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1920&auto=format&fit=crop"
      />
      
      <section className="py-32 bg-stellar-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" 
                alt="Founder" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="font-display text-2xl font-bold">Mr. Shabbir Mohammed</h3>
                <p className="text-stellar-blue text-sm uppercase tracking-widest mt-1">Founder & CEO</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Engineering with a <br />
                <span className="text-stellar-blue italic">Human Touch</span>
              </h2>
              <div className="space-y-6 text-stellar-gray font-light text-lg leading-relaxed">
                <p>
                  Stellar Elevators was established in 2019 in Hyderabad, Telangana, with a vision to redefine vertical mobility in India. We recognized a gap in the market for elevators that combined world-class engineering precision with localized, responsive customer service.
                </p>
                <p>
                  Our core philosophy is simple: <strong>"Smile"</strong>. We believe that true engineering success is measured not just in technical specifications, but in the peace of mind and satisfaction it brings to the end-user. Every elevator we design, manufacture, and install is built to deliver that reliable, smooth experience.
                </p>
                <p>
                  Today, from our advanced manufacturing hub in Suchitra, we serve a diverse clientele across residential, commercial, and industrial sectors, standing as a beacon of trust and technological advancement in the elevator industry.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
