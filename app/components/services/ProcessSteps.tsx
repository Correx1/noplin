'use client';
import { motion } from 'framer-motion';

interface Step {
  step: string;
  title: string;
  description: string;
}

interface Props {
  steps: Step[];
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function ProcessSteps({ steps }: Props) {
  return (
    <section className="bg-[#0D0D2B] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-cyan-400 text-xs uppercase tracking-widest mb-4 text-center md:text-left">
          HOW IT WORKS
        </p>
        <h2 className="text-4xl font-bold text-white mb-16 text-center md:text-left font-display">
          Simple Process. Fast Results.
        </h2>

        {/* Steps */}
        <div className="relative">
          {/* Dashed connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-[1px]">
            <div className="w-full h-full border-t border-dashed border-cyan-500/20" />
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {steps.map((s) => (
              <motion.div
                key={s.step}
                className="relative text-center lg:text-left flex flex-col items-center lg:items-start gap-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                {/* Ghost step number */}
                <span className="absolute -top-4 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 text-5xl font-bold text-white/5 select-none pointer-events-none font-display">
                  {s.step}
                </span>

                {/* Icon circle (step number) */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-blue-900/20 border border-blue-500/30 flex items-center justify-center mb-4">
                  <span className="text-blue-400 font-bold">{s.step}</span>
                </div>

                {/* Step title */}
                <h3 className="text-white text-lg font-semibold mb-2 font-display">{s.title}</h3>

                {/* Step description */}
                <p className="text-white/55 text-sm leading-relaxed font-body">{s.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}