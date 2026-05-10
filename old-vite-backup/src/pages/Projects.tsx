import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const projects = [
  { title: 'Skyline Tower', location: 'Hyderabad', type: 'Commercial', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop' },
  { title: 'Tech Park Alpha', location: 'Bengaluru', type: 'IT Park', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop' },
  { title: 'The Grand Residence', location: 'Mumbai', type: 'Residential', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop' },
  { title: 'City Hospital', location: 'Hyderabad', type: 'Healthcare', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop' },
  { title: 'Luxury Villas', location: 'Pune', type: 'Residential', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop' },
  { title: 'Central Mall', location: 'Chennai', type: 'Retail', image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=800&auto=format&fit=crop' },
];

export default function Projects() {
  return (
    <PageTransition>
      <PageHeader 
        title="Our Portfolio" 
        subtitle="Featured Installations" 
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop"
      />
      
      <section className="py-32 bg-stellar-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 right-4 bg-stellar-blue text-white text-xs font-display uppercase tracking-widest px-3 py-1 font-semibold">
                    {project.type}
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-stellar-blue transition-colors">{project.title}</h3>
                  <div className="flex items-center gap-2 text-stellar-gray text-sm font-light">
                    <MapPin size={16} className="text-stellar-blue" />
                    {project.location}
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
