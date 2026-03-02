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

];

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center pt-12 overflow-hidden linear-mesh force-dark w-full min-h-[70vh] lg:min-h-[82vh]"
     
    >
      {/* ── Background layers ───────────────────────────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 bg-navy overflow-hidden">
        {/* Moving Background Image / Video */}
        <div className="absolute inset-0 w-[110%] h-[110%] -top-[5%] -left-[5%] animate-[panRight_30s_ease-in-out_infinite]">
          {(() => {
            const bgSrc = "/images/hero.png";
            const isVideo = bgSrc.endsWith('.mp4') || bgSrc.endsWith('.webm');
            if (isVideo) {
              return (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover object-[80%_center] opacity-50"
                  src={bgSrc}
                />
              );
            }
            return (
              <Image
                src={bgSrc}
                alt="Hero background"
                fill
                className="object-cover object-[80%_center] opacity-50"
                priority
              />
            );
          })()}
        </div>

        {/* Perfect Linear Overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/85 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-navy via-transparent to-navy/60" />

        {/* === Exact same art as DarkModeBackground === */}
        <svg
          viewBox="0 0 1200 800"
          className="absolute left-1/2 top-0 h-full w-[1200px] -translate-x-1/2 opacity-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroCurveGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <filter id="heroGlow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path d="M80 40 C 520 220, 700 580, 1120 760" stroke="url(#heroCurveGrad)" strokeWidth="3" filter="url(#heroGlow)" />
          <path d="M140 0 C 560 200, 740 560, 1080 800" stroke="url(#heroCurveGrad)" strokeWidth="2" opacity="0.5" />
          <path d="M1080 20 C 640 240, 460 600, 80 780" stroke="url(#heroCurveGrad)" strokeWidth="1.5" opacity="0.3" />
        </svg>

        {/* Blur bubble anchors — same positions as DarkModeBackground */}
        <div className="absolute left-[16%] top-[18%] h-28 w-28 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute left-[62%] top-[46%] h-36 w-36 rounded-full bg-blue-500/15 blur-[80px]" />
        <div className="absolute left-[42%] top-[78%] h-24 w-24 rounded-full bg-cyan-400/15 blur-2xl" />
        <div className="absolute right-[10%] top-[8%] h-40 w-40 rounded-full bg-blue-600/10 blur-[100px]" />

        {/* Grid overlay for texture */}
        <div
          className="absolute inset-0 mix-blend-overlay opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(var(--grid-line-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line-color) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
      </div>
      {/* ── Content ────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-0 pb-20 sm:pt-16 sm:pb-16 lg:py-20 w-full">
        <div className="max-w-2xl lg:max-w-4xl">
          {/* Left — copy */}
          <div className="flex flex-col items-start gap-6">
            {/* Badge */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border border-cyan-400/40 bg-cyan-400/8 text-cyan-400 font-body tracking-[0.02em]">
                Results-First Digital Agency 
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="leading-[1.1] tracking-tight font-display text-[clamp(2.25rem,6vw,4.5rem)] text-(--text-primary)"
            >
              Your Growth.{' '}
              <span className="relative inline-block ">
                Our Mission.
                {/* Animated underline */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-linear-to-r from-electric to-electric rounded-full origin-left block"
                />
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="text-lg lg:text-xl leading-relaxed max-w-145 text-(--text-secondary) font-body"
            >
              We are a results-obsessed digital agency delivering premium design,
              development, content and marketing —{' '}
              <span className="text-(--text-primary) font-medium">fast.</span>
            </motion.p>

            {/* Supporting text */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.28}
              className="text-sm text-(--text-muted) font-body"
            >
              Trusted by startups, SMEs, and growing businesses across Africa and beyond.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.36}
              className="flex flex-row flex-nowrap items-center gap-2 sm:gap-3 pt-2 w-full"
            >
              <Link
                href="/contact"
                className="btn-electric inline-flex items-center justify-center gap-1 sm:gap-2 px-4 sm:px-7 py-3 sm:py-3.5 rounded-xl text-[13px] sm:text-sm font-semibold text-white  flex-1 sm:flex-none whitespace-nowrap"
              >
                Get a Free Quote
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/work"
                className="btn-ghost inline-flex items-center justify-center gap-1 sm:gap-2 px-4 sm:px-7 py-3 sm:py-3.5 rounded-xl text-[13px] sm:text-sm font-semibold flex-1 sm:flex-none whitespace-nowrap"
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
                  className="flex items-center font-semibold gap-2 text-sm text-(--text-secondary) font-body"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block shrink-0" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      {/* Background Pan Animation CSS injected */}
      <style>{`
        @keyframes panRight {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-4%); }
        }
      `}</style>
    </section>
  );
}