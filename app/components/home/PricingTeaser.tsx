'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const tiers = [
  {
    name: 'Starter',
    price: 'From ₦25,000',
    desc: 'Best for individuals and small businesses starting out.',
    points: [
      'Logo-only design, single-page copy, or basic scripts',
      'Simple landing pages and small integrations',
      'Entry-level content, video, or marketing retainers',
      'Fast turnaround with minimal commitment',
    ],
    highlight: false,
    badge: null,
  },
  {
    name: 'Growth',
    price: 'From ₦150,000',
    desc: 'Ideal for businesses ready to scale, convert, and compete.',
    points: [
      'Full brand identity or pitch deck design',
      'Business websites, MVPs, and e-commerce builds',
      'SEO content, conversion copy, and email systems',
      'Monthly social media or paid ads management',
    ],
    highlight: true,
    badge: 'MOST POPULAR',
  },
  {
    name: 'Premium',
    price: 'From ₦500,000',
    desc: 'For established companies and funded startups.',
    points: [
      'Complete brand systems and investor-grade decks',
      'Custom web apps, enterprise MVPs, and platforms',
      'Advanced marketing, automation, and integrations',
      'Priority delivery and long-term retainers',
    ],
    highlight: false,
    badge: null,
  },
];

export default function PricingTeaser() {
  return (
    <section className="bg-(--bg-page) py-28">
      <div className="max-w-7xl mx-auto px-6">

     

        {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="flex flex-col items-center text-center gap-4 mb-20"
                >
                  <span className="font-semibold  text-[11px] tracking-[0.14em] uppercase text-cyan-500">
                        Pricing
                  </span>
                  <h2 className="font-semibold  text-[clamp(2.2rem,4vw,3.0rem)] leading-[1.1] text-(--text-primary) max-w-2xl">
                      Transparent, Flexible Pricing
                  </h2>
                  <p className="font-(--font-body) text-[17px] text-(--text-secondary) max-w-md">
                   Clear tiers designed to match your stage — from first launch to full-scale execution.
                  </p>
                </motion.div>

        {/* Cards */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
  {tiers.map((tier, i) => (
    <motion.div
      key={tier.name}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: EASE, delay: i * 0.12 }}
      className={`
        relative flex flex-col rounded-3xl p-8
        border backdrop-blur
        transition-all duration-300
        hover:-translate-y-1
        ${
          tier.highlight
            ? 'bg-amber-500/5 border-amber-400/60 shadow-lg shadow-amber-500/10'
            : 'bg-(--bg-card) border-[var(--border-card)] shadow-sm'
        }
      `}
    >
      {tier.badge && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-4 py-1 text-[11px] font-bold tracking-widest text-navy">
          {tier.badge}
        </span>
      )}

      {/* Header */}
      <div className="flex flex-col gap-2">
        <h3
          className={`
            text-[17px] font-semibold tracking-tight
            ${
              tier.highlight
                ? 'text-amber-500'
                : 'text-(--text-primary)'
            }
          `}
        >
          {tier.name}
        </h3>

        <p className="text-[15px] leading-relaxed text-(--text-secondary)">
          {tier.desc}
        </p>
      </div>

      {/* Features */}
      <ul className="mt-4 flex flex-col gap-3 text-[15px] text-(--text-secondary)">
        {tier.points.map(point => (
          <li key={point} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* Price */}
      <div className="mt-auto pt-6 border-t border-white/5">
        <p className="mb-1 text-xs uppercase tracking-wide text-(--text-secondary)">
          Starting from
        </p>
        <p className="text-[17px] font-semibold text-(--text-primary)">
          {tier.price}
        </p>
      </div>
    </motion.div>
  ))}
</div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.35 }}
          className="flex justify-center mt-20"
        >
          <Link
            href="/pricing"
            className="btn-ghost inline-flex items-center gap-2 px-9 py-3.5 rounded-xl text-sm font-semibold font-semibold"
          >
            See Full Pricing →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}