'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQProps {
  faqs: { question: string; answer: string }[];
}

export default function FAQ({ faqs }: FAQProps) {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
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
    <div className="border-b border-gray-200">
      <button onClick={() => setOpen(v => !v)} className="flex w-full items-center justify-between py-4 text-left">
        <span className="font-semibold text-gray-900">{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }} className="text-gray-500 text-lg ml-3">+</motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22, ease: 'easeOut' }} className="overflow-hidden">
            <p className="text-gray-600 text-sm pb-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}