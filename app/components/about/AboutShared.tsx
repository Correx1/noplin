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
      <span className="font-[var(--font-display)] font-semibold text-[11px] tracking-[0.14em] uppercase text-[#06B6D4]">{eyebrow}</span>
      <h2 className="font-[var(--font-display)] font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-[var(--text-primary)] leading-[1.15]">{headline}</h2>
      {sub && <p className="font-[var(--font-body)] text-[18px] text-[var(--text-secondary)] max-w-[560px]">{sub}</p>}
    </motion.div>
  );
}

export function IconBox({ Icon, glow }: { Icon: React.ElementType; glow: string }) {
  return (
    <div
      className="flex items-center justify-center rounded-xl w-[48px] h-[48px]"
      style={{
        background: `${glow}14`,
        border: `1px solid ${glow}30`,
        boxShadow: `0 0 16px ${glow}25`,
      }}
    >
      <Icon size={22} color={glow} strokeWidth={1.75} />
    </div>
  );
}
