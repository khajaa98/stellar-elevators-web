import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const products = [
  { title: 'Passenger Elevators', image: 'https://images.unsplash.com/photo-1570126646281-5ec88111777f?q=80&w=800&auto=format&fit=crop', desc: 'Engineered for smooth, silent, and safe vertical mobility in residential and commercial buildings. Available in various capacities and speeds.' },
  { title: 'Villa Elevators', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop', desc: 'Luxurious, space-saving designs tailored for premium private residences. Customizable interiors to match your home decor.' },
  { title: 'Hospital Elevators', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop', desc: 'Spacious, reliable, and smooth transport for patients, stretchers, and medical equipment. Built with stringent hygiene and safety standards.' },
  { title: 'Freight Elevators', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop', desc: 'Heavy-duty, robust engineering for industrial and commercial goods transport. High load capacities and durable finishes.' },
  { title: 'Glass / Panoramic Elevators', image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=800&auto=format&fit=crop', desc: 'Stunning visual appeal combined with reliable performance. Perfect for malls, hotels, and modern architectural masterpieces.' },
  { title: 'Dumbwaiters', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop', desc: 'Compact, efficient service lifts for restaurants, hotels, and multi-story homes to transport food and small goods.' },
];

export default function Products() {
  return (
    <PageTransition>
      <PageHeader 
        title="Our Elevators" 
        subtitle="Precision Engineering" 
        image="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1920&auto=format&fit=crop"
      />
      
      <section className="py-32 bg-stellar-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative aspect-[4/5] overflow-hidden bg-black cursor-pointer"
              >
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-display text-2xl font-bold mb-4">{product.title}</h3>
                  <p className="text-stellar-gray text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                    {product.desc}
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-stellar-blue text-sm font-display uppercase tracking-widest font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    View Specifications <ArrowRight size={16} />
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
