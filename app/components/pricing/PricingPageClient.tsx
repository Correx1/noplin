'use client';

import { motion } from 'framer-motion';
import PricingHero from './PricingHero';
import PricingGrid from './PricingGrid';
import PricingCallouts from './PricingCallouts';
import PricingFeatures from './PricingFeatures';
import PricingFAQ from './PricingFAQ';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function PricingPageClient() {
  return (
    <main className="bg-(--bg-page) min-h-screen">
      <PricingHero />
      <PricingGrid />
      <PricingCallouts />
      <PricingFeatures />
      <PricingFAQ />

      {/* Bottom CTA */}
      <section className="relative overflow-hidden force-dark py-16 sm:py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[#07071A]" />
          <div className="absolute inset-0 block sm:hidden" style={{ background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(26,86,219,0.18) 0%, transparent 70%)' }} />
          <div className="absolute inset-0 hidden sm:block" style={{ background: 'radial-gradient(ellipse 70% 80% at 30% 50%, rgba(26,86,219,0.18) 0%, transparent 70%)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 sm:gap-12"
          >
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-2 flex-1">
              <span className="font-display text-[10px] font-semibold tracking-[0.16em] uppercase text-cyan-400">
                Get started
              </span>
              <h2 className="font-display font-bold text-white text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.15]">
                Not sure which package is right for you?
              </h2>
            </div>

            <div className="shrink-0 flex justify-center sm:block">
              <Link
                href="/contact"
                className="btn-electric inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-display font-semibold text-[14px] text-white whitespace-nowrap"
              >
                Book a Free Call <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
