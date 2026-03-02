'use client';

import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function ContactHero() {
  return (
    <section className="hero-section relative overflow-hidden border-b border-(--grid-line-color) bg-(--bg-page) z-0">
      {/* ── Background: soft glows + curves ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[700px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(26,86,219,0.13)_0%,transparent_68%)] dark:opacity-100 opacity-50" />
        <div className="absolute -bottom-24 right-[-4%] w-[520px] h-[420px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.10)_0%,transparent_68%)] dark:opacity-100 opacity-40" />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none" fill="none">
          <path d="M-100,480 Q400,80 1300,360" stroke="url(#carc1)" strokeWidth="1.2" opacity="0.18" />
          <path d="M-100,560 Q500,220 1300,480" stroke="url(#carc2)" strokeWidth="0.8" opacity="0.12" />
          <defs>
            <linearGradient id="carc1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" /><stop offset="30%" stopColor="#1A56DB" /><stop offset="70%" stopColor="#06B6D4" /><stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="carc2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" /><stop offset="40%" stopColor="#06B6D4" /><stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 xl:px-12 flex flex-col pt-10">
        <motion.div 
          initial={{ opacity: 0, y: 16 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, ease: EASE }} 
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-electric"></div>
          <span className="font-display text-[11px] font-semibold tracking-[0.14em] uppercase text-cyan-400">
            Start your project
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: EASE, delay: 0.05 }} 
          className="text-4xl md:text-6xl lg:text-7xl max-w-4xl font-display font-bold text-(--text-primary) leading-[1.05] tracking-tight"
        >
          Lets build something <span className="text-electric">extraordinary</span> together.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 12 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }} 
          className="mt-8 max-w-xl font-(--font-body) text-lg text-(--text-secondary) leading-relaxed"
        >
          Fill out the brief below to help us understand your needs. We review every submission manually and will respond within two business hours.
        </motion.p>
      </div>
    </section>
  );
}
