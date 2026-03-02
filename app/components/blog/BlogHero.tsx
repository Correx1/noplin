import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function BlogHero() {
  return (
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-(--bg-page) pt-[20px] md:pt-[100px] pb-[80px] sm:pb-[120px]">

      
      {/* ── Background: soft glows + curves ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[700px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(26,86,219,0.13)_0%,transparent_68%)] dark:opacity-100 opacity-50" />
        <div className="absolute -bottom-24 right-[-4%] w-[520px] h-[420px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.10)_0%,transparent_68%)] dark:opacity-100 opacity-40" />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none" fill="none">
          <path d="M-100,480 Q400,80 1300,360" stroke="url(#barc1)" strokeWidth="1.2" opacity="0.18" />
          <path d="M-100,560 Q500,220 1300,480" stroke="url(#barc2)" strokeWidth="0.8" opacity="0.12" />
          <defs>
            <linearGradient id="barc1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" /><stop offset="30%" stopColor="#1A56DB" /><stop offset="70%" stopColor="#06B6D4" /><stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="barc2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" /><stop offset="40%" stopColor="#06B6D4" /><stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
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

          <h1 className="font-display text-[clamp(2.5rem,5vw,5.5rem)] font-extrabold leading-[1] tracking-[-0.03em] text-(--text-primary) uppercase">
            Insights &<br />Strategy.
          </h1>

          <p className="mt-2 font-body text-[18px] leading-[1.6] text-(--text-secondary)">
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
            className="group relative flex h-56 w-56 cursor-pointer items-center justify-center rounded-full border border-[var(--border-card)] bg-transparent shadow-sm transition-all duration-500 hover:border-electric hover:bg-(--bg-card) hover:shadow-lg hover:shadow-electric/10"
            onClick={() => {
              window.scrollTo({ top: window.innerHeight * 0.7, behavior: 'smooth' });
            }}
          >
             <div className="flex flex-col items-center gap-3 text-center">
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.15em] text-(--text-primary)">
                  Read Latest<br />Insights
                </span>
                <svg 
                  className="h-6 w-6 text-(--text-muted) transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-electric" 
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
