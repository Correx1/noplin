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
      
      {/* ── Background: soft glows + curves ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -left-32 w-[700px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(26,86,219,0.13)_0%,transparent_68%)] dark:opacity-100 opacity-50" />
        <div className="absolute -bottom-24 right-[-4%] w-[520px] h-[420px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.10)_0%,transparent_68%)] dark:opacity-100 opacity-40" />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none" fill="none">
          <path d="M-100,480 Q400,80 1300,360" stroke="url(#sarc1)" strokeWidth="1.2" opacity="0.18" />
          <path d="M-100,560 Q500,220 1300,480" stroke="url(#sarc2)" strokeWidth="0.8" opacity="0.12" />
          <defs>
            <linearGradient id="sarc1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" /><stop offset="30%" stopColor="#1A56DB" /><stop offset="70%" stopColor="#06B6D4" /><stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="sarc2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" /><stop offset="40%" stopColor="#06B6D4" /><stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col gap-6 items-start w-full">
    

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