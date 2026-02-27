'use client';

import PricingHero from './PricingHero';
import PricingGrid from './PricingGrid';
import PricingCallouts from './PricingCallouts';
import PricingFeatures from './PricingFeatures';
import PricingFAQ from './PricingFAQ';
import Link from 'next/link';

export default function PricingPageClient() {
  return (
    <main className="bg-[var(--bg-page)] min-h-screen">
      <PricingHero />
      <PricingGrid />
      
      <PricingFeatures />
      <PricingFAQ />

      {/* Bottom CTA */}
      <section className="bg-[var(--bg-section-alt)] py-24 border-t border-[var(--border-default)]">
        <div className="max-w-xl mx-auto px-6 flex flex-col items-center text-center gap-6">
          <h2 className="font-display font-bold text-[clamp(1.5rem,4vw,2.25rem)] text-[var(--text-primary)] leading-[1.1] tracking-tight">
            Not sure which package is right for you?
          </h2>
          <p className="font-body text-[16px] text-[var(--text-secondary)]">
            Book a free 15-minute discovery call and we'll help you map out the perfect plan for your business.
          </p>
          <Link 
            href="/contact" 
            className="mt-4 bg-electric text-white font-display font-bold uppercase tracking-wider text-[13px] px-8 py-4 rounded-none shadow-md shadow-electric/20 hover:-translate-y-0.5 hover:shadow-lg transition-all"
          >
            Book a Free Call →
          </Link>
        </div>
      </section>
    </main>
  );
}
