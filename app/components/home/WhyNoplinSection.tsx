'use client';

import { motion } from 'framer-motion';
import {
  Target, Zap, Handshake, MessageCircle,
  Globe, Brain, TrendingUp, Network,
} from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

type Item = { Icon: React.ElementType; title: string; body: string; num: string };

const items: Item[] = [
  { Icon: Target,        title: 'Results-First',                body: 'Everything we create is designed to deliver measurable impact.',      num: '01' },
  { Icon: Zap,           title: 'We Deliver Fast',              body: 'No months-long timelines or endless back-and-forth.',                 num: '02' },
  { Icon: Handshake,     title: 'Easy to Work With',            body: 'Clear process, professional communication, zero stress.',             num: '03' },
  { Icon: MessageCircle, title: 'Honest',                       body: "We tell you what you need, not just what you want to hear.",          num: '04' },
  { Icon: Globe,         title: 'Global Standards',             body: 'Premium output regardless of budget size.',                           num: '05' },
  { Icon: Brain,         title: 'Specialists, Not Generalists', body: 'Every service has a dedicated team lead.',                            num: '06' },
  { Icon: TrendingUp,    title: 'We Grow With You',             body: 'From a first logo to a full digital marketing strategy.',            num: '07' },
  { Icon: Network,       title: 'Dual Market Understanding',    body: 'We understand both the African market and the global market.',       num: '08' },
];

export default function WhyNoplinSection() {
  return (
    <section className="bg-[var(--bg-page)] py-24 relative overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_40%_at_5%_50%,rgba(26,86,219,0.05)_0%,transparent_70%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_45%_35%_at_95%_60%,rgba(6,182,212,0.04)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

         <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease: EASE }}
                  className="flex flex-col items-center text-center gap-3 mb-14"
                >
                  <span className="font-[var(--font-display)] font-semibold text-[11px] tracking-[0.14em] uppercase text-cyan-500">
                    Why Us
                  </span>
        
                  <h2 className="font-[var(--font-display)] font-bold text-[clamp(1.75rem,4vw,2.625rem)] text-[var(--text-primary)]">
                    Why Businesses Choose<br />Noplin Digital
          </h2>
            <p className="font-[var(--font-body)] text-[var(--text-secondary)] max-w-md">
            Eight principles that define how we work — and why clients come back.
          </p>
                </motion.div>

        {/* ── Items: 2-column split list ── */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {items.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.055 }}
                className={[
                  'grid grid-cols-[3rem_1fr] gap-6 py-8 border-t border-white/[0.07] cursor-default transition-colors duration-200 hover:bg-blue-700/[0.04]',
                  isLeft ? 'pr-0 pl-0 md:pr-12' : 'pl-0 pr-0 md:pl-12 md:border-l border-white/[0.07]',
                ].join(' ')}
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center shrink-0 mt-0.5">
                  <item.Icon size={26} color="#1A56DB" strokeWidth={1.6} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display font-semibold text-[17px] text-[var(--text-primary)] m-0 leading-tight">
                      {item.title}
                    </h3>
                    <span className="font-mono text-[10px] text-white/[0.18] tracking-[0.05em] select-none">
                      {item.num}
                    </span>
                  </div>
                  <p className="font-body text-[15px] text-[var(--text-secondary)] leading-[1.65] m-0 opacity-75">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom closing border */}
        <div className="border-t border-white/[0.07]" />

      </div>
    </section>
  );
}