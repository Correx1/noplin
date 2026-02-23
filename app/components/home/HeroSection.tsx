'use client';

import { motion } from 'framer-motion';
import Link from 'next/link'
import Image from 'next/image';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay },
  }),
};

const trustBadges = [
  '50+ Projects Delivered',
  'Results-First Agency',
  'Fast Turnaround',
];

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center overflow-hidden gradient-mesh force-dark"
      style={{ paddingTop: '72px', minHeight: '82vh' }}
    >
      {/* ── Background layers ───────────────────────────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">

        {/* Abstract flowing SVG art — Stripe-inspired, very subtle */}
        <svg
          className="hero-art absolute inset-0 w-full h-full"
          viewBox="0 0 1440 820"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="rg1" cx="75%" cy="30%" r="55%">
              <stop offset="0%" stopColor="var(--hero-art-c1)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <radialGradient id="rg2" cx="90%" cy="70%" r="45%">
              <stop offset="0%" stopColor="var(--hero-art-c2)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <radialGradient id="rg3" cx="60%" cy="10%" r="40%">
              <stop offset="0%" stopColor="var(--hero-art-c3)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <filter id="blur-art">
              <feGaussianBlur stdDeviation="32" />
            </filter>
          </defs>

          {/* Soft colour blobs behind the curves */}
          <ellipse cx="1150" cy="260" rx="480" ry="340" fill="url(#rg1)" filter="url(#blur-art)" opacity="0.9" />
          <ellipse cx="1300" cy="600" rx="380" ry="280" fill="url(#rg2)" filter="url(#blur-art)" opacity="0.7" />
          <ellipse cx="900"  cy="80"  rx="300" ry="200" fill="url(#rg3)" filter="url(#blur-art)" opacity="0.6" />

          {/* Flowing organic arc 1 */}
          <path
            d="M900 -60 C980 120 1260 180 1380 320 C1460 420 1400 580 1300 700 C1180 840 980 860 860 780"
            fill="none"
            stroke="var(--hero-art-stroke1)"
            strokeWidth="2"
            opacity="0.45"
          />
          {/* Flowing organic arc 2 */}
          <path
            d="M1000 -20 C1100 160 1350 200 1430 380 C1490 520 1420 680 1340 780"
            fill="none"
            stroke="var(--hero-art-stroke2)"
            strokeWidth="1.5"
            opacity="0.3"
          />
          {/* Flowing organic arc 3 — wider sweep */}
          <path
            d="M820 40 C920 200 1180 240 1320 420 C1420 560 1380 720 1240 820"
            fill="none"
            stroke="var(--hero-art-stroke3)"
            strokeWidth="1"
            opacity="0.2"
          />
          {/* Filled ribbon — gives the colour wash */}
          <path
            d="M880 -80 C980 100 1260 170 1390 330 C1480 450 1420 610 1300 730 C1160 865 940 880 820 800 L860 780 C980 860 1180 840 1300 700 C1400 580 1460 420 1380 320 C1260 180 980 120 900 -60 Z"
            fill="url(#rg1)"
            opacity="0.12"
          />
        </svg>

        {/* Primary radial — electric blue top-center */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[90vw] h-[70vh] bg-[radial-gradient(ellipse,rgba(26,86,219,0.10)_0%,transparent_65%)]" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(var(--grid-line-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line-color) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      {/* ── Content ────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center">

          {/* Left — copy */}
          <div className="flex flex-col items-start gap-6">

            {/* Badge */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border border-cyan-400/40 bg-cyan-400/[0.08] text-cyan-400 font-[var(--font-body)] tracking-[0.02em]">
                Results-First Digital Agency 
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="leading-[1.1] tracking-tight font-[--font-display] text-[clamp(2.25rem,6vw,4.5rem)] text-[--text-primary]"
            >
              Your Growth.{' '}
              <span className="relative inline-block ">
                Our Mission.
                {/* Animated underline */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
                  className="absolute bottom-[-4px] left-0 right-0 h-[3px] bg-gradient-to-r from-[#1A56DB] to-[#06B6D4] rounded-full origin-left block"
                />
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="text-lg lg:text-xl leading-relaxed max-w-[580px] text-[var(--text-secondary)] font-[var(--font-body)]"
            >
              We are a results-obsessed digital agency delivering premium design,
              development, content and marketing —{' '}
              <span className="text-[var(--text-primary)] font-medium">fast.</span>
            </motion.p>

            {/* Supporting text */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.28}
              className="text-sm text-[var(--text-muted)] font-[var(--font-body)]"
            >
              Trusted by startups, SMEs, and growing businesses across Africa and beyond.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.36}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <Link
                href="/contact"
                className="btn-electric inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white font-[var(--font-display)]"
              >
                Get a Free Quote
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/work"
                className="btn-ghost inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold font-[var(--font-display)]"
              >
                See Our Work
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.44}
              className="flex flex-wrap items-center gap-5 pt-1"
            >
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-[var(--font-body)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block shrink-0" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — video */}
          <motion.div
  initial={{ opacity: 0, y: 32 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
  className="hidden lg:flex items-center justify-center"
          >
             <div className="relative w-[120%] max-w-[1200px] animate-[heroFloat_4s_ease-in-out_infinite]">
  
            <div className="relative w-full">
            <Image
  src="/images/hero.png"
  alt="Dashboard mockup"
  width={18000}
  height={11000}
  priority
  className="relative w-[180%] h-auto select-none scale-[2] origin-center"
  draggable={false}
/>
              </div>
                </div>
          </motion.div>

        </div>
      </div>
     

      {/* Float + hero-art CSS vars injected */}
      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        /* Light mode art palette */
        :root {
        --hero-art-c1:       rgba(99, 102, 241, 0.22);
          --hero-art-c2:       rgba(6, 182, 212, 0.18);
          --hero-art-c3:       rgba(26, 86, 219, 0.15);
          --hero-art-stroke1:  rgba(99, 102, 241, 0.40);
          --hero-art-stroke2:  rgba(6, 182, 212, 0.35);
          --hero-art-stroke3:  rgba(245, 158, 11, 0.25);
        }

     
      `}</style>
    </section>
  );
}