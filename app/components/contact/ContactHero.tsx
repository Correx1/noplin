'use client';

import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function ContactHero() {
  return (
    <section className="relative pt-[32px] sm:pt-24 pb-12 sm:pb-16 lg:pt-28 lg:pb-24 overflow-hidden border-b border-(--grid-line-color) bg-[var(--bg-page)] z-0">
      {/* --- ADDED COLORFUL BACKGROUND SWOOP --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="absolute w-[150%] h-[250px] bg-linear-to-r from-[#0A101D] via-[#1A56DB] to-[#06B6D4] opacity-15 blur-[60px] -rotate-[12deg] translate-y-10" />
        <div className="absolute w-[150%] h-[150px] bg-linear-to-r from-[#1A56DB] to-[#0A101D] opacity-[0.08] blur-[50px] -rotate-[12deg] translate-y-36 translate-x-[5%]" />
      </div>

      {/* Subtle geometric dot grid background, minimalist */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-(--grid-line-color)" />
      <div 
        aria-hidden 
        className="absolute inset-0 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--grid-line-color) 1px, transparent 0)', backgroundSize: '40px 40px', opacity: 0.5 }} 
      />

      <div className="relative max-w-[1400px] mx-auto px-6 xl:px-12 flex flex-col pt-10">
        <motion.div 
          initial={{ opacity: 0, y: 16 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, ease: EASE }} 
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-electric"></div>
          <span className="font-[var(--font-display)] font-semibold text-xs tracking-widest uppercase text-[var(--text-secondary)]">
            Start your project
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: EASE, delay: 0.05 }} 
          className="text-4xl md:text-6xl lg:text-7xl max-w-4xl font-[var(--font-display)] font-semibold text-[var(--text-primary)] leading-[1.05] tracking-tight"
        >
          Lets build something <span className="text-electric">extraordinary</span> together.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 12 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }} 
          className="mt-8 max-w-xl font-[var(--font-body)] text-lg text-[var(--text-secondary)] leading-relaxed"
        >
          Fill out the brief below to help us understand your needs. We review every submission manually and will respond within two business hours.
        </motion.p>
      </div>
    </section>
  );
}
