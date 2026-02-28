'use client';

import { motion } from 'framer-motion';
import { Target, Globe } from 'lucide-react';
import { EASE, IconBox } from './AboutShared';

const missionVision = [
  { label: 'Mission', Icon: Target, glow: '#1A56DB', text: 'Deliver exceptional design, content, and marketing solutions to businesses worldwide — with speed, honesty, and results-first thinking.' },
  { label: 'Vision',  Icon: Globe,  glow: '#06B6D4', text: 'Become a globally recognized billion-dollar digital services company rooted in African excellence.' },
];

export default function AboutStoryAndPurpose() {
  return (
      <section className="bg-(--bg-section-alt) py-[120px]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Left: Who We Are */}
          <motion.div 
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-3">
              <span className="font-semibold font-semibold text-[11px] tracking-[0.14em] uppercase text-cyan">Who We Are</span>
              <h2 className="font-semibold font-bold text-[clamp(1.5rem,4vw,2.75rem)] text-(--text-primary) leading-[1.15]">Built Differently.<br/>Built for Results.</h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-(--font-body) text-[17px] text-(--text-secondary) leading-[1.85]">
                Noplin Digital is a premium full-service digital agency built to serve ambitious businesses — from early-stage startups to established companies — that want real, measurable results from their digital investments.
              </p>
              <p className="font-(--font-body) text-[17px] text-(--text-secondary) leading-[1.85]">
                We specialize in brand identity, web design and development, content creation, and digital marketing. We are not a typical agency. We don&apos;t drag out timelines, hide behind jargon, or disappear after a project ends. We build long-term relationships with clients who want to grow — and we grow with them.
              </p>
            </div>
          </motion.div>

          {/* Right: Our Purpose */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="font-semibold font-semibold text-[11px] tracking-[0.14em] uppercase text-electric">Our Purpose</span>
              <h2 className="font-semibold font-bold text-[clamp(1.5rem,3vw,2.25rem)] text-(--text-primary) leading-[1.15]">Mission & Vision</h2>
            </div>
            
            <div className="flex flex-col gap-6">
              {missionVision.map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE, delay: i * 0.15 }}
                  className="flex flex-col sm:flex-row gap-5 px-6 py-8 bg-(--bg-card) rounded-[20px]" 
                  style={{ border: `1px solid ${item.glow}20`, boxShadow: `0 0 40px ${item.glow}08` }}>
                  <div className="shrink-0 flex items-start">
                    <IconBox Icon={item.Icon} glow={item.glow} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold font-semibold text-[13px] uppercase tracking-[0.1em]" style={{ color: item.glow }}>{item.label}</p>
                    <p className="font-(--font-body) text-[15px] text-(--text-secondary) leading-[1.6]">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
  );
}
