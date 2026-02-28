'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface HeroProps {
  serviceName: string;
  department: string;
  leadSpecialist: string;
  tagline: string;
  startingPrice: string;
  turnaround: string;
  deptColor: { bg: string; text: string };
}

export default function HeroSection({
  serviceName,
  department,
  leadSpecialist,
  tagline,
  startingPrice,
  turnaround,
  deptColor,
}: HeroProps) {
  return (
    <section className="relative flex min-h-[50vh] flex-col justify-center overflow-hidden bg-(--bg-page) pt-[32px] sm:pt-[120px] pb-[80px] sm:pb-[100px]">
      
      {/* Colorful background swoop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center z-0">
        <div className="absolute w-[150%] h-62.5 bg-linear-to-r from-[#0A101D] via-electric to-cyan opacity-15 blur-[60px] -rotate-[12deg] translate-y-10" />
        <div className="absolute w-[150%] h-37.5 bg-linear-to-r from-electric to-[#0A101D] opacity-[0.08] blur-[50px] -rotate-[12deg] translate-y-36 translate-x-[5%]" />
      </div>

      {/* Minimal background curves */}
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
        >
          <path
            d="M0,400 Q500,100 1000,400"
            fill="none"
            stroke="var(--electric, #1A56DB)"
            strokeWidth="2"
          />
          <path
            d="M0,500 Q500,200 1000,500"
            fill="none"
            stroke="var(--cyan, #06B6D4)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Grid lines for subtle structure */}
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <div className="mx-auto grid h-full max-w-7xl grid-cols-4 px-6">
          <div className="h-full border-l border-[var(--grid-line-color)]" />
          <div className="h-full border-l border-[var(--grid-line-color)]" />
          <div className="h-full border-l border-[var(--grid-line-color)]" />
          <div className="h-full border-l border-r border-[var(--grid-line-color)]" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col gap-6 items-start w-full">
        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-wrap gap-3"
        >
          <span
            className="inline-flex px-3 py-1 rounded-full text-xs font-semibold"
            style={{ background: deptColor.bg, color: deptColor.text }}
          >
            {department}
          </span>
          <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-500 border border-yellow-300/30">
            {startingPrice}
          </span>
          <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-cyan-100 text-cyan-500 border border-cyan-300/30">
            {turnaround}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
          className="text-[clamp(2rem,5vw,3.5rem)] font-semibold font-bold text-(--text-primary) max-w-[800px] leading-tight tracking-tight"
        >
          {serviceName}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
          className="text-lg font-(--font-body) text-(--text-secondary) max-w-[560px] leading-relaxed"
        >
          {tagline}
        </motion.p>

        {/* Lead Specialist */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.22 }}
          className="text-xs font-(--font-body) text-(--text-secondary)"
        >
          Lead Specialist:{' '}
          <span className="text-(--text-primary) font-semibold">{leadSpecialist}</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.25 }}
        >
          <Link
            href="/contact"
            className="btn-electric inline-flex items-center gap-2 px-8 py-4 mt-2 rounded-xl text-[15px] font-semibold text-[var(--bg-page)] bg-[var(--text-primary)] hover:bg-electric hover:text-white transition-colors duration-300 font-semibold tracking-wide"
          >
            Get a Quote for This Service →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}