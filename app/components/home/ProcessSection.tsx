"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, FileText, Zap, Rocket } from "lucide-react";

/* ──────────────────────────  DATA  ────────────────────────── */

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    label: "Tell Us What You Need",
    body: "Fill in our short contact form. Tell us your business, the service you need, your budget range, and your timeline. We respond within 2 hours.",
  },
  {
    num: "02",
    icon: FileText,
    label: "Get Your Quote",
    body: "We recommend the right service tier and send a clear, itemised quote with turnaround time. No hidden fees.",
  },
  {
    num: "03",
    icon: Zap,
    label: "We Get to Work",
    body: "50% deposit secures your project. You sign a brief. We kick off immediately — no weeks of back-and-forth.",
  },
  {
    num: "04",
    icon: Rocket,
    label: "Delivery & Growth",
    body: "Fast, professional delivery. 30-day post-project support. Most clients come back — we make it easy to stay.",
  },
];

/* ──────────────────────────  ANIMATION  ────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

/* ──────────────────────────  COMPONENT  ────────────────────────── */

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="bg-[#0D0D2B] py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <p className="text-cyan-400 text-xs uppercase tracking-widest mb-4">HOW IT WORKS</p>
        <h2 className="text-4xl font-bold text-white mb-16 font-[var(--font-display)]">
          Simple Process. Fast Results.
        </h2>

        {/* Steps */}
        <div className="relative" ref={ref}>
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-6 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-[1px]">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <motion.line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="rgba(6,182,212,0.2)"
                strokeWidth="1"
                strokeDasharray="6 6"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {steps.map((step) => (
              <motion.div
                key={step.num}
                variants={stepVariants}
                className="relative text-center lg:text-left"
              >
                {/* Ghost number */}
                <span className="absolute -top-4 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 text-5xl font-bold text-white/[0.06] select-none pointer-events-none font-[var(--font-display)]">
                  {step.num}
                </span>

                {/* Icon circle */}
                <div className="relative z-10 mx-auto lg:mx-0 w-12 h-12 rounded-full bg-[#1A56DB]/15 border border-[#1A56DB]/30 flex items-center justify-center mb-4">
                  <step.icon size={20} className="text-blue-400" />
                </div>

                {/* Label */}
                <h3 className="text-white text-lg font-semibold mb-2 font-[var(--font-display)]">
                  {step.label}
                </h3>

                {/* Body */}
                <p className="text-white/55 text-sm leading-relaxed font-[var(--font-body)]">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
