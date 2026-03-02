"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, FileText, Zap, Rocket } from "lucide-react";

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

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative overflow-hidden force-dark py-20 px-6">
      {/* ── Background Art (same as FeaturedServicesSection) ── */}
      <div className="pointer-events-none absolute inset-0">
        <svg
          viewBox="0 0 1200 800"
          className="absolute left-1/2 top-0 h-full w-[1200px] -translate-x-1/2 opacity-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="procCurveGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <filter id="procGlow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path d="M80 40 C 520 220, 700 580, 1120 760" stroke="url(#procCurveGrad)" strokeWidth="3" filter="url(#procGlow)" />
          <path d="M140 0 C 560 200, 740 560, 1080 800" stroke="url(#procCurveGrad)" strokeWidth="2" opacity="0.5" />
          <path d="M1080 20 C 640 240, 460 600, 80 780" stroke="url(#procCurveGrad)" strokeWidth="1.5" opacity="0.3" />
        </svg>
        {/* Blur bubbles */}
        <div className="absolute left-[16%] top-[18%] h-28 w-28 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute left-[62%] top-[46%] h-36 w-36 rounded-full bg-blue-500/15 blur-[80px]" />
        <div className="absolute right-[10%] top-[8%] h-40 w-40 rounded-full bg-blue-600/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-14">
          <span className="font-display text-[11px] font-semibold tracking-[0.14em] uppercase text-cyan-400">
            How It Works
          </span>
          <h2 className="font-display font-bold text-white text-[clamp(1.75rem,4vw,2.5rem)] leading-tight">
            Simple Process. Fast Results.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative" ref={ref}>
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-6 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <motion.line
                x1="0" y1="0" x2="100%" y2="0"
                stroke="rgba(34,211,238,0.2)"
                strokeWidth="1"
                strokeDasharray="6 6"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
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
                <span className="absolute -top-4 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 text-5xl font-bold text-white/[0.05] select-none pointer-events-none">
                  {step.num}
                </span>

                {/* Icon circle */}
                <div className="relative z-10 mx-auto lg:mx-0 w-12 h-12 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center mb-5">
                  <step.icon size={20} className="text-cyan-400" />
                </div>

                {/* Label */}
                <h3 className="font-display font-semibold text-[17px] text-white mb-2">
                  {step.label}
                </h3>

                {/* Body */}
                <p className="font-body text-sm text-white/60 leading-relaxed">
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
