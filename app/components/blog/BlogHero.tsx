import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function BlogHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-[var(--bg-page)] pt-[160px] pb-[120px]">
      
      {/* --- ADDED COLORFUL BACKGROUND SWOOP --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="absolute w-[150%] h-[250px] bg-linear-to-r from-[#0A101D] via-electric to-cyan opacity-15 blur-[60px] -rotate-[12deg] translate-y-10" />
        <div className="absolute w-[150%] h-[150px] bg-linear-to-r from-electric to-[#0A101D] opacity-[0.08] blur-[50px] -rotate-[12deg] translate-y-36 translate-x-[5%]" />
      </div>

      {/* Minimal background curves */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
        >
          <path
            d="M0,400 Q500,100 1000,400"
            fill="none"
            stroke="#1A56DB"
            strokeWidth="2"
          />
          <path
            d="M0,500 Q500,200 1000,500"
            fill="none"
            stroke="#06B6D4"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Optional grid lines for subtle structure */}
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-20">
        <div className="mx-auto grid h-full max-w-7xl grid-cols-4 px-6">
          <div className="h-full border-l border-[var(--grid-line-color)]" />
          <div className="h-full border-l border-[var(--grid-line-color)]" />
          <div className="h-full border-l border-[var(--grid-line-color)]" />
          <div className="h-full border-l border-r border-[var(--grid-line-color)]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1fr_auto] lg:gap-24">
        
        {/* Left copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE }}
          className="flex max-w-2xl flex-col items-start gap-5"
        >
          <span className="font-display text-[13px] font-semibold tracking-widest text-electric uppercase">
            Noplin Insights
          </span>

          <h1 className="font-display text-[clamp(2.5rem,5vw,5.5rem)] font-extrabold leading-[1] tracking-[-0.03em] text-[var(--text-primary)] uppercase">
            Insights &<br />Strategy.
          </h1>

          <p className="mt-2 font-body text-[18px] leading-[1.6] text-[var(--text-secondary)]">
            Digital marketing guides, technical design tips, and uncompromising business growth strategies directly from the Noplin team.
          </p>
        </motion.div>

        {/* Right side - Circular CTA */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
           className="hidden lg:flex"
        >
          <div
            className="group relative flex h-56 w-56 cursor-pointer items-center justify-center rounded-full border border-[var(--border-card)] bg-transparent shadow-sm transition-all duration-500 hover:border-electric hover:bg-[var(--bg-card)] hover:shadow-lg hover:shadow-electric/10"
            onClick={() => {
              window.scrollTo({ top: window.innerHeight * 0.7, behavior: 'smooth' });
            }}
          >
             <div className="flex flex-col items-center gap-3 text-center">
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--text-primary)]">
                  Read Latest<br />Insights
                </span>
                <svg 
                  className="h-6 w-6 text-[var(--text-muted)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-electric" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19L19 5M19 5H8M19 5V16" />
                </svg>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
