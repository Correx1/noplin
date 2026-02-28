'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function PricingHero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[85vh] overflow-hidden bg-(--bg-page) pt-[32px] sm:pt-[120px] pb-[80px] sm:pb-[120px]">
      
      {/* --- BACKGROUND GRAPHICS --- */}
      {/* Deep navy and electric blue theme */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Electric blue and navy angled slash */}
        <div 
          className="absolute w-[150%] h-62.5 bg-linear-to-r from-[#0A101D] via-electric to-electric opacity-15 blur-[60px] -rotate-[12deg] translate-y-10"
        />
        <div 
          className="absolute w-[150%] h-37.5 bg-linear-to-r from-electric to-[#0A101D] opacity-[0.08] blur-[50px] -rotate-[12deg] translate-y-36 translate-x-[5%]"
        />
      </div>

      {/* Subtle grid lines in background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="mx-auto grid h-full max-w-7xl grid-cols-4 px-6">
          <div className="h-full border-l border-slate-900 dark:border-white" />
          <div className="h-full border-l border-slate-900 dark:border-white" />
          <div className="h-full border-l border-slate-900 dark:border-white" />
          <div className="h-full border-l border-r border-slate-900 dark:border-white" />
        </div>
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
          <span className="font-semibold text-[15px] font-bold tracking-[0.1em] text-electric uppercase mb-6 block">
            Pricing Plans
          </span>
          <h1 className="font-semibold text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight text-(--text-primary) m-0">
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
                  <h2 className="font-semibold font-bold text-[32px] text-[#0F172A] mb-4 tracking-tight">
                    Standard
                  </h2>
                  <p className="font-(--font-body) text-[16px] text-slate-600 leading-relaxed mb-10 max-w-[300px]">
                    Access a complete suite of digital services with simple, clear pricing. No setup fees, monthly fees, or hidden retainers.
                  </p>
                </div>
                <button 
                  onClick={() => window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
                  className="bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold font-bold text-[15px] px-8 py-3.5 rounded-none inline-flex items-center justify-center gap-2 transition-colors w-fit shadow-md shadow-indigo-500/20"
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
              <h2 className="font-semibold font-bold text-[32px] text-white mb-4 tracking-tight">
                Custom
              </h2>
              <p className="font-(--font-body) text-[16px] text-[#94A3B8] leading-relaxed mb-10">
                Design a custom package—available for businesses with large project volumes or unique workflow models.
              </p>
              <Link
                href="/contact"
                className="bg-electric hover:bg-[#0891B2] text-[#0F172A] font-semibold font-bold text-[15px] px-8 py-3.5 rounded-none inline-flex items-center justify-center gap-2 transition-colors w-fit shadow-md shadow-cyan-400/20"
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
