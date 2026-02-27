/* eslint-disable react-hooks/refs */
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const services = [
  {
    id: 'design',
    eyebrow: 'Brand & Visual Identity',
    headline: 'Your brand, built to be unforgettable.',
    body: 'From the first logo concept to a complete brand kit — logos, colours, typography, pitch decks, and every visual touchpoint your business needs to look premium from day one.',
    href: '/services/brand-identity',
    tags: ['Brand Identity™', 'Logo Design™', 'Pitch Decks™', 'Brand Kits™'],
    accentClass: 'text-blue-600',
    accentBg: 'bg-blue-600',
  },
  {
    id: 'dev',
    eyebrow: 'Web Design & Development',
    headline: 'Sites & apps that turn visitors into customers.',
    body: 'Business websites, web apps, e-commerce stores — built for speed, SEO, and measurable conversion. Every project ships with clean code, sharp design, and a performance obsession.',
    href: '/services/web-design',
    tags: ['Web Design™', 'Web Apps™', 'E-Commerce™', 'MVP Dev™'],
    accentClass: 'text-cyan-500',
    accentBg: 'bg-cyan-500',
  },
  {
    id: 'content',
    eyebrow: 'Content & Copywriting',
    headline: 'Words that pull readers in and push them to act.',
    body: 'SEO content that ranks, email sequences that convert, and conversion copy that sells — written by people who understand business, not templates.',
    href: '/services/content-writing',
    tags: ['SEO Content™', 'Conversion Copy™', 'Email Campaigns™', 'Business Writing™'],
    accentClass: 'text-amber-500',
    accentBg: 'bg-amber-500',
  },
  {
    id: 'marketing',
    eyebrow: 'Digital Marketing & Growth',
    headline: 'Growth strategy that actually moves the needle.',
    body: 'Social media management, paid ads, and strategy consulting — built around your numbers, not vanity metrics. We grow channels that turn followers into revenue.',
    href: '/services/digital-marketing',
    tags: ['Social Growth™', 'Paid Ads™', 'Strategy™', 'Analytics™'],
    accentClass: 'text-indigo-400',
    accentBg: 'bg-indigo-400',
  },
];

// ── Shared card content ───────────────────────────────────────────────────────
function CardContent({ svc }: { svc: typeof services[0] }) {
  return (
    <>
      {/* Decorative clipped square */}
      <div
        aria-hidden
        className={`absolute top-0 right-0 h-20 w-20 opacity-10 ${svc.accentBg} [clip-path:polygon(100%_0,0_0,100%_100%)]`}
      />

      {/* Grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-0 bg-[linear-gradient(var(--grid-line-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line-color)_1px,transparent_1px)] bg-[size:52px_52px]"
      />

      <div className="relative z-10 flex service-inner">
        <div className="service-text w-full flex flex-col justify-center gap-5 px-12 py-14 relative z-10">
          <span className={`font-semibold text-[11px] tracking-[0.14em] uppercase ${svc.accentClass}`}>
            {svc.eyebrow}
          </span>

          <h3 className="font-bold text-[var(--text-primary)] leading-tight text-[clamp(1.5rem,2.6vw,2.2rem)]">
            {svc.headline}
          </h3>

          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            {svc.body}
          </p>

          <div className="flex flex-wrap gap-2">
            {svc.tags.map(tag => (
              <span
                key={tag}
                className="text-[11px] text-[var(--text-secondary)] bg-[var(--bg-section-alt)] border border-[var(--border-default)] rounded px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={svc.href}
            className={`group inline-flex items-center gap-2 w-fit font-semibold text-sm mt-1 ${svc.accentClass}`}
          >
            Explore this service
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

// ── Stacked card for mobile ───────────────────────────────────────────────────
function StackedCard({
  svc,
  index,
  total,
  containerRef,
}: {
  svc: typeof services[0];
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const sliceSize = 1 / total;
  const scale = useTransform(
    scrollYProgress,
    [index * sliceSize, (index + 1) * sliceSize],
    [1, index < total - 1 ? 0.93 : 1],
  );
  const y = useTransform(
    scrollYProgress,
    [index * sliceSize, (index + 1) * sliceSize],
    ['0%', index < total - 1 ? '-5%' : '0%'],
  );

  return (
    <motion.div
      style={{ scale, y, top: `${24 + index * 14}px`, zIndex: index + 1 }}
      className="sticky overflow-hidden rounded-lg shadow-sm bg-[var(--bg-card)]"
    >
      <CardContent svc={svc} />
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function WhatWeDoSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-[var(--bg-section)] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col items-center text-center gap-4 mb-20"
        >
          <span className="font-semibold text-[11px] tracking-[0.14em] uppercase text-cyan-500">
            What We Do
          </span>
          <h2 className="font-bold text-[var(--text-primary)] leading-tight max-w-2xl text-[clamp(1.75rem,4vw,2.75rem)]">
            Everything Your Business Needs to Grow Online
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-md">
            Four departments. One agency. Zero compromises.
          </p>
        </motion.div>

        <div className="desktop-cards grid grid-cols-2 gap-12 px-6">
          {services.map(svc => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: EASE }}
              className="relative overflow-hidden rounded-lg shadow-sm bg-[var(--bg-card)]"
            >
              <CardContent svc={svc} />
            </motion.div>
          ))}
        </div>

        <div
          ref={containerRef}
          className="mobile-cards relative"
          style={{ height: `${services.length * 100}vh` }}
        >
          {services.map((svc, i) => (
            <StackedCard
              key={svc.id}
              svc={svc}
              index={i}
              total={services.length}
              containerRef={containerRef as React.RefObject<HTMLDivElement>}
            />
          ))}
        </div>
      </div>

      <style>{`
        .desktop-cards { display: grid; }
        .mobile-cards  { display: none; }

        @media (max-width: 768px) {
          .desktop-cards { display: none; }
          .mobile-cards  { display: block; }

          .service-text {
            width: 100% !important;
            padding: 28px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}