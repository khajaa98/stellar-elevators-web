import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
        />
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-stellar-blue font-display tracking-[0.3em] uppercase text-sm md:text-base font-semibold mb-6 block">
            {subtitle}
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white">
            {title}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
