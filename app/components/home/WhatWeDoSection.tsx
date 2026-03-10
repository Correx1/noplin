/* eslint-disable react-hooks/refs */
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import {
  Palette,
  Code2,
  TrendingUp,
  Briefcase,
  Bot
} from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const services = [
  {
    id: 'design',
    eyebrow: 'Design',
    headline: 'Brand & Visual Identity',
    desc: 'Everything your brand needs to look premium and be remembered. From cohesive social media identities that stand out, to professional pitch decks built to win rooms.',
    href: '/services#design',
    icon: Palette,
  },
  {
    id: 'development',
    eyebrow: 'Development',
    headline: 'Websites & Apps That Work',
    desc: 'High-performance digital products engineered for absolute scale and maximum conversions. We build robust, custom platforms tailored to solve your complex challenges.',
    href: '/services#development',
    icon: Code2,
  },
  {
    id: 'marketing',
    eyebrow: 'Marketing',
    headline: 'Growth That Scales',
    desc: 'Data-driven marketing channels and strategies that actually move the needle. We focus on tracking true ROI, lowering acquisition costs, and building massive brand authority.',
    href: '/services#marketing',
    icon: TrendingUp,
  },
  {
    id: 'consulting',
    eyebrow: 'Consulting',
    headline: 'Expert Guidance',
    desc: 'Strategic insights and hands-on consulting to elevate your business trajectory. We offer 1-on-1 intensive deep dives to align your digital footprint with your revenue targets.',
    href: '/services#consulting',
    icon: Briefcase,
  },
  {
    id: 'automation',
    eyebrow: 'Automation',
    headline: 'Streamlined Operations',
    desc: 'Stop wasting hours on manual work. We automate your most repetitive tasks, nurture your inbound leads, and scale your operational logistics effortlessly around the clock.',
    href: '/services#automation',
    icon: Bot,
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

      <p className="text-[15px] sm:text-[16px] text-(--text-secondary) leading-relaxed">
        {svc.desc}
      </p>

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