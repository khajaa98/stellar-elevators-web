import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  { title: 'Local Manufacturing', desc: 'Our state-of-the-art facility in Hyderabad ensures rapid production, quality control, and easy availability of spare parts.' },
  { title: 'Custom Engineering', desc: 'We don\'t just sell boxes. We engineer solutions tailored to your specific shaft dimensions, traffic patterns, and aesthetic preferences.' },
  { title: 'Uncompromising Safety', desc: 'Every elevator undergoes rigorous testing. We exceed national safety standards to ensure complete peace of mind.' },
  { title: '24/7 Responsive Service', desc: 'Our "Smile" philosophy means our dedicated maintenance teams are always on standby, minimizing downtime.' },
  { title: 'Transparent Pricing', desc: 'No hidden costs. We provide clear, comprehensive quotes for installation and long-term maintenance.' },
  { title: 'Proven Track Record', desc: 'With over 200 successful installations since 2019, our portfolio speaks for our reliability and expertise.' },
];

export default function WhyChooseUs() {
  return (
    <PageTransition>
      <PageHeader 
        title="Why Choose Us" 
        subtitle="The Stellar Advantage" 
        image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1920&auto=format&fit=crop"
      />
      
      <section className="py-32 bg-stellar-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Elevating Standards <br />
                <span className="text-stellar-blue italic">Every Day</span>
              </h2>
              <p className="text-stellar-gray font-light text-lg leading-relaxed mb-12">
                Choosing an elevator partner is a long-term commitment. At Stellar Elevators, we build relationships as strong as our engineering. Here is why developers, architects, and homeowners trust us.
              </p>
              
              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <motion.div 
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex gap-4 items-start"
                  >
                    <CheckCircle2 size={24} className="text-stellar-blue shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-bold text-xl mb-2">{reason.title}</h4>
                      <p className="text-stellar-gray font-light">{reason.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
                alt="Modern Office" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 border border-white/10 m-6 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
