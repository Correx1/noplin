'use client'

import Link from 'next/link';
import { Home, Zap, MessageCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 overflow-hidden relative gradient-mesh force-dark">

      {/* Floating geometric shapes */}
      <style>{`
        @keyframes floatA { 0%,100%{transform:translate(0,0) rotate(0deg);}50%{transform:translate(12px,-18px) rotate(180deg);} }
        @keyframes floatB { 0%,100%{transform:translate(0,0) rotate(0deg);}50%{transform:translate(-10px,14px) rotate(-120deg);} }
        @keyframes floatC { 0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(8px,-10px) scale(1.12);} }
        @keyframes floatD { 0%,100%{transform:translate(0,0) rotate(0deg);}50%{transform:translate(-14px,8px) rotate(90deg);} }
        .geo-a { animation: floatA 7s ease-in-out infinite; }
        .geo-b { animation: floatB 9s ease-in-out infinite 1s; }
        .geo-c { animation: floatC 6s ease-in-out infinite 2s; }
        .geo-d { animation: floatD 11s ease-in-out infinite 0.5s; }
      `}</style>

      {/* Shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="geo-a" style={{ position: 'absolute', top: '12%', left: '7%', width: 64, height: 64, border: '2px solid rgba(26,86,219,0.18)', borderRadius: '12px', transform: 'rotate(20deg)' }} />
        <div className="geo-b" style={{ position: 'absolute', top: '70%', left: '5%', width: 40, height: 40, border: '2px solid rgba(6,182,212,0.15)', borderRadius: '50%' }} />
        <div className="geo-c" style={{ position: 'absolute', top: '20%', right: '8%', width: 80, height: 80, border: '1.5px solid rgba(26,86,219,0.12)', borderRadius: '50%' }} />
        <div className="geo-d" style={{ position: 'absolute', bottom: '18%', right: '6%', width: 48, height: 48, border: '2px solid rgba(6,182,212,0.12)', borderRadius: '8px', transform: 'rotate(45deg)' }} />
        <div className="geo-a" style={{ position: 'absolute', top: '55%', left: '50%', width: 24, height: 24, background: 'rgba(26,86,219,0.07)', borderRadius: '50%' }} />
        <div className="geo-b" style={{ position: 'absolute', top: '80%', right: '20%', width: 56, height: 56, border: '1.5px solid rgba(26,86,219,0.1)', borderRadius: '14px', transform: 'rotate(-15deg)' }} />
        {/* Radial glow behind 404 */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '40vw', height: '40vh', background: 'radial-gradient(ellipse, rgba(26,86,219,0.15) 0%, transparent 65%)', pointerEvents: 'none' }} />
      </div>

      <div className="relative flex flex-col items-center text-center gap-8 max-w-2xl">

        {/* 404 */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(120px,20vw,200px)',
            lineHeight: 1,
            background: 'linear-gradient(135deg, #1A56DB 0%, #06B6D4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 40px rgba(26,86,219,0.5))',
            display: 'block',
            letterSpacing: '-4px',
          }}>
            404
          </span>
        </div>

        {/* Copy */}
        <div className="flex flex-col gap-3">
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.25rem,3vw,1.75rem)', color: 'var(--text-primary)', lineHeight: 1.3 }}>
            This page went on a discovery call and never came back.
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--text-secondary)' }}>
            Let&apos;s get you somewhere useful.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-lg">
          {[
            { label: 'Go Home',       href: '/',        Icon: Home,          glow: '#1A56DB', desc: 'Back to the homepage' },
            { label: 'View Services', href: '/services', Icon: Zap,           glow: '#F59E0B', desc: 'See all 15 services' },
            { label: 'Contact Us',    href: '/contact',  Icon: MessageCircle, glow: '#06B6D4', desc: 'Get in touch fast' },
          ].map((c) => (
            <Link key={c.href} href={c.href}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl transition-all duration-200"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', textDecoration: 'none' }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = c.glow; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = `0 8px 24px ${c.glow}30`; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border-card)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none'; }}>
              <div style={{ width: 44, height: 44, background: `${c.glow}14`, border: `1px solid ${c.glow}30`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 16px ${c.glow}20` }}>
                <c.Icon size={20} color={c.glow} strokeWidth={1.75} />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)' }}>{c.label}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-secondary)' }}>{c.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
