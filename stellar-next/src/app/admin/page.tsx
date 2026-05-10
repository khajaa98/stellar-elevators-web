"use client";

import PageTransition from '@/components/animations/PageTransition';
import PageHeader from '@/components/layout/PageHeader';

export default function Admin() {
  return (
    <PageTransition>
      <PageHeader 
        title="Admin Dashboard" 
        subtitle="System Management" 
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
      />
      
      <section className="py-32 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-4xl font-bold mb-8">Admin Access Restricted</h2>
          <p className="text-[#C7C7C7] font-light text-lg mb-12">
            The administrative dashboard is currently under construction for Sprint 0. Future integration with Supabase will enable secure access to management tools.
          </p>
          <div className="inline-block p-12 border border-white/10 bg-black/20">
            <p className="text-sm uppercase tracking-widest text-[#C7C7C7]">Login Required</p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
