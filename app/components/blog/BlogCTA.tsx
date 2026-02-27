'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function BlogCTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    
    // Simulate API call for newsletter subscription
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-[var(--bg-page)] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="relative overflow-hidden rounded-[24px] bg-[#0A0A1F] border border-[#1A56DB]/30 p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10"
        >
          {/* Subtle background effects for premium feel */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-[#1A56DB]/10 to-transparent blur-3xl rounded-r-[24px]" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-[#06B6D4]/10 to-transparent blur-3xl rounded-l-[24px]" />
          </div>

          {/* Left Text Content */}
          <div className="relative z-10 flex flex-col max-w-md gap-3 text-center md:text-left">
            <h2 className="font-[var(--font-display)] font-bold text-[clamp(1.75rem,3vw,2.25rem)] text-white tracking-tight leading-tight">
              Join the <span className="text-[#06B6D4]">Digital Growth</span> Newsletter
            </h2>
            <p className="font-[var(--font-body)] text-[15px] sm:text-base text-[#94A3B8] leading-relaxed">
              Get actionable strategies, deep-dives, and technical breakdowns delivered to your inbox every single week. No spam, ever.
            </p>
          </div>

          {/* Right Form Content */}
          <div className="relative z-10 w-full max-w-md md:max-w-[420px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-white/5 border border-white/10 rounded-xl p-1.5 focus-within:border-[#06B6D4]/50 focus-within:bg-white/10 transition-colors duration-300">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com" 
                  className="flex-1 bg-transparent px-4 py-3 sm:py-2 text-sm text-white placeholder:text-white/40 font-[var(--font-body)] outline-none" 
                  required
                  disabled={status === 'loading' || status === 'success'}
                />
                <button 
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="btn-electric w-full sm:w-auto mt-2 sm:mt-0 px-6 py-3 sm:py-2.5 rounded-lg text-sm font-[var(--font-display)] font-semibold whitespace-nowrap transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed" 
                >
                  {status === 'loading' ? 'Joining...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
                </button>
              </div>
              <p className="text-xs text-center md:text-left font-[var(--font-body)] pl-2 min-h-[16px]">
                {status === 'success' ? (
                  <span className="text-green-400">Thanks for subscribing! Check your inbox.</span>
                ) : (
                  <span className="text-white/40">Join 5,000+ founders and marketers.</span>
                )}
              </p>
            </form>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
