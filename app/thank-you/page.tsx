import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You | Noplin Digital',
  description: 'Your inquiry has been received. We will get back to you within 2 hours.',
};

export default function ThankYouPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6 gradient-mesh force-dark"
    >
      <div className="flex flex-col items-center text-center gap-8 max-w-xl">

        {/* Animated checkmark */}
        <div className="relative flex items-center justify-center" style={{ width: 96, height: 96 }}>
          <style>{`
            @keyframes drawCircle {
              from { stroke-dashoffset: 283; }
              to   { stroke-dashoffset: 0; }
            }
            @keyframes drawCheck {
              from { stroke-dashoffset: 80; }
              to   { stroke-dashoffset: 0; }
            }
            .check-circle {
              stroke-dasharray: 283;
              stroke-dashoffset: 283;
              animation: drawCircle 0.7s cubic-bezier(0.65,0,0.35,1) 0.2s forwards;
            }
            .check-mark {
              stroke-dasharray: 80;
              stroke-dashoffset: 80;
              animation: drawCheck 0.45s cubic-bezier(0.65,0,0.35,1) 0.85s forwards;
            }
            @keyframes pulseGlow {
              0%, 100% { box-shadow: 0 0 0 0 rgba(26,86,219,0.0); }
              50% { box-shadow: 0 0 32px 8px rgba(26,86,219,0.3); }
            }
            .check-wrapper { animation: pulseGlow 2.5s ease-in-out 1.4s infinite; border-radius: 50%; }
          `}</style>
          <div className="check-wrapper" style={{ width: 96, height: 96, borderRadius: '50%', background: 'rgba(26,86,219,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="80" height="80" viewBox="0 0 90 90" fill="none">
              <circle className="check-circle" cx="45" cy="45" r="40" stroke="#1A56DB" strokeWidth="3" strokeLinecap="round" />
              <polyline className="check-mark" points="27,47 40,60 63,33" stroke="#1A56DB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-3">
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem,5vw,2.75rem)', color: 'var(--text-primary)', lineHeight: 1.1 }}>
            You&apos;re In. 🎉
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Your inquiry has been received. We&apos;ll be in touch within 2 hours.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            In the meantime, explore our work or read our latest insights to learn more about what we do.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/work"
            className="btn-electric inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white"
            style={{ fontFamily: 'var(--font-display)' }}>
            See Our Work
          </Link>
          <Link href="/blog"
            className="btn-ghost inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold"
            style={{ fontFamily: 'var(--font-display)' }}>
            Read Our Blog
          </Link>
        </div>

        {/* Note */}
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          Check your email for a confirmation. If you don&apos;t receive it within 5 minutes, check your spam folder.
        </p>
      </div>
    </main>
  );
}
