"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Lock, Mail, Loader2, ChevronLeft } from 'lucide-react';
import { createClient } from '@/utils/supabase/client';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      toast.success('Authentication successful. Redirecting to dashboard...');
      router.push('/admin/dashboard');
      router.refresh();
    } catch (error: any) {
      toast.error(error.message || 'Failed to login');
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-stellar-light-bg flex items-center justify-center p-6 relative overflow-hidden text-stellar-charcoal">
      <Toaster position="top-center" />
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2E3192]/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2E3192]/3 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md relative z-10"
      >
        <Link href="/" className="inline-flex items-center gap-2 text-stellar-gray hover:text-[#2E3192] transition-colors mb-12 text-xs font-display uppercase tracking-widest group">
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Website
        </Link>

        <div className="bg-white border border-black/5 p-10 md:p-12 shadow-2xl">
          <div className="mb-10 text-center">
            <div className="w-16 h-16 bg-[#2E3192] rounded-sm mx-auto mb-8 flex items-center justify-center transform rotate-45 animate-[spin_4s_ease-in-out_infinite_alternate]">
              <Lock size={24} className="text-white transform -rotate-45" />
            </div>
            <h1 className="font-display text-2xl font-bold tracking-widest uppercase mb-2 text-stellar-charcoal">Admin Access</h1>
            <p className="text-stellar-gray text-xs uppercase tracking-[0.2em]">Stellar Elevators Terminal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] font-display uppercase tracking-[0.3em] text-stellar-gray font-bold">Credential Identity</label>
              <div className="relative">
                <Mail size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-[#2E3192]" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-black/10 focus:border-[#2E3192] outline-none py-4 pl-8 text-stellar-charcoal transition-all placeholder:text-black/20 uppercase text-xs tracking-widest" 
                  placeholder="ADMIN EMAIL"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-display uppercase tracking-[0.3em] text-stellar-gray font-bold">Secure Key</label>
              <div className="relative">
                <Lock size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-[#2E3192]" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-b border-black/10 focus:border-[#2E3192] outline-none py-4 pl-8 text-stellar-charcoal transition-all placeholder:text-black/20 uppercase text-xs tracking-widest" 
                  placeholder="PASSWORD"
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="group relative w-full px-10 py-6 bg-[#2E3192] text-white font-display tracking-[0.4em] uppercase text-xs font-bold overflow-hidden flex items-center justify-center gap-4 transition-all duration-500 disabled:opacity-50"
            >
              <span className="relative z-10">{isLoading ? 'Authenticating...' : 'Establish Connection'}</span>
              {isLoading ? (
                <Loader2 size={18} className="animate-spin relative z-10" />
              ) : (
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
              )}
            </button>
          </form>
        </div>

        <p className="mt-12 text-center text-[10px] text-stellar-gray/40 uppercase tracking-[0.4em]">
          &copy; {new Date().getFullYear()} Stellar Systems &bull; Secure Protocol
        </p>
      </motion.div>
    </main>
  );
}
