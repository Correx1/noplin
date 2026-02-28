'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: 'How do payments work?', a: '50% deposit upfront to secure your project, 50% on delivery. For retainer services, we bill monthly in advance.' },
  { q: 'Do you offer payment plans?', a: 'Yes, for projects above ₦500,000. Payment plans are available on request and agreed before work begins.' },
  { q: 'Are prices negotiable?', a: 'Our prices reflect the value we deliver. We offer bundled package pricing for clients combining multiple services — but we do not discount individual service rates.' },
  { q: 'Do you work with international clients?', a: 'Yes. We serve clients globally. Prices in USD or GBP are available on request — email hello@noplin.com.' },
  { q: "What's included in 'revisions'?", a: 'Each tier specifies how many revision rounds are included. A revision round means one set of consolidated feedback applied at once. Additional rounds are billed at an hourly rate.' },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[var(--border-card)]">
      <button 
        onClick={() => setOpen((v) => !v)} 
        className="flex w-full items-center justify-between py-6 text-left group transition-colors"
      >
        <span className="font-[var(--font-display)] font-semibold text-[16px] text-[var(--text-primary)] group-hover:text-electric transition-colors">
          {q}
        </span>
        <motion.div 
          animate={{ rotate: open ? 45 : 0 }} 
          transition={{ duration: 0.2 }} 
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--bg-card)] border border-[var(--border-card)] shrink-0 ml-4 group-hover:bg-electric/10 group-hover:border-electric/30 group-hover:text-electric transition-colors"
        >
          <span className="text-[20px] leading-none mb-0.5" style={{ color: 'inherit' }}>+</span>
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            transition={{ duration: 0.22 }} 
            style={{ overflow: 'hidden' }}
          >
            <p className="font-[var(--font-body)] text-[15px] text-[var(--text-secondary)] leading-[1.7] pb-6 max-w-3xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PricingFAQ() {
  return (
    <section className="bg-[var(--bg-page)] max-w-7xl mx-auto px-6 pt-20 lg:pt-32 pb-24">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
        <div className="md:w-1/3 shrink-0">
          <h2 className="font-[var(--font-display)] font-bold text-[36px] text-[var(--text-primary)] leading-tight tracking-tight">
            Common <br className="hidden md:block"/> Questions
          </h2>
          <p className="font-[var(--font-body)] text-[15px] text-[var(--text-secondary)] mt-4">
            Everything you need to know about our billing, engagements, and process.
          </p>
        </div>
        
        <div className="md:w-2/3 w-full border-t border-[var(--border-card)]">
          {faqs.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
