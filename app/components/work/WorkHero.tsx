'use client';

import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function WorkHero() {
  return (
    <section className="hero-section relative flex min-h-[60vh] items-center overflow-hidden bg-(--bg-page)">
      {/* ── Background: soft glows + curves ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[700px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(26,86,219,0.13)_0%,transparent_68%)] dark:opacity-100 opacity-50" />
        <div className="absolute -bottom-24 right-[-4%] w-[520px] h-[420px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.10)_0%,transparent_68%)] dark:opacity-100 opacity-40" />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none" fill="none">
          <path d="M-100,480 Q400,80 1300,360" stroke="url(#warc1)" strokeWidth="1.2" opacity="0.18" />
          <path d="M-100,560 Q500,220 1300,480" stroke="url(#warc2)" strokeWidth="0.8" opacity="0.12" />
          <defs>
            <linearGradient id="warc1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" /><stop offset="30%" stopColor="#1A56DB" /><stop offset="70%" stopColor="#06B6D4" /><stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="warc2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" /><stop offset="40%" stopColor="#06B6D4" /><stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
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
          <span className="font-display text-[13px] font-semibold uppercase tracking-widest text-electric">
            Portfolio
          </span>

          <h1 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-(--text-primary)">
            Our Work Speaks
            <br />
            for Itself.
          </h1>

          <p className="mt-2 font-body text-[17px] leading-[1.6] text-(--text-secondary)">
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
          <div className="absolute right-16 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-electric opacity-15 blur-[140px]" />

          {/* Video container */}
          <div className="relative w-full overflow-hidden rounded bg-[--bg-card] shadow-[0_16px_36px_-20px_rgba(0,0,0,0.35)]
                          h-[340px] sm:h-[400px] lg:h-[480px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/portfolio/work.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}