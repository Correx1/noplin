'use client';

import { motion } from 'framer-motion';

export const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function SectionHeader({ eyebrow, headline, sub }: { eyebrow: string; headline: string; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: EASE }}
      className="flex flex-col items-center text-center gap-3 mb-14"
    >
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#06B6D4' }}>{eyebrow}</span>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.75rem,4vw,2.75rem)', color: 'var(--text-primary)', lineHeight: 1.15 }}>{headline}</h2>
      {sub && <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '560px' }}>{sub}</p>}
    </motion.div>
  );
}

export function IconBox({ Icon, glow }: { Icon: React.ElementType; glow: string }) {
  return (
    <div style={{
      width: 48, height: 48,
      background: `${glow}14`,
      border: `1px solid ${glow}30`,
      borderRadius: '12px',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: `0 0 16px ${glow}25`,
    }}>
      <Icon size={22} color={glow} strokeWidth={1.75} />
    </div>
  );
}
