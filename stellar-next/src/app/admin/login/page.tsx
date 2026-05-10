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
    <main className="min-h-screen bg-[#1A1A1A] flex items-center justify-center p-6 relative overflow-hidden">
      <Toaster position="top-center" />
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2E3192]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2E3192]/5 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md relative z-10"
      >
        <Link href="/" className="inline-flex items-center gap-2 text-[#C7C7C7]/40 hover:text-white transition-colors mb-12 text-xs font-display uppercase tracking-widest group">
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Website
        </Link>

        <div className="bg-black/40 backdrop-blur-2xl border border-white/5 p-10 md:p-12 shadow-2xl">
          <div className="mb-10 text-center">
            <div className="w-16 h-16 bg-[#2E3192] rounded-sm mx-auto mb-8 flex items-center justify-center transform rotate-45">
              <Lock size={24} className="text-white transform -rotate-45" />
            </div>
            <h1 className="font-display text-2xl font-bold tracking-widest uppercase mb-2">Admin Access</h1>
            <p className="text-[#C7C7C7]/40 text-xs uppercase tracking-[0.2em]">Stellar Elevators Terminal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] font-display uppercase tracking-[0.3em] text-[#C7C7C7]/40 font-bold">Credential Identity</label>
              <div className="relative">
                <Mail size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-[#2E3192]" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#2E3192] outline-none py-4 pl-8 text-white transition-all placeholder:text-white/5 uppercase text-xs tracking-widest" 
                  placeholder="ADMIN EMAIL"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-display uppercase tracking-[0.3em] text-[#C7C7C7]/40 font-bold">Secure Key</label>
              <div className="relative">
                <Lock size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-[#2E3192]" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#2E3192] outline-none py-4 pl-8 text-white transition-all placeholder:text-white/5 uppercase text-xs tracking-widest" 
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

        <p className="mt-12 text-center text-[10px] text-[#C7C7C7]/20 uppercase tracking-[0.4em]">
          &copy; {new Date().getFullYear()} Stellar Systems &bull; Secure Protocol
        </p>
      </motion.div>
    </main>
  );
}
