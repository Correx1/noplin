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
    <section className="relative overflow-hidden gradient-mesh force-dark pt-[120px] pb-[80px]">
      {/* --- ADDED COLORFUL BACKGROUND SWOOP --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="absolute w-[150%] h-[250px] bg-gradient-to-r from-[#0A101D] via-[#1A56DB] to-[#06B6D4] opacity-15 blur-[60px] -rotate-[12deg] translate-y-10" />
        <div className="absolute w-[150%] h-[150px] bg-gradient-to-r from-[#1A56DB] to-[#0A101D] opacity-[0.08] blur-[50px] -rotate-[12deg] translate-y-36 translate-x-[5%]" />
      </div>

      {/* Background Mesh */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-[5%] left-1/2 w-[80vw] h-[60vh] rounded-full"
          style={{ transform: 'translateX(-50%)', background: 'radial-gradient(ellipse, rgba(26,86,219,0.12) 0%, transparent 65%)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(var(--grid-line-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line-color) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 flex flex-col gap-6 items-start">
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
          className="text-[clamp(2rem,5vw,3.5rem)] font-display font-bold text-primary max-w-[800px] leading-tight"
        >
          {serviceName}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
          className="text-lg font-body text-secondary max-w-[560px] leading-relaxed"
        >
          {tagline}
        </motion.p>

        {/* Lead Specialist */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.22 }}
          className="text-xs font-body text-secondary"
        >
          Lead Specialist:{' '}
          <span className="text-primary font-semibold">{leadSpecialist}</span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.25 }}
        >
          <Link
            href="/contact"
            className="btn-electric inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white font-display"
          >
            Get a Quote for This Service →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}