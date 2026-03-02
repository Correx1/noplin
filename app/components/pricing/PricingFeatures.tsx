'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const features = [
  {
    title: 'Flexible structures',
    description: 'Bespoke project pricing, structured payment plans, and ongoing retainers tailored for your scale.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
        <path d="m15 5 4 4" />
      </svg>
    )
  },
  {
    title: 'Bundle discounts',
    description: 'Significant cost reductions when combining design, development, and marketing into unified projects.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    )
  },
  {
    title: 'Dedicated retainers',
    description: 'Consistent, priority access to our entire team of designers and developers at a predictable flat rate.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    )
  },
  {
    title: 'Full transparency',
    description: 'Detailed roadmaps, timeline tracking, and clear deliverables so you know exactly what you are paying for.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
];

const checkItems = [
  'Design Systems',
  'Web Platforms',
  'Marketing & SEO',
  'Custom APIs',
];

export default function PricingFeatures() {
  return (
    <section className="relative overflow-hidden force-dark py-20 lg:py-28 [clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">

      {/* ── Background Art ── */}
      <div className="pointer-events-none absolute inset-0">
        <svg
          viewBox="0 0 1200 800"
          className="absolute left-1/2 top-0 h-full w-[1200px] -translate-x-1/2 opacity-10"
          fill="none"
        >
          <defs>
            <linearGradient id="pfCurveGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <filter id="pfGlow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path d="M80 40 C 520 220, 700 580, 1120 760" stroke="url(#pfCurveGrad)" strokeWidth="3" filter="url(#pfGlow)" />
          <path d="M140 0 C 560 200, 740 560, 1080 800" stroke="url(#pfCurveGrad)" strokeWidth="2" opacity="0.5" />
          <path d="M1080 20 C 640 240, 460 600, 80 780" stroke="url(#pfCurveGrad)" strokeWidth="1.5" opacity="0.25" />
        </svg>
        <div className="absolute left-[16%] top-[18%] h-28 w-28 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute left-[62%] top-[46%] h-36 w-36 rounded-full bg-blue-500/15 blur-[80px]" />
        <div className="absolute left-[42%] top-[78%] h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Top: Text + Card ── */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between mb-20">

          {/* Left Text */}
          <div className="flex-1 max-w-[500px] w-full flex flex-col gap-6">
            <span className="font-display text-[11px] font-semibold tracking-[0.14em] uppercase text-cyan-400">
              Enterprise
            </span>
            <h2 className="font-display font-bold text-white text-[clamp(2rem,4vw,3rem)] leading-tight">
              Custom solutions for enterprise scale
            </h2>
            <p className="font-body text-[16px] text-white/60 leading-relaxed">
              Create tailored packages to help you expand into new markets, optimize performance, automate workflows, and scale your brand presence.
            </p>
            <Link
              href="/contact"
              className="btn-electric inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white w-fit"
            >
              Contact sales <span className="text-lg leading-none">›</span>
            </Link>
          </div>

          {/* Right Card — theme-aware */}
          <div className="flex-1 w-full max-w-[520px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="bg-(--bg-card) border border-(--border-card) rounded-lg p-8 sm:p-10 shadow-(--shadow-card-theme) relative overflow-hidden"
            >
              {/* Subtle top glow inside card */}
              <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

              <h3 className="font-display font-bold text-[22px] text-(--text-primary)">
                Build your custom package
              </h3>
              <p className="font-body text-[15px] text-(--text-secondary) mt-2 leading-relaxed">
                Work with our experts to design a solution that meets your exact needs:
              </p>

              <div className="grid grid-cols-2 gap-y-4 gap-x-4 mt-8">
                {[
                  { label: 'Design Systems',  color: 'var(--electric)',    bg: 'rgba(26,86,219,0.1)' },
                  { label: 'Web Platforms',   color: '#10B981',            bg: 'rgba(16,185,129,0.1)' },
                  { label: 'Marketing & SEO', color: 'var(--color-gold)',  bg: 'rgba(245,158,11,0.1)' },
                  { label: 'Custom APIs',     color: '#8B5CF6',            bg: 'rgba(139,92,246,0.1)' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span
                      className="w-6 h-6 rounded flex items-center justify-center shrink-0"
                      style={{ background: item.bg, color: item.color }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="font-body text-[14px] text-(--text-primary) font-medium truncate">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="h-px bg-(--border-default) w-full my-8" />

              <h4 className="font-display font-semibold text-[14.5px] text-(--text-primary) mb-4">
                Get the support you need
              </h4>

              <ul className="flex flex-col gap-3.5">
                {[
                  'Dedicated account management',
                  'Priority technical support',
                  'Post-launch maintenance protocols',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-[18px] h-[18px] rounded-full bg-cyan-400/10 text-cyan-400 flex items-center justify-center shrink-0 mt-px">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="font-body text-[14px] text-(--text-secondary) leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* ── Bottom 4 Features ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pt-16 border-t border-white/10">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }}
              className="flex flex-col items-start"
            >
              {/* Icon box */}
              <div className="text-cyan-400 mb-5 flex items-center justify-center p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20 w-12 h-12 relative">
                <div className="absolute inset-0 bg-linear-to-br from-cyan-400/20 to-transparent rounded-xl opacity-60" />
                <div className="relative z-10">{feature.icon}</div>
              </div>

              {/* Title & Description */}
              <div className="border-l-2 border-white/10 pl-4">
                <h3 className="font-display font-bold text-[17px] text-white">
                  {feature.title}
                </h3>
                <p className="font-body text-[14px] text-white/55 mt-2 leading-[1.65]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
