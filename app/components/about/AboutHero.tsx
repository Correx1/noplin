'use client';

import { motion } from 'framer-motion';
import { EASE } from './AboutShared';

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-(--bg-page) pt-[32px] sm:pt-[120px] pb-[80px] sm:pb-[120px]">
      
      {/* --- ADDED COLORFUL BACKGROUND SWOOP --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="absolute w-[150%] h-62.5 bg-linear-to-r from-[#0A101D] via-electric to-electric opacity-15 blur-[60px] -rotate-[12deg] translate-y-10" />
        <div className="absolute w-[150%] h-37.5 bg-linear-to-r from-electric to-[#0A101D] opacity-[0.08] blur-[50px] -rotate-[12deg] translate-y-36 translate-x-[5%]" />
      </div>

      {/* Minimal background curves */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
        >
          {/* Single smooth parabolic curves */}
          <path
            d="M0,400 Q500,100 1000,400"
            fill="none"
            stroke="#1A56DB"
            strokeWidth="2"
          />
          <path
            d="M0,500 Q500,200 1000,500"
            fill="none"
            stroke="#06B6D4"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Optional grid lines for subtle structure */}
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-30">
        <div className="mx-auto grid h-full max-w-7xl grid-cols-4 px-6">
          <div className="h-full border-l border-[var(--grid-line-color)]" />
          <div className="h-full border-l border-[var(--grid-line-color)]" />
          <div className="h-full border-l border-[var(--grid-line-color)]" />
          <div className="h-full border-l border-r border-[var(--grid-line-color)]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1fr_450px] lg:gap-24">

        {/* Left copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE }}
          className="flex max-w-2xl flex-col items-start gap-6"
        >
          <span className="font-display text-[13px] font-semibold tracking-[0.05em] text-electric">
            We Are Different
          </span>

          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.02em] text-(--text-primary)">
            We Are Not a
            <br />
            Typical Agency.
          </h1>

          <p className="mt-2 font-body text-[18px] leading-[1.6] text-(--text-secondary)">
            We are a results-obsessed team that builds brands that mean something,
            websites that convert, content that engages, and marketing that grows
            businesses — delivered fast, and with excellence.
          </p>
        </motion.div>

        {/* Right card */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="relative w-full"
        >
          <div className="absolute -inset-4 rounded-[30px] bg-linear-to-tr from-electric/20 to-electric/20 blur-2xl opacity-60" />
          <div className="relative flex h-[400px] flex-col overflow-hidden rounded-[20px] border border-[var(--border-card)] bg-(--bg-card) shadow-2xl">
            <div className="flex items-center gap-3 border-b border-[var(--border-card)] px-5 py-4">
              <svg className="h-4 w-4 text-(--text-muted)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <div className="h-5 w-32 rounded bg-[var(--text-muted)] opacity-20" />
            </div>
            <div className="border-b border-[var(--border-card)] px-5 py-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-(--text-muted)">Why Choose Us</span>
            </div>
            <div className="relative flex-1 overflow-hidden p-5">
              <div className="pointer-events-none absolute top-0 left-0 right-0 z-10 h-6 bg-linear-to-b from-[var(--bg-card)] to-transparent" />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-10 bg-linear-to-t from-[var(--bg-card)] to-transparent" />
              <div className="flex flex-col gap-5 animate-[scrollList_15s_linear_infinite] hover:[animation-play-state:paused]">
                {[
                  { id: 'results', val: 'Results-First Focus' },
                  { id: 'speed', val: 'Fast Turnarounds' },
                  { id: 'design', val: 'Premium UI/UX' },
                  { id: 'seo', val: 'Built-in SEO' },
                  { id: 'growth', val: 'Scalable Architecture' },
                  { id: 'support', val: 'Ongoing Partnership' },
                  { id: 'roi', val: 'High ROI Focus' },
                  { id: 'results-2', val: 'Results-First Focus' },
                  { id: 'speed-2', val: 'Fast Turnarounds' },
                ].map((item) => (
                  <div key={item.id} className="group flex items-center justify-between">
                    <span className="font-mono text-[13px] text-(--text-primary)">{item.id}</span>
                    <span className="font-mono text-[13px] text-(--text-muted) transition-colors group-hover:text-electric">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes scrollList {
          0% { transform: translateY(0); }
          100% { transform: translateY(-300px); }
        }
      `}</style>
    </section>
  );
}