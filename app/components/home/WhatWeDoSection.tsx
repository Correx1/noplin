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
    body: 'From the first logo concept to a complete brand kit — colours, typography, pitch decks, and every visual touchpoint your business needs.',
    href: '/services/brand-identity',
    tags: ['Brand Identity', 'Logo Design', 'Pitch Decks', 'Brand Kits'],
    icon: Palette,
  },
  {
    id: 'dev',
    eyebrow: 'Web Design & Development',
    headline: 'Sites & apps that turn visitors into customers.',
    body: 'Business websites, web apps, and e-commerce stores built for speed, SEO, and measurable conversion.',
    href: '/services/web-design',
    tags: ['Web Design', 'Web Apps', 'E-Commerce', 'MVP Dev'],
    icon: Code2,
  },
  {
    id: 'content',
    eyebrow: 'Content & Copywriting',
    headline: 'Words that pull readers in and push them to act.',
    body: 'SEO content that ranks, email sequences that convert, and copy written to sell — not fill space.',
    href: '/services/content-writing',
    tags: ['SEO Content', 'Conversion Copy', 'Email Campaigns', 'Business Writing'],
    icon: PenTool,
  },
  {
    id: 'marketing',
    eyebrow: 'Digital Marketing & Growth',
    headline: 'Growth strategy that actually moves the needle.',
    body: 'Social growth, paid ads, and strategy consulting focused on revenue — not vanity metrics.',
    href: '/services/digital-marketing',
    tags: ['Social Growth', 'Paid Ads', 'Strategy', 'Analytics'],
    icon: TrendingUp,
  },
];

// ── Card Content ──────────────────────────────────────────────────────────────
function CardContent({ svc }: { svc: typeof services[0] }) {
  const Icon = svc.icon;

  return (
    <div className="relative flex flex-col gap-6 p-6 sm:p-8">
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-electric" />
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

      <div className="flex flex-wrap gap-2 pt-1">
        {svc.tags.map(tag => (
          <span
            key={tag}
            className="text-[11px] text-(--text-secondary) border border-(--border-default) rounded-md px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={svc.href}
        className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600 mt-2"
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