"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LogOut, 
  Search, 
  Filter, 
  Trash2, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  MoreVertical,
  ChevronDown,
  Loader2,
  ExternalLink
} from 'lucide-react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

interface Inquiry {
  id: string;
  name: string;
  phone: string;
  city: string;
  project_type: string;
  message: string;
  created_at: string;
  status: 'new' | 'contacted' | 'closed';
}

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isDeletingId, setIsDeletingId] = useState<string | null>(null);
  
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const response = await fetch('/api/admin/inquiries');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setInquiries(data);
    } catch (error) {
      toast.error('Connection error: Failed to fetch leads');
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      // Optimistic Update
      setInquiries(prev => prev.map(inv => inv.id === id ? { ...inv, status: newStatus as any } : inv));
      
      const response = await fetch(`/api/admin/inquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) throw new Error('Update failed');
      toast.success(`Inquiry status: ${newStatus}`);
    } catch (error) {
      toast.error('Failed to update status');
      fetchInquiries(); // Revert on failure
    }
  };

  const handleDelete = async (id: string) => {
    setIsDeletingId(id);
    try {
      const response = await fetch(`/api/admin/inquiries/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Delete failed');
      
      setInquiries(prev => prev.filter(inv => inv.id !== id));
      toast.success('Lead purged from system');
    } catch (error) {
      toast.error('Failed to delete inquiry');
    } finally {
      setIsDeletingId(null);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
    router.refresh();
  };

  const filteredInquiries = inquiries.filter(inv => {
    const matchesSearch = 
      inv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.phone.includes(searchTerm) ||
      inv.city.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || inv.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'contacted': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      case 'closed': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      <Toaster position="top-right" />
      
      {/* Sidebar / Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#2E3192] rounded-sm flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white rounded-sm" />
            </div>
            <div>
              <h1 className="font-display font-bold text-lg tracking-widest uppercase">Terminal</h1>
              <p className="text-[10px] text-[#C7C7C7]/40 uppercase tracking-[0.2em]">Lead Management System</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-3 pr-6 border-r border-white/10">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-[#C7C7C7]/60">System Online</span>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 text-[10px] md:text-xs font-display uppercase tracking-widest text-[#C7C7C7] hover:text-white transition-colors group"
            >
              <span className="hidden sm:inline">Logout</span> <LogOut size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#C7C7C7]/20" size={18} />
            <input 
              type="text" 
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-black/20 border border-white/5 focus:border-[#2E3192]/50 outline-none py-4 pl-16 pr-6 text-sm tracking-wide transition-all placeholder:text-[#C7C7C7]/20"
            />
          </div>
          
          <div className="flex gap-4">
            <div className="relative flex-grow md:min-w-[200px]">
              <Filter className="absolute left-6 top-1/2 -translate-y-1/2 text-[#C7C7C7]/20" size={18} />
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full bg-black/20 border border-white/5 focus:border-[#2E3192]/50 outline-none py-4 pl-16 pr-10 text-xs font-display uppercase tracking-widest appearance-none cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="contacted">Progress</option>
                <option value="closed">Closed</option>
              </select>
              <ChevronDown size={14} className="absolute right-6 top-1/2 -translate-y-1/2 text-[#C7C7C7]/20 pointer-events-none" />
            </div>
            
            <button 
              onClick={fetchInquiries}
              className="px-6 md:px-8 bg-white/5 border border-white/5 hover:bg-white/10 transition-colors flex items-center justify-center"
              title="Refresh Data"
            >
              <Clock size={18} className={isLoading ? 'animate-spin' : ''} />
            </button>
          </div>
        </div>

        {/* Table / Grid */}
        <div className="bg-black/20 border border-white/5 relative overflow-hidden">
          {isLoading ? (
            <div className="h-96 flex flex-col items-center justify-center gap-4">
              <Loader2 size={40} className="animate-spin text-[#2E3192]" />
              <p className="text-xs uppercase tracking-[0.4em] text-[#C7C7C7]/40">Scanning Database...</p>
            </div>
          ) : filteredInquiries.length === 0 ? (
            <div className="h-96 flex flex-col items-center justify-center text-center px-6">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <Search size={24} className="text-[#C7C7C7]/20" />
              </div>
              <h3 className="font-display text-xl font-bold uppercase tracking-widest mb-2">No Records Found</h3>
              <p className="text-[#C7C7C7]/40 text-sm font-light">Adjust your search parameters or check back later.</p>
            </div>
          ) : (
            <>
              {/* Mobile View: Cards */}
              <div className="block md:hidden space-y-4 p-4">
                <AnimatePresence mode="popLayout">
                  {filteredInquiries.map((inv) => (
                    <motion.div
                      key={inv.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="p-6 bg-white/[0.02] border border-white/5 space-y-6"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-display font-bold text-lg mb-1">{inv.name}</h3>
                          <div className="flex flex-col gap-2">
                            <a href={`tel:${inv.phone}`} className="text-xs text-[#C7C7C7]/40 flex items-center gap-2">
                              <Phone size={12} /> {inv.phone}
                            </a>
                            <div className="text-[10px] text-[#C7C7C7]/40 uppercase tracking-widest flex items-center gap-2">
                              <MapPin size={10} /> {inv.city} &bull; {inv.project_type}
                            </div>
                          </div>
                        </div>
                        <div className="text-[10px] text-[#C7C7C7]/20 font-bold uppercase tracking-widest">
                          {new Date(inv.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/5">
                        <select 
                          value={inv.status}
                          onChange={(e) => handleStatusUpdate(inv.id, e.target.value)}
                          className={`text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 border rounded-sm outline-none cursor-pointer flex-grow ${getStatusColor(inv.status)}`}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="closed">Closed</option>
                        </select>
                        
                        <div className="flex gap-2">
                          <button 
                            onClick={() => toast((t) => (
                              <div className="p-4">
                                <p className="mb-4 text-sm font-display uppercase tracking-widest font-bold">Message Brief:</p>
                                <p className="text-sm font-light text-[#C7C7C7]">{inv.message || 'No additional details provided.'}</p>
                              </div>
                            ), { duration: 6000 })}
                            className="w-10 h-10 rounded-sm border border-white/5 flex items-center justify-center bg-white/5"
                          >
                            <ExternalLink size={16} className="text-[#C7C7C7]/40" />
                          </button>
                          <button 
                            onClick={() => confirm('Purge lead?') && handleDelete(inv.id)}
                            disabled={isDeletingId === inv.id}
                            className="w-10 h-10 rounded-sm border border-white/5 flex items-center justify-center text-red-500/40"
                          >
                            {isDeletingId === inv.id ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Desktop View: Table */}
              <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 bg-white/[0.02]">
                    <th className="py-6 px-8 text-[10px] uppercase tracking-[0.2em] font-bold text-[#C7C7C7]/40">Client Info</th>
                    <th className="py-6 px-8 text-[10px] uppercase tracking-[0.2em] font-bold text-[#C7C7C7]/40">Project / City</th>
                    <th className="py-6 px-8 text-[10px] uppercase tracking-[0.2em] font-bold text-[#C7C7C7]/40">Status</th>
                    <th className="py-6 px-8 text-[10px] uppercase tracking-[0.2em] font-bold text-[#C7C7C7]/40">Received</th>
                    <th className="py-6 px-8 text-[10px] uppercase tracking-[0.2em] font-bold text-[#C7C7C7]/40 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <AnimatePresence mode="popLayout">
                    {filteredInquiries.map((inv) => (
                      <motion.tr 
                        key={inv.id}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="group hover:bg-white/[0.01] transition-colors"
                      >
                        <td className="py-8 px-8">
                          <div className="flex flex-col gap-1">
                            <span className="font-display font-bold text-lg">{inv.name}</span>
                            <div className="flex items-center gap-4 mt-1">
                              <a href={`tel:${inv.phone}`} className="text-xs text-[#C7C7C7]/40 hover:text-[#2E3192] flex items-center gap-2 transition-colors">
                                <Phone size={12} /> {inv.phone}
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="py-8 px-8">
                          <div className="flex flex-col gap-1">
                            <span className="text-xs uppercase tracking-widest font-bold text-white/80">{inv.project_type}</span>
                            <div className="flex items-center gap-2 text-[10px] text-[#C7C7C7]/40 tracking-wider">
                              <MapPin size={10} /> {inv.city}
                            </div>
                          </div>
                        </td>
                        <td className="py-8 px-8">
                          <select 
                            value={inv.status}
                            onChange={(e) => handleStatusUpdate(inv.id, e.target.value)}
                            className={`text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 border rounded-sm outline-none cursor-pointer transition-all ${getStatusColor(inv.status)}`}
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="closed">Closed</option>
                          </select>
                        </td>
                        <td className="py-8 px-8">
                          <div className="text-[10px] text-[#C7C7C7]/40 tracking-widest uppercase">
                            {new Date(inv.created_at).toLocaleDateString('en-IN', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric'
                            })}
                          </div>
                        </td>
                        <td className="py-8 px-8 text-right">
                          <div className="flex items-center justify-end gap-3">
                            <button 
                              onClick={() => toast((t) => (
                                <div className="p-4">
                                  <p className="mb-4 text-sm font-display uppercase tracking-widest font-bold">Message Brief:</p>
                                  <p className="text-sm font-light text-[#C7C7C7]">{inv.message || 'No additional details provided.'}</p>
                                </div>
                              ), { duration: 6000 })}
                              className="w-10 h-10 rounded-sm border border-white/5 flex items-center justify-center hover:bg-white/5 transition-colors"
                              title="View Brief"
                            >
                              <ExternalLink size={16} className="text-[#C7C7C7]/40" />
                            </button>
                            <button 
                              onClick={() => {
                                if (confirm('Purge this lead from system?')) {
                                  handleDelete(inv.id);
                                }
                              }}
                              disabled={isDeletingId === inv.id}
                              className="w-10 h-10 rounded-sm border border-white/5 flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/30 transition-colors text-red-500/40 hover:text-red-500"
                              title="Delete Record"
                            >
                              {isDeletingId === inv.id ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
