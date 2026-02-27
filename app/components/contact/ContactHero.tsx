'use client';

import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-(--grid-line-color)">
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
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
            Start your project
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: EASE, delay: 0.05 }} 
          className="text-4xl md:text-6xl lg:text-7xl max-w-4xl"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
        >
          Let's build something <span className="text-electric">extraordinary</span> together.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 12 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }} 
          className="mt-8 max-w-xl"
          style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6 }}
        >
          Fill out the brief below to help us understand your needs. We review every submission manually and will respond within two business hours.
        </motion.p>
      </div>
    </section>
  );
}
