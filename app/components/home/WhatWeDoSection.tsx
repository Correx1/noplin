/* eslint-disable react-hooks/refs */
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import {
  Palette,
  Code2,
  PenTool,
  TrendingUp,
} from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const services = [
  {
    id: 'design',
    eyebrow: 'Brand & Visual Identity',
    headline: 'Your brand, built to be unforgettable.',
    body: 'From a seed idea to a complete brand system — we craft identity that earns recognition and builds trust from the very first look.',
    href: '/services/brand-identity',
    bullets: [
      'Logo & full visual identity systems',
      'Pitch deck design that wins rooms',
      'Brand guidelines your whole team can follow',
      'Business cards, stationery & collateral',
    ],
    icon: Palette,
  },
  {
    id: 'dev',
    eyebrow: 'Web Design & Development',
    headline: 'Sites & apps that turn visitors into customers.',
    body: 'Speed-optimised, conversion-focused digital products built to grow with your business — from simple landing pages to complex web apps.',
    href: '/services/web-design',
    bullets: [
      'High-converting business websites',
      'Web apps & SaaS product interfaces',
      'E-commerce stores engineered to sell',
      'API integrations & MVPs',
    ],
    icon: Code2,
  },
  {
    id: 'content',
    eyebrow: 'Content & Copywriting',
    headline: 'Words that pull readers in and push them to act.',
    body: 'Strategic content crafted to rank on Google, win email clicks, and persuade website visitors to take the next step.',
    href: '/services/content-writing',
    bullets: [
      'SEO articles that rank & drive traffic',
      'Conversion-focused website copy',
      'Email campaigns that nurture & sell',
      'Corporate comms & thought leadership',
    ],
    icon: PenTool,
  },
  {
    id: 'marketing',
    eyebrow: 'Digital Marketing & Growth',
    headline: 'Growth strategy that actually moves the needle.',
    body: 'Data-driven marketing channels that build audiences, increase revenue, and compound over time — not just noise.',
    href: '/services/digital-marketing',
    bullets: [
      'Social media growth & management',
      'Precision ad campaigns (Meta, Google)',
      'Full-funnel growth strategy',
      'Analytics, tracking & reporting',
    ],
    icon: TrendingUp,
  },
];

// ── Card Content ──────────────────────────────────────────────────────────────
function CardContent({ svc }: { svc: typeof services[0] }) {
  const Icon = svc.icon;

  return (
    <div className="relative flex flex-col gap-5 p-6 sm:p-8">
      {/* Icon */}
      <div className="w-11 h-11 rounded-lg bg-electric/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-electric" />
      </div>

      <span className="text-blue-600 text-[11px] font-semibold tracking-[0.14em] uppercase">
        {svc.eyebrow}
      </span>

      <h3 className="font-bold text-(--text-primary) leading-tight text-[clamp(1.25rem,2.6vw,2rem)]">
        {svc.headline}
      </h3>

      <p className="text-[15px] text-(--text-secondary) leading-relaxed">
        {svc.body}
      </p>

      {/* Bullets — specific sub-services */}
      <ul className="flex flex-col gap-2.5">
        {svc.bullets.map(bullet => (
          <li key={bullet} className="flex items-start gap-2.5">
            <span className="mt-[5px] shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-[13.5px] text-(--text-secondary) leading-snug">{bullet}</span>
          </li>
        ))}
      </ul>

      <Link
        href={svc.href}
        className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600 mt-1"
      >
        Explore this service
        <span className="transition-transform group-hover:translate-x-1.5">→</span>
      </Link>
    </div>
  );
}

// ── Stacked Mobile Card ───────────────────────────────────────────────────────
function StackedCard({
  svc,
  index,
  total,
  containerRef,
}: {
  svc: typeof services[0];
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const slice = 1 / total;

  const scale = useTransform(
    scrollYProgress,
    [index * slice, (index + 1) * slice],
    [1, index < total - 1 ? 0.94 : 1]
  );

  const y = useTransform(
    scrollYProgress,
    [index * slice, (index + 1) * slice],
    ['0%', index < total - 1 ? '-6%' : '0%']
  );

  return (
    <motion.div
      style={{ scale, y, top: `${32 + index * 18}px`, zIndex: index + 1 }}
      className="sticky rounded-lg border border-(--border-default) bg-(--bg-card) shadow"
    >
      <CardContent svc={svc} />
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function WhatWeDoSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-(--bg-section) py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col items-center text-center gap-4 mb-20"
        >
          <span className="font-display text-[11px] font-semibold tracking-[0.14em] uppercase text-cyan-400">
            What We Do
          </span>
          <h2 className="font-display font-bold text-(--text-primary) max-w-2xl text-[clamp(1.6rem,4vw,2.75rem)]">
            Everything Your Business Needs to Grow Online
          </h2>
          <p className="text-lg text-(--text-secondary) max-w-md">
            Four departments. One agency. Zero compromises.
          </p>
        </motion.div>

        {/* Desktop */}
        <div className="desktop-cards grid grid-cols-2 gap-12 px-6">
          {services.map(svc => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: EASE }}
              className="rounded-xl border border-(--border-default) bg-(--bg-card) shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent svc={svc} />
            </motion.div>
          ))}
        </div>

        {/* Mobile */}
        <div
          ref={containerRef}
          className="mobile-cards relative mt-24"
          style={{ height: `${services.length * 85}vh` }}
        >
          {services.map((svc, i) => (
            <StackedCard
              key={svc.id}
              svc={svc}
              index={i}
              total={services.length}
              containerRef={containerRef}
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
        }
      `}</style>
    </section>
  );
}