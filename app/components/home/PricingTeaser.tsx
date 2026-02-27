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
    <section className="bg-[var(--bg-page)] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col items-center text-center gap-4 mb-20"
        >
          <span className="font-[var(--font-display)] font-semibold text-xs tracking-[0.18em] uppercase text-cyan-500">
            Pricing
          </span>

          <h2 className="font-[var(--font-display)] font-extrabold leading-[1.05] text-[clamp(2.25rem,4.8vw,3.25rem)] text-[var(--text-primary)] max-w-3xl">
            Transparent, Flexible Pricing
          </h2>

          <p className="font-[var(--font-body)] text-[var(--text-secondary)] max-w-md">
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
              className={`relative flex flex-col gap-8 p-9 rounded-3xl border shadow-[var(--shadow-card-theme)] ${tier.highlight ? 'bg-amber-500/5 border-amber-400/60' : 'bg-[var(--bg-card)] border-[var(--border-card)]'}`}
            >
              {tier.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-[#0D0D2B] px-5 py-1.5 rounded-full text-[11px] font-extrabold tracking-widest font-[var(--font-display)]">
                  {tier.badge}
                </span>
              )}

              <div className="flex flex-col gap-3">
                <h3
                  className={`font-[var(--font-display)] font-extrabold text-[26px] ${
                    tier.highlight ? 'text-amber-500' : 'text-[var(--text-primary)]'
                  }`}
                >
                  {tier.name}
                </h3>

                <p className="font-[var(--font-body)] text-[15px] leading-relaxed text-[var(--text-secondary)]">
                  {tier.desc}
                </p>
              </div>

              <ul className="flex flex-col gap-3 text-[15px] leading-relaxed text-[var(--text-secondary)] font-[var(--font-body)]">
                {tier.points.map(point => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-2">
                <p className="text-xs tracking-wide uppercase text-[var(--text-secondary)] font-[var(--font-body)] mb-2">
                  Starting from
                </p>
                <p className="font-[var(--font-display)] font-extrabold text-[32px] text-[var(--text-primary)]">
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
            className="btn-ghost inline-flex items-center gap-2 px-9 py-3.5 rounded-xl text-sm font-semibold font-[var(--font-display)]"
          >
            See Full Pricing →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}