"use client";

import { motion } from 'motion/react';
import Image from 'next/image';
import { 
  ArrowRight, 
  ShieldCheck, 
  Settings, 
  Cpu, 
  ChevronRight, 
  Building2, 
  Factory, 
  HardHat, 
  CheckCircle2, 
  Globe, 
  MapPin, 
  Phone 
} from 'lucide-react';
import Link from 'next/link';

const products = [
  { title: 'Villa Elevators', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop', desc: 'Luxurious, space-saving designs tailored for premium private residences in Telangana.' },
  { title: 'Passenger Elevators', image: 'https://images.unsplash.com/photo-1570126646281-5ec88111777f?q=80&w=800&auto=format&fit=crop', desc: 'Smooth, silent, and safe vertical mobility for residential complexes across South India.' },
  { title: 'Hotel Elevators', image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=800&auto=format&fit=crop', desc: 'Stunning visual appeal combined with reliable performance for Hyderabad\'s luxury hospitality.' },
  { title: 'Freight Elevators', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop', desc: 'Heavy-duty, robust engineering for industrial and commercial goods transport.' },
];

const projects = [
  { title: 'Skyline Tower', location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop' },
  { title: 'Tech Park Alpha', location: 'Bengaluru', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop' },
  { title: 'The Grand Residence', location: 'Mumbai', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop' },
];

const reasons = [
  { title: 'Local Manufacturing', desc: 'Our state-of-the-art facility in Hyderabad ensures rapid production and total quality control.' },
  { title: 'Custom Engineering', desc: 'We engineer solutions tailored to your specific architectural and traffic requirements.' },
  { title: 'Uncompromising Safety', desc: 'Exceeding national safety standards to ensure complete passenger peace of mind.' },
  { title: '24/7 Responsive Service', desc: 'Our dedicated maintenance teams are always on standby, minimizing building downtime.' },
];

export default function Home() {
  return (
    <main className="w-full bg-stellar-light-bg text-stellar-charcoal overflow-hidden">
      
      {/* 1. Cinematic Hero */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1920&auto=format&fit=crop" 
            alt="Luxury Elevators Hyderabad - Cinematic Architecture" 
            fill
            priority
            className="object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
          {/* Cinematic Gradient Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-stellar-light-bg to-transparent z-10" />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-6xl text-center"
          >
            <h1 className="font-display text-4xl md:text-[7rem] font-bold leading-[1.1] md:leading-[0.95] tracking-tighter mb-10 md:mb-12 text-white">
              Where Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#C7C7C7]">Meets Elegance</span>
            </h1>
            <p className="text-base md:text-xl text-white/60 font-light max-w-2xl mx-auto mb-14 md:mb-16 leading-relaxed tracking-wide">
              The premier choice for luxury vertical mobility. We blend industrial precision with architectural elegance to redefine vertical transit across South India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link href="/contact" className="group relative px-12 py-6 bg-[#2E3192] text-white font-display tracking-[0.22em] uppercase text-[10px] font-bold overflow-hidden flex items-center justify-center gap-4 shadow-2xl transition-transform hover:scale-[1.02]">
                <span className="relative z-10">Request Consultation</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
              </Link>
              <Link href="/products" className="group px-12 py-6 border border-white/40 text-white font-display tracking-[0.22em] uppercase text-[10px] font-bold hover:bg-white hover:text-stellar-charcoal transition-all duration-500 flex items-center justify-center hover:border-white">
                Explore Collection
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Indicators */}
      <section className="relative z-30 border-y border-black/5 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8">
            {[
              { icon: Building2, label: 'Established', value: '2019' },
              { icon: Settings, label: 'Installations', value: '200+' },
              { icon: Factory, label: 'Manufacturing', value: 'Hyderabad' },
              { icon: Globe, label: 'Coverage', value: 'South India' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/5 flex items-center justify-center mb-4 md:mb-6 group-hover:border-[#2E3192]/50 transition-colors duration-500">
                  <stat.icon size={18} className="text-[#2E3192] opacity-80" />
                </div>
                <span className="font-display text-2xl md:text-4xl font-bold mb-1 md:mb-2 tracking-tighter text-stellar-charcoal">{stat.value}</span>
                <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-stellar-gray font-bold">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Smile Philosophy */}
      <section className="py-48 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-square overflow-hidden group shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop" 
                alt="Integrated Elevator Manufacturing Hyderabad" 
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-[#2E3192]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-1000" />
              <div className="absolute inset-0 border border-black/5 m-8 pointer-events-none" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[#2E3192] font-display tracking-[0.4em] uppercase text-xs font-bold mb-8 block">Our Ethos</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-10 leading-[1.1] text-stellar-charcoal">
                The Philosophy <br />
                of <span className="text-[#2E3192] italic">&quot;Smile&quot;</span>
              </h2>
              <div className="space-y-8 text-stellar-gray font-light text-xl leading-relaxed">
                <p>
                  Founded in 2019 by Mr. Shabbir Mohammed, Stellar Elevators was built on a simple yet profound promise: delivering reliable engineering with human-centric service across Telangana.
                </p>
                <p>
                  We believe that true luxury is found in reliability. From meticulous design to lifelong maintenance, we control the entire lifecycle of vertical mobility to ensure every ride in our luxury elevators is a testament to our quality.
                </p>
              </div>
              <Link href="/about" className="inline-flex items-center gap-4 mt-16 text-xs font-display uppercase tracking-[0.3em] font-bold text-stellar-charcoal hover:text-[#2E3192] transition-colors group">
                Discover Our Story
                <div className="w-10 h-[1px] bg-black/20 group-hover:w-16 group-hover:bg-[#2E3192] transition-all duration-500" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Product Showcase */}
      <section className="py-48 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-24">
            <span className="text-[#2E3192] font-display tracking-[0.4em] uppercase text-xs font-bold mb-6 block">The Collection</span>
            <h2 className="font-display text-4xl md:text-7xl font-bold mb-8 text-stellar-charcoal">Elevated Craftsmanship</h2>
            <p className="text-stellar-gray font-light max-w-2xl mx-auto">Selected categories of villa elevators and passenger lifts engineered for South India&apos;s most demanding architectural spaces.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group relative aspect-[16/10] overflow-hidden bg-white cursor-pointer shadow-2xl animate-[fadeIn_1s_ease-out]"
              >
                <Image 
                  src={product.image} 
                  alt={`${product.title} Installation - Stellar Elevators`} 
                  fill
                  className="object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-12 flex flex-col justify-end transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                  <h3 className="font-display text-3xl font-bold mb-4 text-white">{product.title}</h3>
                  <p className="text-[#C7C7C7] text-base font-light opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 max-w-md leading-relaxed">
                    {product.desc}
                  </p>
                  <div className="mt-8 flex items-center gap-3 text-[#2E3192] text-xs font-display uppercase tracking-[0.2em] font-bold opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                    View Specifications <ChevronRight size={14} />
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2E3192]/50 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-24 text-center">
            <Link href="/products" className="inline-flex items-center gap-6 px-12 py-6 border border-black/10 text-xs font-display uppercase tracking-[0.4em] font-bold text-stellar-charcoal hover:bg-stellar-charcoal hover:text-white transition-all duration-500">
              View Full Collection
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why Stellar */}
      <section className="py-24 md:py-48 bg-stellar-light-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-[#2E3192] font-display tracking-[0.4em] uppercase text-xs font-bold mb-8 block">The Stellar Advantage</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-10 leading-[1.1] text-stellar-charcoal">
                Elevating Standards <br />
                <span className="text-[#2E3192] italic">Every Day</span>
              </h2>
              <p className="text-stellar-gray font-light text-xl leading-relaxed mb-16">
                Choosing an elevator partner in Hyderabad is a structural commitment. We build relationships as robust as our engineering.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                {reasons.map((reason, index) => (
                  <motion.div 
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex flex-col gap-4"
                  >
                    <CheckCircle2 size={24} className="text-[#2E3192]" />
                    <div>
                      <h4 className="font-display font-bold text-lg mb-2 text-stellar-charcoal">{reason.title}</h4>
                      <p className="text-stellar-gray text-sm font-light leading-relaxed">{reason.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-[4/5] overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
                alt="Premium Elevator Company South India" 
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 border border-black/5 m-8 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Manufacturing Excellence */}
      <section className="relative py-64 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1565439390165-c32a7647228a?q=80&w=1920&auto=format&fit=crop" 
            alt="Elevator Manufacturing Facility Telangana" 
            fill
            className="object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stellar-light-bg via-stellar-light-bg/90 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <span className="text-[#2E3192] font-display tracking-[0.4em] uppercase text-xs font-bold mb-8 block">Industrial Luxury</span>
            <h2 className="font-display text-5xl md:text-8xl font-bold mb-10 leading-[1] text-stellar-charcoal">
              Precision Forged in <br /> Hyderabad
            </h2>
            <p className="text-xl text-stellar-gray font-light mb-16 leading-relaxed max-w-2xl">
              Our Hyderabad manufacturing facility is a testament to engineering excellence. Equipped with advanced CNC machinery, we ensure every villa elevator meets global safety standards.
            </p>
            
            <div className="flex flex-wrap gap-x-12 gap-y-6 mb-16">
              {[
                'CNC Machining',
                'Quality Testing',
                'In-house R&D',
                'Safety Redundancy'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#2E3192] rounded-full" />
                  <span className="text-xs font-display uppercase tracking-widest font-bold text-stellar-charcoal">{item}</span>
                </div>
              ))}
            </div>
            
            <Link href="/about" className="group inline-flex items-center gap-6 text-xs font-display uppercase tracking-[0.4em] font-bold text-stellar-charcoal">
              <span className="w-16 h-[1px] bg-black/20 group-hover:w-24 group-hover:bg-[#2E3192] transition-all duration-500" />
              Explore Facility
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 7. Featured Projects */}
      <section className="py-48 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#2E3192] font-display tracking-[0.4em] uppercase text-xs font-bold mb-6 block">Portfolio</span>
              <h2 className="font-display text-4xl md:text-7xl font-bold text-stellar-charcoal">Landmarks in Motion</h2>
            </motion.div>
            <Link href="/projects" className="text-xs font-display uppercase tracking-[0.4em] font-bold text-stellar-charcoal hover:text-[#2E3192] transition-colors flex items-center gap-3 group shrink-0 pb-2 border-b border-black/10 hover:border-[#2E3192]">
              View All Projects <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
                    alt={`${project.title} - Best Lift Installation ${project.location}`} 
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-1000" />
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-2 text-stellar-charcoal group-hover:text-[#2E3192] transition-colors">{project.title}</h3>
                    <div className="flex items-center gap-2 text-stellar-gray text-sm font-light">
                      <MapPin size={14} className="text-[#2E3192]" />
                      {project.location}
                    </div>
                  </div>
                  <ChevronRight size={24} className="text-black/20 group-hover:text-[#2E3192] group-hover:translate-x-2 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Technology & Safety */}
      <section className="py-48 bg-stellar-light-bg border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-[#2E3192] font-display tracking-[0.4em] uppercase text-xs font-bold mb-8 block">Innovation</span>
              <h2 className="font-display text-4xl md:text-7xl font-bold mb-10 leading-[1.1] text-stellar-charcoal">Smart Vertical <br /> Intelligence</h2>
              <p className="text-stellar-gray font-light text-xl leading-relaxed mb-16">
                We integrate cutting-edge IoT and gearless technology to ensure maximum safety and energy efficiency for buildings across South India.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                {[
                  { icon: Settings, title: 'Gearless Motors', desc: 'Energy-efficient synchronous drive systems.' },
                  { icon: Cpu, title: 'IoT Monitoring', desc: 'Predictive maintenance via real-time data.' },
                  { icon: ShieldCheck, title: 'Safety Protocols', desc: 'Multi-redundant electronic mechanisms.' },
                  { icon: HardHat, title: 'Eco-Drive', desc: 'Regenerative braking power recovery.' },
                ].map((tech, i) => (
                  <div key={i} className="group">
                    <div className="w-12 h-12 rounded-sm border border-black/5 bg-white shadow-sm flex items-center justify-center mb-6 group-hover:border-[#2E3192]/50 transition-colors">
                      <tech.icon size={20} className="text-[#2E3192]" />
                    </div>
                    <h4 className="font-display font-bold text-lg mb-2 text-stellar-charcoal">{tech.title}</h4>
                    <p className="text-sm text-stellar-gray font-light leading-relaxed">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="relative aspect-square"
            >
              <Image 
                src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800&auto=format&fit=crop" 
                alt="Advanced Smart Elevator Technology" 
                fill
                className="object-cover rounded-full opacity-60 grayscale scale-90"
              />
              <div className="absolute inset-0 border border-[#2E3192]/20 rounded-full scale-100 animate-[pulse_4s_ease-in-out_infinite]" />
              <div className="absolute inset-0 border border-black/5 rounded-full scale-110 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-0 border border-[#2E3192]/10 rounded-full scale-125 animate-[spin_45s_linear_infinite_reverse]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. Service Coverage Area */}
      <section className="py-24 md:py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="text-[#2E3192] font-display tracking-[0.4em] uppercase text-xs font-bold mb-6 block">Regional Presence</span>
            <h2 className="font-display text-4xl md:text-7xl font-bold mb-8 text-stellar-charcoal">Serving South India</h2>
            <p className="text-stellar-gray font-light max-w-2xl mx-auto">Providing immediate service response for luxury elevators across key urban corridors.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {['Hyderabad', 'Bengaluru', 'Chennai', 'Vijayawada'].map((city, i) => (
              <motion.div 
                key={city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <h4 className="font-display text-2xl font-bold mb-4 text-stellar-charcoal group-hover:text-[#2E3192] transition-colors">{city}</h4>
                <div className="w-8 h-[1px] bg-black/10 mx-auto group-hover:w-16 group-hover:bg-[#2E3192] transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final Call To Action */}
      <section className="relative py-64 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop" 
            alt="Stellar Elevators Hyderabad Contact" 
            fill
            className="object-cover object-center opacity-30 scale-110"
          />
          <div className="absolute inset-0 bg-[#2E3192]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-stellar-light-bg to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-display text-5xl md:text-[7rem] font-bold mb-10 leading-[0.95] tracking-tighter text-white">Let&apos;s Elevate <br /> Your Building</h2>
            <p className="text-lg md:text-2xl text-white/60 font-light mb-16 md:mb-24 max-w-2xl mx-auto leading-relaxed tracking-wide">
              Partner with Hyderabad&apos;s best elevator company for uncompromising quality, safety, and architectural elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-16 py-8 bg-white text-stellar-charcoal font-display tracking-[0.22em] uppercase text-[10px] font-bold hover:bg-[#C7C7C7] transition-all duration-500 shadow-2xl">
                Request Site Survey
              </Link>
              <a href="tel:+919490944220" className="flex items-center gap-4 text-white/60 hover:text-white transition-colors font-display text-[10px] tracking-[0.22em] uppercase font-bold">
                <Phone size={18} className="text-[#2E3192]" /> +91 94909 44220
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
