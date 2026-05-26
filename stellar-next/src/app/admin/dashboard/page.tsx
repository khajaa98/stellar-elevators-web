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
      case 'new': return 'text-blue-700 bg-blue-50 border-blue-200';
      case 'contacted': return 'text-amber-700 bg-amber-50 border-amber-200';
      case 'closed': return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      default: return 'text-gray-700 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F4F6] text-stellar-charcoal">
      <Toaster position="top-right" />
      
      {/* Sidebar / Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-black/5 py-4 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#2E3192] rounded-sm flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white rounded-sm" />
            </div>
            <div>
              <h1 className="font-display font-bold text-lg tracking-widest uppercase text-stellar-charcoal">Terminal</h1>
              <p className="text-[10px] text-stellar-gray uppercase tracking-[0.2em]">Lead Management System</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-3 pr-6 border-r border-black/10">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-stellar-gray">System Online</span>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 text-[10px] md:text-xs font-display uppercase tracking-widest text-stellar-gray hover:text-[#2E3192] transition-colors group"
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
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-black/30" size={18} />
            <input 
              type="text" 
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-black/10 focus:border-[#2E3192] outline-none py-4 pl-16 pr-6 text-sm tracking-wide text-stellar-charcoal transition-all placeholder:text-black/30 shadow-sm"
            />
          </div>
          
          <div className="flex gap-4">
            <div className="relative flex-grow md:min-w-[200px]">
              <Filter className="absolute left-6 top-1/2 -translate-y-1/2 text-black/30" size={18} />
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full bg-white border border-black/10 focus:border-[#2E3192] outline-none py-4 pl-16 pr-10 text-xs font-display uppercase tracking-widest appearance-none cursor-pointer text-stellar-charcoal shadow-sm"
              >
                <option value="all" className="bg-white text-stellar-charcoal">All Status</option>
                <option value="new" className="bg-white text-stellar-charcoal">New</option>
                <option value="contacted" className="bg-white text-stellar-charcoal">Progress</option>
                <option value="closed" className="bg-white text-stellar-charcoal">Closed</option>
              </select>
              <ChevronDown size={14} className="absolute right-6 top-1/2 -translate-y-1/2 text-black/30 pointer-events-none" />
            </div>
            
            <button 
              onClick={fetchInquiries}
              className="px-6 md:px-8 bg-white border border-black/10 text-stellar-charcoal hover:bg-neutral-50 transition-colors flex items-center justify-center shadow-sm"
              title="Refresh Data"
            >
              <Clock size={18} className={isLoading ? 'animate-spin' : ''} />
            </button>
          </div>
        </div>

        {/* Table / Grid */}
        <div className="bg-white border border-black/5 relative overflow-hidden shadow-md">
          {isLoading ? (
            <div className="h-96 flex flex-col items-center justify-center gap-4">
              <Loader2 size={40} className="animate-spin text-[#2E3192]" />
              <p className="text-xs uppercase tracking-[0.4em] text-stellar-gray">Scanning Database...</p>
            </div>
          ) : filteredInquiries.length === 0 ? (
            <div className="h-96 flex flex-col items-center justify-center text-center px-6">
              <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mb-6">
                <Search size={24} className="text-black/20" />
              </div>
              <h3 className="font-display text-xl font-bold uppercase tracking-widest mb-2">No Records Found</h3>
              <p className="text-stellar-gray text-sm font-light">Adjust your search parameters or check back later.</p>
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
                      className="p-6 bg-white border-b border-black/5 space-y-6"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-display font-bold text-lg mb-1 text-stellar-charcoal">{inv.name}</h3>
                          <div className="flex flex-col gap-2">
                            <a href={`tel:${inv.phone}`} className="text-xs text-stellar-gray hover:text-[#2E3192] flex items-center gap-2 transition-colors">
                              <Phone size={12} /> {inv.phone}
                            </a>
                            <div className="text-[10px] text-stellar-gray uppercase tracking-widest flex items-center gap-2">
                              <MapPin size={10} /> {inv.city} &bull; {inv.project_type}
                            </div>
                          </div>
                        </div>
                        <div className="text-[10px] text-stellar-gray/65 font-bold uppercase tracking-widest">
                          {new Date(inv.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-4 pt-4 border-t border-black/5">
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
                              <div className="p-4 bg-white text-stellar-charcoal">
                                <p className="mb-4 text-sm font-display uppercase tracking-widest font-bold">Message Brief:</p>
                                <p className="text-sm font-light text-stellar-charcoal">{inv.message || 'No additional details provided.'}</p>
                              </div>
                            ), { duration: 6000 })}
                            className="w-10 h-10 rounded-sm border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors"
                          >
                            <ExternalLink size={16} className="text-stellar-gray" />
                          </button>
                          <button 
                            onClick={() => confirm('Purge lead?') && handleDelete(inv.id)}
                            disabled={isDeletingId === inv.id}
                            className="w-10 h-10 rounded-sm border border-black/10 flex items-center justify-center text-red-500/60 hover:bg-red-50 transition-colors"
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
                  <tr className="border-b border-black/5 bg-neutral-50">
                    <th className="py-6 px-8 text-[10px] uppercase tracking-[0.2em] font-bold text-stellar-gray">Client Info</th>
                    <th className="py-6 px-8 text-[10px] uppercase tracking-[0.2em] font-bold text-stellar-gray">Project / City</th>
                    <th className="py-6 px-8 text-[10px] uppercase tracking-[0.2em] font-bold text-stellar-gray">Status</th>
                    <th className="py-6 px-8 text-[10px] uppercase tracking-[0.2em] font-bold text-stellar-gray">Received</th>
                    <th className="py-6 px-8 text-[10px] uppercase tracking-[0.2em] font-bold text-stellar-gray text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  <AnimatePresence mode="popLayout">
                    {filteredInquiries.map((inv) => (
                      <motion.tr 
                        key={inv.id}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="group hover:bg-neutral-50/50 transition-colors border-b border-black/5"
                      >
                        <td className="py-8 px-8">
                          <div className="flex flex-col gap-1">
                            <span className="font-display font-bold text-lg text-stellar-charcoal">{inv.name}</span>
                            <div className="flex items-center gap-4 mt-1">
                              <a href={`tel:${inv.phone}`} className="text-xs text-stellar-gray hover:text-[#2E3192] flex items-center gap-2 transition-colors">
                                <Phone size={12} /> {inv.phone}
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="py-8 px-8">
                          <div className="flex flex-col gap-1">
                            <span className="text-xs uppercase tracking-widest font-bold text-stellar-charcoal">{inv.project_type}</span>
                            <div className="flex items-center gap-2 text-[10px] text-stellar-gray tracking-wider">
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
                          <div className="text-[10px] text-stellar-gray tracking-widest uppercase">
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
                                <div className="p-4 bg-white text-stellar-charcoal">
                                  <p className="mb-4 text-sm font-display uppercase tracking-widest font-bold">Message Brief:</p>
                                  <p className="text-sm font-light text-stellar-charcoal">{inv.message || 'No additional details provided.'}</p>
                                </div>
                              ), { duration: 6000 })}
                              className="w-10 h-10 rounded-sm border border-black/10 flex items-center justify-center hover:bg-neutral-100 transition-colors"
                              title="View Brief"
                            >
                              <ExternalLink size={16} className="text-stellar-gray" />
                            </button>
                            <button 
                              onClick={() => {
                                if (confirm('Purge this lead from system?')) {
                                  handleDelete(inv.id);
                                }
                              }}
                              disabled={isDeletingId === inv.id}
                              className="w-10 h-10 rounded-sm border border-black/10 flex items-center justify-center hover:bg-red-50 transition-colors text-red-500/60 hover:text-red-500"
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
