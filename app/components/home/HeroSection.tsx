'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
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

const trustBadges = ['50+ Projects Delivered'];

export default function HeroSection() {
  return (
    <section className="relative flex items-center overflow-hidden w-full min-h-[75vh] lg:min-h-[90vh] bg-navy">

      {/* Background Image & Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Image wrapper pushed right */}
        <div className="absolute inset-y-0 right-[-10%] sm:right-0 w-[120%] sm:w-full flex items-center justify-end pr-0 sm:pr-6 lg:pr-16">
          <Image
            src="/images/hero2.png"
            alt="Agency showcase"
            width={1200}
            height={900}
            priority
            className="object-cover object-right sm:object-center opacity-90 w-full max-w-none mix-blend-luminosity"
          />
        </div>

        {/* ── Background: soft glows + curves ── */}
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-32 w-[700px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(26,86,219,0.18)_0%,transparent_68%)] dark:opacity-100 opacity-60" />
          <div className="absolute -bottom-24 right-[-4%] w-[520px] h-[420px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.14)_0%,transparent_68%)] dark:opacity-100 opacity-50" />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none" fill="none">
            <path d="M-100,480 Q400,80 1300,360" stroke="url(#harc1)" strokeWidth="1.2" opacity="0.25" />
            <path d="M-100,560 Q500,220 1300,480" stroke="url(#harc2)" strokeWidth="0.8" opacity="0.18" />
            <defs>
              <linearGradient id="harc1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" /><stop offset="30%" stopColor="#1A56DB" /><stop offset="70%" stopColor="#06B6D4" /><stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <linearGradient id="harc2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" /><stop offset="40%" stopColor="#06B6D4" /><stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Left gradient over image for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 items-center">

        {/* Left content */}
        <div className="lg:col-span-7 flex flex-col gap-6 py-20 pointer-events-auto">

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="text-[clamp(2.25rem,5vw,4rem)] sm:text-[clamp(3rem,6vw,5rem)] font-bold leading-tight tracking-tight text-white"
          >
            Your Growth{' '}
            <span className="relative inline-block">
              Our Mission
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-cyan-400 rounded-full origin-left"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-xl"
          >
            A results-driven digital agency delivering premium design,
            development, content and marketing —
            <span className="text-cyan-400 font-semibold"> fast.</span>
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.28}
            className="text-sm sm:text-base text-gray-400"
          >
            Trusted by startups, SMEs, and growing businesses across Africa and beyond.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.36}
            className="flex gap-2 sm:gap-4 pt-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-cyan-400 hover:bg-cyan-500 transition-colors text-white font-semibold px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-lg text-sm sm:text-base shrink-0"
            >
              Get a Free Quote
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center justify-center border border-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors text-cyan-400 font-semibold px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-lg text-sm sm:text-base shrink-0"
            >
              See Our Work
            </Link>
          </motion.div>

          {/* Trust */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.44}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            {trustBadges.map((badge) => (
              <span key={badge} className="flex items-center gap-2 text-sm text-gray-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                {badge}
              </span>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}