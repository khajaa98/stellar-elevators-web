import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Settings, Cpu, ChevronRight, Building2, Factory, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  { title: 'Passenger Elevators', image: 'https://images.unsplash.com/photo-1570126646281-5ec88111777f?q=80&w=800&auto=format&fit=crop', desc: 'Smooth, silent, and safe vertical mobility for residential and commercial buildings.' },
  { title: 'Villa Elevators', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop', desc: 'Luxurious, space-saving designs tailored for premium private residences.' },
  { title: 'Hospital Elevators', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop', desc: 'Spacious, reliable, and smooth transport for patients and medical equipment.' },
  { title: 'Freight Elevators', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop', desc: 'Heavy-duty, robust engineering for industrial and commercial goods transport.' },
];

const projects = [
  { title: 'Skyline Tower', location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop' },
  { title: 'Tech Park Alpha', location: 'Bengaluru', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop' },
  { title: 'The Grand Residence', location: 'Mumbai', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop' },
];

export default function Home() {
  return (
    <main className="w-full bg-stellar-charcoal text-white overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1920&auto=format&fit=crop" 
            alt="Cinematic Architecture" 
            className="w-full h-full object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-stellar-blue font-display tracking-[0.3em] uppercase text-sm md:text-base font-semibold mb-6 block">
              Stellar Elevators
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-8 max-w-4xl">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-stellar-gray">Vertical Mobility</span>
            </h1>
            <p className="text-lg md:text-xl text-stellar-gray/90 font-light max-w-2xl mb-12 leading-relaxed">
              Integrated elevator solutions built in Hyderabad. We blend industrial precision with human-centric design to elevate your building's potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact" className="group relative px-8 py-4 bg-stellar-blue text-white font-display tracking-widest uppercase text-sm font-semibold overflow-hidden flex items-center justify-center gap-3">
                <span className="relative z-10">Get Free Consultation</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
              </Link>
              <Link to="/products" className="group px-8 py-4 border border-white/20 text-white font-display tracking-widest uppercase text-sm font-semibold hover:bg-white hover:text-stellar-charcoal transition-colors duration-300 flex items-center justify-center">
                Explore Products
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-stellar-gray/60">Scroll</span>
          <div className="w-[1px] h-16 bg-white/20 overflow-hidden">
            <motion.div 
              animate={{ y: [0, 64] }} 
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-1/2 bg-stellar-blue"
            />
          </div>
        </motion.div>
      </section>

      {/* 2. Trust Indicators */}
      <section className="border-b border-white/10 bg-black/20 backdrop-blur-sm relative z-30 -mt-1">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/10">
            {[
              { icon: Building2, label: 'Established', value: '2019' },
              { icon: Settings, label: 'Installations', value: '200+' },
              { icon: Factory, label: 'Manufacturing', value: 'Hyderabad' },
              { icon: Cpu, label: 'Technology', value: 'Advanced' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex flex-col items-center text-center px-4"
              >
                <stat.icon size={24} className="text-stellar-blue mb-4 opacity-80" />
                <span className="font-display text-2xl md:text-3xl font-bold mb-1">{stat.value}</span>
                <span className="text-xs uppercase tracking-widest text-stellar-gray/60">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Stellar Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] lg:aspect-square overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop" 
                alt="Industrial Facility" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 border border-white/10 m-6 pointer-events-none" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
                The Philosophy of <br />
                <span className="text-stellar-blue italic">"Smile"</span>
              </h2>
              <div className="space-y-6 text-stellar-gray font-light text-lg leading-relaxed">
                <p>
                  Founded in 2019 by Mr. Shabbir Mohammed, Stellar Elevators was built on a simple yet profound philosophy: delivering reliable engineering with human-centric service that brings a smile to our clients.
                </p>
                <p>
                  Operating from our state-of-the-art facility in Suchitra, Hyderabad, we are an integrated one-stop provider. From meticulous design and robust manufacturing to precise installation and lifelong maintenance, we control the entire lifecycle of vertical mobility.
                </p>
                <p>
                  Safety, innovation, and engineering excellence aren't just buzzwords—they are the structural integrity of our company.
                </p>
              </div>
              <Link to="/about" className="inline-flex items-center gap-3 mt-12 text-sm font-display uppercase tracking-widest font-semibold hover:text-stellar-blue transition-colors group">
                Discover Our Story
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Product Categories */}
      <section className="py-32 bg-black/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-stellar-blue font-display tracking-widest uppercase text-sm font-semibold mb-4 block">Our Solutions</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold">Engineered for Every Space</h2>
            </motion.div>
            <Link to="/products" className="text-sm font-display uppercase tracking-widest font-semibold hover:text-stellar-blue transition-colors flex items-center gap-2 group shrink-0">
              View All Products <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative aspect-[16/10] overflow-hidden bg-stellar-charcoal cursor-pointer"
              >
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-display text-2xl font-bold mb-3">{product.title}</h3>
                  <p className="text-stellar-gray text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md">
                    {product.desc}
                  </p>
                  <div className="mt-6 w-10 h-[1px] bg-stellar-blue group-hover:w-20 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Manufacturing Excellence */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1565439390165-c32a7647228a?q=80&w=1920&auto=format&fit=crop" 
            alt="Manufacturing" 
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stellar-charcoal via-stellar-charcoal/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-stellar-blue font-display tracking-widest uppercase text-sm font-semibold mb-6 block">Manufacturing Excellence</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Precision Forged in Hyderabad
            </h2>
            <p className="text-lg text-stellar-gray font-light mb-12 leading-relaxed">
              Our manufacturing facility is a testament to industrial luxury. Equipped with state-of-the-art machinery and rigorous safety testing protocols, we ensure every component meets global standards before it leaves our floor.
            </p>
            
            <ul className="space-y-6 mb-12">
              {[
                'Advanced CNC Machining & Fabrication',
                'Rigorous Multi-stage Quality Control',
                'In-house R&D and Testing Tower'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-sm font-display tracking-wide">
                  <div className="w-1.5 h-1.5 bg-stellar-blue rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
            
            <Link to="/about" className="group inline-flex items-center gap-4 text-sm font-display uppercase tracking-widest font-semibold">
              <span className="w-12 h-[1px] bg-white group-hover:w-20 group-hover:bg-stellar-blue transition-all duration-300" />
              Explore Facility
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6. Featured Projects */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="text-stellar-blue font-display tracking-widest uppercase text-sm font-semibold mb-4 block">Portfolio</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Featured Installations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-display text-xl font-bold mb-1 group-hover:text-stellar-blue transition-colors">{project.title}</h3>
                    <p className="text-stellar-gray text-sm font-light">{project.location}</p>
                  </div>
                  <ChevronRight size={20} className="text-stellar-gray group-hover:text-stellar-blue group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Technology Section */}
      <section className="py-32 bg-black/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-stellar-blue font-display tracking-widest uppercase text-sm font-semibold mb-4 block">Innovation</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Next-Gen Elevator Technology</h2>
              <p className="text-stellar-gray font-light leading-relaxed mb-12">
                We integrate cutting-edge technology to ensure maximum safety, energy efficiency, and a seamless ride experience. Our systems are designed for the smart buildings of tomorrow.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Settings, title: 'Gearless Motors', desc: 'Ultra-smooth, energy-efficient synchronous motors.' },
                  { icon: Cpu, title: 'Smart Monitoring', desc: 'IoT-enabled predictive maintenance systems.' },
                  { icon: ShieldCheck, title: 'Safety Protocols', desc: 'Multi-redundant electronic safety mechanisms.' },
                  { icon: HardHat, title: 'Eco-Drive', desc: 'Regenerative drives saving up to 30% energy.' },
                ].map((tech, i) => (
                  <div key={i} className="space-y-3">
                    <tech.icon size={24} className="text-stellar-blue" />
                    <h4 className="font-display font-bold">{tech.title}</h4>
                    <p className="text-sm text-stellar-gray font-light">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <img 
                src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800&auto=format&fit=crop" 
                alt="Technology" 
                className="w-full h-full object-cover rounded-full opacity-80"
              />
              {/* Abstract tech rings */}
              <div className="absolute inset-0 border border-stellar-blue/30 rounded-full scale-110 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-0 border border-white/10 rounded-full scale-125 animate-[spin_30s_linear_infinite_reverse]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. Final Call To Action */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop" 
            alt="Cityscape" 
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-stellar-blue/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-stellar-charcoal to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-7xl font-bold mb-8">Let's Elevate Your Building</h2>
            <p className="text-xl text-white/80 font-light mb-12 max-w-2xl mx-auto">
              Partner with Stellar Elevators for uncompromising quality, safety, and design.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-white text-stellar-charcoal font-display tracking-widest uppercase text-sm font-bold hover:bg-stellar-gray transition-colors duration-300">
              Request Free Site Survey
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
