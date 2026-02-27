'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function WorkHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-[var(--bg-page)] pt-[140px] pb-[100px] sm:pt-[160px] sm:pb-[120px]">
      {/* Minimal background curves */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <svg
          className="absolute inset-0 h-full w-full opacity-10"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
        >
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

      {/* Subtle grid lines */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30">
        <div className="mx-auto grid h-full max-w-7xl grid-cols-4 px-6">
          <div className="h-full border-l border-[var(--grid-line-color)]" />
          <div className="h-full border-l border-[var(--grid-line-color)]" />
          <div className="h-full border-l border-[var(--grid-line-color)]" />
          <div className="h-full border-l border-r border-[var(--grid-line-color)]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1fr_600px] lg:gap-24">
        {/* Left copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE }}
          className="flex max-w-2xl flex-col items-start gap-6"
        >
          <span className="font-display text-[13px] font-semibold uppercase tracking-[0.05em] text-[#1A56DB]">
            Portfolio
          </span>

          <h1 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--text-primary)]">
            Our Work Speaks
            <br />
            for Itself.
          </h1>

          <p className="mt-2 font-body text-[17px] leading-[1.6] text-[var(--text-secondary)]">
            We build brands that mean something, websites that convert, and
            campaigns that scale. Explore a selection of our recent projects.
          </p>
        </motion.div>

        {/* Right side – Single image (shorter on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="relative mt-10 flex w-full items-center justify-center lg:mt-0 lg:justify-end"
        >
          {/* Subtle glow */}
          <div className="absolute right-16 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-[#1A56DB] opacity-15 blur-[140px]" />

          {/* Image container */}
          <div className="relative w-full overflow-hidden rounded  bg-[--bg-card] shadow-[0_16px_36px_-20px_rgba(0,0,0,0.35)]
                          h-[340px] sm:h-[400px] lg:h-[480px]">
            <Image
              src="/portfolio/branding.png"
              alt="Portfolio preview"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}