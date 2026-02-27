'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function FinalCTASection() {
  return (
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
          <h2 className="font-[var(--font-display)] font-bold text-[clamp(2rem,5vw,3.25rem)] text-white leading-[1.1]">
            Ready to Grow?{' '}
            <span className="text-[#1A56DB]">Let&rsquo;s Talk.</span>
          </h2>
          <p className="font-[var(--font-body)] text-[18px] text-[#94A3B8] max-w-[520px] mx-auto leading-[1.7]">
            Whether you need a brand identity, a website, content, or a full digital strategy — we&rsquo;re ready.
          </p>
          <a
            href="mailto:hello@noplin.com"
            className="font-[var(--font-display)] font-semibold text-[15px] text-[#06B6D4] hover:underline"
          >
            hello@noplin.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
          className=" items-center justify-center"
        >
          <Link
            href="/contact"
            className="btn-electric inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white font-[var(--font-display)]"
          >
            Get a Free Quote
          </Link>
         
        </motion.div>
      </div>
    </section>
  );
}
