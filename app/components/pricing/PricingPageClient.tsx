'use client';

import { motion } from 'framer-motion';
import PricingHero from './PricingHero';
import PricingGrid from './PricingGrid';
import PricingCallouts from './PricingCallouts';
import PricingFeatures from './PricingFeatures';
import PricingFAQ from './PricingFAQ';
import Link from 'next/link';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function PricingPageClient() {
  return (
    <main className="bg-[var(--bg-page)] min-h-screen">
      <PricingHero />
      <PricingGrid />
      <PricingCallouts />
      <PricingFeatures />
      <PricingFAQ />

      {/* Bottom CTA — Matching FinalCTASection style natively */}
      <section className="relative overflow-hidden force-dark" style={{ padding: '112px 0' }}>
        {/* Background mesh — always dark for impact */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(26,86,219,0.28) 0%, transparent 65%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 40% 40% at 80% 20%, rgba(6,182,212,0.12) 0%, transparent 60%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: '#0A0A1F', zIndex: -1 }} />
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center text-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex flex-col gap-4"
          >
            <h2 className="font-[var(--font-display)] font-bold text-[clamp(1.75rem,4vw,3rem)] text-white leading-[1.1] tracking-tight">
              Not sure which package is <br className="hidden sm:block" />
              <span className="text-[#1A56DB]">right for you?</span>
            </h2>
            <p className="font-[var(--font-body)] text-[18px] text-[#94A3B8] max-w-[520px] mx-auto leading-[1.7]">
              Book a free 15-minute discovery call and we will help you map out the perfect digital plan for your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
            className="items-center justify-center pt-2"
          >
            <Link
              href="/contact"
              className="btn-electric inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-[15px] font-semibold text-[#0D0D2B] font-[var(--font-display)] hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              Book a Free Call
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
