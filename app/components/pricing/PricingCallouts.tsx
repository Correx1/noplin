'use client';

import Link from 'next/link';
import { Wallet, Package } from 'lucide-react';

export default function PricingCallouts() {
  const callouts = [
    { 
      Icon: Wallet,  
      glow: 'var(--electric)', 
      title: 'Budget tight?',  
      body: 'We have a starter option for every service to get your idea off the ground. Talk to us and let’s find a solution.',                                     
      cta: 'Chat With Us' 
    },
    { 
      Icon: Package, 
      glow: 'var(--cyan)', 
      title: 'Bundle & Save', 
      body: 'Combine multiple services (e.g. Identity + Web + SEO) for custom bundle pricing. Most clients save 10–20%.',              
      cta: 'Ask About Bundles' 
    },
  ];

  return (
    <section className="bg-[var(--bg-page)] pb-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6 lg:gap-8">
        {callouts.map((c) => (
          <div 
            key={c.title} 
            className="group relative flex flex-col gap-4 p-8 sm:p-10 transition-transform hover:-translate-y-1 duration-300 bg-[var(--bg-card)]" 
            style={{ 
              border: `1px solid var(--border-card)`,
              borderTop: `3px solid ${c.glow}`,
              borderRadius: '0px',
              boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)'
            }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <c.Icon size={120} />
            </div>

            <div 
              className="relative w-12 h-12 flex items-center justify-center shadow-lg"
              style={{ 
                background: `color-mix(in srgb, ${c.glow} 15%, transparent)`, 
                border: `1px solid color-mix(in srgb, ${c.glow} 30%, transparent)`,
                borderRadius: '0px'
              }}
            >
              <c.Icon size={20} color={c.glow} strokeWidth={2} />
            </div>
            
            <h3 className="relative font-display font-bold text-[22px] text-[var(--text-primary)] mt-2">
              {c.title}
            </h3>
            
            <p className="relative font-body text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-sm">
              {c.body}
            </p>
            
            <Link 
              href="/contact" 
              className="relative inline-flex font-display font-bold text-[14px] uppercase tracking-wider mt-4 transition-opacity hover:opacity-75"
              style={{ color: c.glow }}
            >
              {c.cta} →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
