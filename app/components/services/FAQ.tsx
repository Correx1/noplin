'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface FAQProps {
  faqs: { question: string; answer: string }[];
}

export default function FAQ({ faqs }: FAQProps) {
  return (
    <section className="py-16 bg-(--bg-section)">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <span className="font-display text-[11px] font-semibold tracking-[0.14em] uppercase text-cyan-400">
            FAQ
          </span>
          <h2 className="font-display font-bold text-(--text-primary) text-[clamp(1.75rem,4vw,2.5rem)] leading-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="flex flex-col">
          {faqs.map(f => <FAQItem key={f.question} q={f.question} a={f.answer} />)}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-(--border-default)">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex w-full items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="font-display font-semibold text-[15px] text-(--text-primary) group-hover:text-cyan-400 transition-colors duration-200">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 w-7 h-7 rounded-full border border-(--border-default) flex items-center justify-center text-(--text-muted) group-hover:border-cyan-400 group-hover:text-cyan-400 transition-colors duration-200"
        >
          <Plus size={14} />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="font-body text-(--text-secondary) text-[15px] leading-relaxed pb-5 pr-8">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}