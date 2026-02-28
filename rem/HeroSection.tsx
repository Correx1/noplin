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
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 bg-navy overflow-hidden">
        
        {/* Moving Background Image */}
        <div className="absolute inset-0 w-[110%] h-[110%] -top-[5%] -left-[5%] animate-[panRight_30s_ease-in-out_infinite]">
          <Image
            src="/images/hero.png"
            alt="Hero background"
            fill
            className="object-cover object-[80%_center] opacity-50"
            priority
          />
        </div>

        {/* Perfect Gradient Overlays */}
        {/* Horizontal gradient mapping from solid navy to transparent */}
        <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/90 to-transparent" />
        
        {/* Subtle vertical gradient for depth */}
        <div className="absolute inset-0 bg-linear-to-t from-navy via-transparent to-navy/70" />

        {/* Grid overlay for texture */}
        <div
          className="absolute inset-0 mix-blend-overlay opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(var(--grid-line-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line-color) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        
        {/* Primary radial — electric blue top-center for branding */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[90vw] h-[70vh] bg-[radial-gradient(ellipse,rgba(26,86,219,0.15)_0%,transparent_60%)]" />
      </div>
      {/* ── Content ────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28 w-full">
        <div className="max-w-2xl lg:max-w-4xl">

          {/* Left — copy */}
          <div className="flex flex-col items-start gap-6">

            {/* Badge */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border border-cyan-400/40 bg-cyan-400/[0.08] text-cyan-400 font-(--font-body) tracking-[0.02em]">
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
                  className="absolute bottom-[-4px] left-0 right-0 h-[3px] bg-gradient-to-r from-electric to-electric rounded-full origin-left block"
                />
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="text-lg lg:text-xl leading-relaxed max-w-145 text-(--text-secondary) font-(--font-body)"
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
              className="text-sm text-(--text-muted) font-(--font-body)"
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
                className="btn-electric inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white font-semibold"
              >
                Get a Free Quote
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/work"
                className="btn-ghost inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold font-semibold"
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
                  className="flex items-center gap-2 text-xs text-(--text-secondary) font-(--font-body)"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block shrink-0" />
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