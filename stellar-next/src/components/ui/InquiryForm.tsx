"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { inquirySchema, type InquiryInput } from '@/types/inquiry';
import toast, { Toaster } from 'react-hot-toast';

export default function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryInput>({
    resolver: zodResolver(inquirySchema),
  });

  const onSubmit = async (data: InquiryInput) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setIsSuccess(true);
      toast.success('Your brief has been received. Our team will contact you shortly.', {
        duration: 5000,
        style: {
          background: '#1A1A1A',
          color: '#fff',
          border: '1px solid #2E3192',
          fontFamily: 'var(--font-display)',
          fontSize: '14px',
          letterSpacing: '0.1em',
        },
      });
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      toast.error('Something went wrong. Please try again or call us directly.', {
        style: {
          background: '#1A1A1A',
          color: '#fff',
          border: '1px solid #ff4b4b',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <Toaster position="bottom-center" />
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-3">
            <label className="text-[10px] font-display uppercase tracking-[0.3em] text-[#C7C7C7]/40 font-bold flex justify-between">
              Name {errors.name && <span className="text-red-500 lowercase tracking-normal">({errors.name.message})</span>}
            </label>
            <input 
              {...register('name')}
              type="text" 
              className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500/50' : 'border-white/10'} focus:border-[#2E3192] outline-none py-4 text-white transition-all placeholder:text-white/10 uppercase text-sm`} 
              placeholder="FULL NAME" 
            />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-display uppercase tracking-[0.3em] text-[#C7C7C7]/40 font-bold flex justify-between">
              Phone {errors.phone && <span className="text-red-500 lowercase tracking-normal">({errors.phone.message})</span>}
            </label>
            <input 
              {...register('phone')}
              type="tel" 
              className={`w-full bg-transparent border-b ${errors.phone ? 'border-red-500/50' : 'border-white/10'} focus:border-[#2E3192] outline-none py-4 text-white transition-all placeholder:text-white/10 uppercase text-sm`} 
              placeholder="+91 00000 00000" 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-3">
            <label className="text-[10px] font-display uppercase tracking-[0.3em] text-[#C7C7C7]/40 font-bold flex justify-between">
              City {errors.city && <span className="text-red-500 lowercase tracking-normal">({errors.city.message})</span>}
            </label>
            <input 
              {...register('city')}
              type="text" 
              className={`w-full bg-transparent border-b ${errors.city ? 'border-red-500/50' : 'border-white/10'} focus:border-[#2E3192] outline-none py-4 text-white transition-all placeholder:text-white/10 uppercase text-sm`} 
              placeholder="YOUR CITY" 
            />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-display uppercase tracking-[0.3em] text-[#C7C7C7]/40 font-bold flex justify-between">
              Category {errors.project_type && <span className="text-red-500 lowercase tracking-normal">({errors.project_type.message})</span>}
            </label>
            <select 
              {...register('project_type')}
              className={`w-full bg-transparent border-b ${errors.project_type ? 'border-red-500/50' : 'border-white/10'} focus:border-[#2E3192] outline-none py-4 text-white transition-all appearance-none cursor-pointer uppercase tracking-[0.2em] text-[10px] font-bold`}
            >
              <option value="" className="bg-[#1A1A1A] text-[#C7C7C7]/40">SELECT CATEGORY</option>
              <option value="new" className="bg-[#1A1A1A] text-white">NEW INSTALLATION</option>
              <option value="maintenance" className="bg-[#1A1A1A] text-white">MAINTENANCE / AMC</option>
              <option value="modernization" className="bg-[#1A1A1A] text-white">MODERNIZATION</option>
              <option value="other" className="bg-[#1A1A1A] text-white">OTHER INQUIRY</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-3">
          <label className="text-[10px] font-display uppercase tracking-[0.3em] text-[#C7C7C7]/40 font-bold">Message (Optional)</label>
          <textarea 
            {...register('message')}
            rows={4} 
            className="w-full bg-transparent border-b border-white/10 focus:border-[#2E3192] outline-none py-4 text-white transition-all resize-none placeholder:text-white/10 uppercase text-sm" 
            placeholder="BRIEF DESCRIPTION..."
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          disabled={isSubmitting || isSuccess}
          className="group relative w-full px-10 py-6 bg-[#2E3192] text-white font-display tracking-[0.4em] uppercase text-xs font-bold overflow-hidden flex items-center justify-center gap-4 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl"
        >
          <span className="relative z-10">
            {isSubmitting ? 'Transmitting...' : isSuccess ? 'Success' : 'Send Brief'}
          </span>
          {isSubmitting ? (
            <Loader2 size={18} className="animate-spin relative z-10" />
          ) : isSuccess ? (
            <CheckCircle size={18} className="relative z-10 text-green-400" />
          ) : (
            <Send size={18} className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
          )}
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
        </button>
      </form>
    </div>
  );
}
