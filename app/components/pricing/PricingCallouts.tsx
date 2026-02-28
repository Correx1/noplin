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
    <section className="bg-(--bg-page) pb-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6 lg:gap-8">
        {callouts.map((c) => (
          <div 
            key={c.title} 
            className="group relative flex flex-col gap-5 p-8 sm:p-10 transition-all hover:-translate-y-2 duration-500 bg-(--bg-card) overflow-hidden rounded-[24px]" 
            style={{ 
              border: `1px solid var(--border-card)`,
              boxShadow: '0 20px 40px -20px rgba(0,0,0,0.15)'
            }}
          >
            {/* Top gradient blur */}
            <div 
              className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[80px] opacity-15 pointer-events-none transition-opacity duration-500 group-hover:opacity-40"
              style={{ background: c.glow }}
            />

            <div className="absolute top-0 right-0 p-8 opacity-5">
              <c.Icon size={120} />
            </div>

            <div 
              className="relative w-14 h-14 flex items-center justify-center rounded-2xl shadow-sm mb-2 transition-all duration-300 group-hover:scale-110"
              style={{ 
                background: `color-mix(in srgb, ${c.glow} 10%, transparent)`, 
                border: `1px solid color-mix(in srgb, ${c.glow} 30%, transparent)`,
                boxShadow: `0 0 20px 0 color-mix(in srgb, ${c.glow} 40%, transparent), inset 0 0 10px 0 color-mix(in srgb, ${c.glow} 20%, transparent)`
              }}
            >
              <c.Icon size={24} color={c.glow} strokeWidth={2} style={{ filter: `drop-shadow(0 0 8px ${c.glow})` }} />
            </div>
            
            <h3 className="relative font-semibold font-bold text-[24px] text-(--text-primary)">
              {c.title}
            </h3>
            
            <p className="relative font-(--font-body) text-[16px] text-(--text-secondary) leading-[1.7] max-w-sm flex-1">
              {c.body}
            </p>
            
            <Link 
              href="/contact" 
              className="relative inline-flex items-center gap-2 font-semibold font-bold text-[14.5px] uppercase tracking-wider mt-4 transition-all group-hover:gap-3"
              style={{ color: c.glow }}
            >
              {c.cta} <span className="text-[18px] leading-none mb-[2px] opacity-80">→</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
