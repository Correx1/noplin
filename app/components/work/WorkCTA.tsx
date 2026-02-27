'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function WorkCTA() {
  return (
    <section style={{ background: 'var(--bg-section-alt)', padding: '72px 0' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE }}
        className="max-w-xl mx-auto px-6 flex flex-col items-center text-center gap-5">
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem,3.5vw,2rem)', color: 'var(--text-primary)' }}>Like what you see? Let&apos;s talk.</h2>
        <Link href="/contact" className="btn-electric inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>
          Start a Project →
        </Link>
      </motion.div>
    </section>
  );
}
