'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function PricingHero() {
  return (
    <section className="hero-section relative flex flex-col items-center justify-center min-h-[85vh] overflow-hidden bg-(--bg-page)">
      
      {/* ── Background: soft glows + curves ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[700px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(26,86,219,0.13)_0%,transparent_68%)] dark:opacity-100 opacity-50" />
        <div className="absolute -bottom-24 right-[-4%] w-[520px] h-[420px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.10)_0%,transparent_68%)] dark:opacity-100 opacity-40" />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none" fill="none">
          <path d="M-100,480 Q400,80 1300,360" stroke="url(#parc1)" strokeWidth="1.2" opacity="0.18" />
          <path d="M-100,560 Q500,220 1300,480" stroke="url(#parc2)" strokeWidth="0.8" opacity="0.12" />
          <defs>
            <linearGradient id="parc1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" /><stop offset="30%" stopColor="#1A56DB" /><stop offset="70%" stopColor="#06B6D4" /><stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="parc2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" /><stop offset="40%" stopColor="#06B6D4" /><stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-start text-left">
        
        {/* Header Title (Left Aligned) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16 w-full max-w-3xl"
        >
          <span className="font-display text-[11px] font-semibold tracking-[0.14em] uppercase text-cyan-400 mb-4 block">
            Pricing Plans
          </span>
          <h1 className="font-display font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-tight text-(--text-primary) m-0">
            Pricing built for<br />
            businesses of all sizes
          </h1>
        </motion.div>

        {/* Dual Cards Container (Separated) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT CARD (STANDARD) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="bg-white p-8 sm:p-12 flex flex-col gap-8 shadow-2xl rounded-none relative border border-gray-200"
          >
            <div className="flex flex-col sm:flex-row justify-between gap-12 h-full">
              {/* Left side text/button */}
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h2 className="font-display font-bold text-[32px] text-(--text-primary) mb-4 tracking-tight">
                    Standard
                  </h2>
                  <p className="font-(--font-body) text-[16px] text-slate-600 leading-relaxed mb-10 max-w-[300px]">
                    Access a complete suite of digital services with simple, clear pricing. No setup fees, monthly fees, or hidden retainers.
                  </p>
                </div>
                <button 
                  onClick={() => window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
                  className="btn-electric text-white font-semibold text-[15px] px-8 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 w-fit"
                >
                  Get started <span className="font-normal text-[18px] leading-none mb-0.5">›</span>
                </button>
              </div>

              {/* Right side rate */}
              <div className="flex flex-col items-start sm:items-end sm:text-right shrink-0">
                <span className="font-semibold font-bold text-[40px] text-[#0F172A] tracking-tight leading-none mb-3">
                  ₦150k+
                </span>
                <span className="font-(--font-body) text-[14px] text-slate-500 max-w-[140px] text-left sm:text-right leading-[1.5]">
                  starting price per standard project
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD (CUSTOM) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="bg-[#0F172A] border border-slate-700/50 flex flex-col sm:flex-row shadow-2xl rounded-none relative"
          >
            {/* Left side text/button */}
            <div className="flex-1 p-8 sm:p-12 sm:pr-8 flex flex-col justify-center max-w-[340px]">
              <h2 className="font-display font-bold text-[32px] text-white mb-4 tracking-tight">
                Custom
              </h2>
              <p className="font-(--font-body) text-[16px] text-[#94A3B8] leading-relaxed mb-10">
                Design a custom package—available for businesses with large project volumes or unique workflow models.
              </p>
              <Link
                href="/contact"
                className="btn-electric text-white font-semibold text-[15px] px-8 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 w-fit"
              >
                Contact sales <span className="font-normal text-[18px] leading-none mb-0.5">›</span>
              </Link>
            </div>

            {/* Right side features list */}
            <div className="w-full sm:w-[50%] flex flex-col justify-center sm:border-l border-slate-700/50 bg-[#141E33]">
              <div className="px-6 py-5 border-t sm:border-t-0 border-b border-slate-700/50 flex items-center h-full">
                <span className="font-(--font-body) text-[15px] font-medium text-[#CBD5E1]">Dedicated retainers</span>
              </div>
              <div className="px-6 py-5 border-b border-slate-700/50 flex items-center h-full">
                <span className="font-(--font-body) text-[15px] font-medium text-[#CBD5E1]">Volume discounts</span>
              </div>
              <div className="px-6 py-5 border-b border-slate-700/50 flex items-center h-full">
                <span className="font-(--font-body) text-[15px] font-medium text-[#CBD5E1]">Multi-product bundles</span>
              </div>
              <div className="px-6 py-5 flex items-center h-full">
                <span className="font-(--font-body) text-[15px] font-medium text-[#CBD5E1]">Country-specific pricing</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
