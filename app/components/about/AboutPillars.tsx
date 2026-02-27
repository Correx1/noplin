'use client';

import { motion } from 'framer-motion';
import { Layers, Leaf, TrendingUp, Settings2 } from 'lucide-react';

const pillars = [
  {
    Icon: Layers,
    title: 'Solid',
    subtitle: 'Built to Last',
    body: 'Every deliverable is crafted for longevity, ensuring your business foundation is unshakeable.',
    glow: '#1A56DB',
  },
  {
    Icon: Leaf,
    title: 'Sustainable',
    subtitle: 'Future-Proof',
    body: 'We design systems and solutions that endure across generations.',
    glow: '#10B981',
  },
  {
    Icon: TrendingUp,
    title: 'Scalable',
    subtitle: 'Grow Without Limits',
    body: 'Our strategies and tech scale effortlessly with your growth.',
    glow: '#F59E0B',
  },
  {
    Icon: Settings2,
    title: 'Systematic',
    subtitle: 'Efficiency Engineered',
    body: 'Smart, repeatable processes ensure maximum impact with minimal effort.',
    glow: '#8B5CF6',
  },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function AboutPillars() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-24 sm:py-28 [clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)]">
      
      {/* Background Art */}
      <div className="pointer-events-none absolute inset-0">
        <svg
          viewBox="0 0 1200 800"
          className="absolute left-1/2 top-0 h-full w-[1200px] -translate-x-1/2 opacity-10"
          fill="none"
        >
          <defs>
            <linearLinear id="curveGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearLinear>
            <filter id="glow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path d="M80 40 C 520 220, 700 580, 1120 760" stroke="url(#curveGrad)" strokeWidth="3" filter="url(#glow)" />
          <path d="M140 0 C 560 200, 740 560, 1080 800" stroke="url(#curveGrad)" strokeWidth="2" opacity="0.5" />
        </svg>

        <div className="absolute left-[16%] top-[18%] h-28 w-28 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute left-[62%] top-[46%] h-36 w-36 rounded-full bg-blue-500/15 blur-[80px]" />
        <div className="absolute left-[42%] top-[78%] h-24 w-24 rounded-full bg-cyan-400/15 blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mb-14 text-center sm:mb-16"
        >
          <p className="mb-3 font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-400">
            Our Foundation
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-white">
            The Four Pillars
          </h2>
        </motion.div>

        {/* Pillar Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
              className="group relative flex flex-col items-center gap-6 overflow-hidden rounded-2xl border border-slate-700/40 bg-slate-900/80 p-8 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-2xl sm:flex-row sm:items-start sm:text-left lg:p-10"
            >
              <div 
                className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20" 
                style={{ background: p.glow + '20', border: `1px solid ${p.glow}40` }}
              >
                <p.Icon className="h-8 w-8 sm:h-10 sm:w-10" style={{ color: p.glow }} />
              </div>
              
              <div className="relative z-10 flex-1">
                <h3 className="font-display text-xl font-bold text-white lg:text-2xl">{p.title}</h3>
                <p className="mt-1 font-body text-[13px] font-semibold uppercase tracking-wide text-cyan-300/90">
                  {p.subtitle}
                </p>
                <p className="mt-3 font-body text-[15px] leading-relaxed text-slate-300">
                  {p.body}
                </p>
              </div>

              {/* Subtle hover glow on corners */}
              <div 
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" 
                style={{ backgroundColor: p.glow }} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}