'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export interface PricingTier {
  name: string;
  price: string;
  turnaround: string;
  bestFor: string;
  includes: string[];
  best?: boolean;
}

interface PricingProps {
  tiers: PricingTier[];
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function PricingTiers({ tiers }: PricingProps) {
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
              className={`
                relative flex flex-col gap-8 p-9 rounded-3xl border
                shadow-[var(--shadow-card-theme)]
                ${tier.best
                  ? 'bg-amber-500/5 border-amber-400/60'
                  : 'bg-[var(--bg-card)] border-[var(--border-card)]'}
              `}
            >
              {tier.best && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-[#0D0D2B] px-5 py-1.5 rounded-full text-[11px] font-extrabold tracking-widest font-[var(--font-display)]">
                  BEST VALUE
                </span>
              )}

              {/* Tier Name + Description */}
              <div className="flex flex-col gap-3">
                <h3
                  className={`font-[var(--font-display)] font-extrabold text-[26px] ${
                    tier.best ? 'text-amber-500' : 'text-[var(--text-primary)]'
                  }`}
                >
                  {tier.name}
                </h3>
                <p className="font-[var(--font-body)] text-[15px] leading-relaxed text-[var(--text-secondary)]">
                  {tier.bestFor}
                </p>
              </div>

              {/* Includes */}
              <ul className="flex flex-col gap-3 text-[15px] leading-relaxed text-[var(--text-secondary)] font-[var(--font-body)]">
                {tier.includes.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="mt-auto pt-2">
                <p className="text-xs tracking-wide uppercase text-[var(--text-secondary)] font-[var(--font-body)] mb-2">
                  Starting from
                </p>
                <p className="font-[var(--font-display)] font-extrabold text-[32px] text-[var(--text-primary)]">
                  {tier.price}
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className={`mt-3 py-3 rounded-xl text-sm font-semibold text-center font-[var(--font-display)] ${
                  tier.best ? 'bg-amber-500 text-black' : 'bg-blue-100 text-blue-900'
                }`}
              >
                Get Started →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* See Full Pricing CTA */}
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