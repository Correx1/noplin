'use client';

import Link from 'next/link';
import { Instagram, Linkedin, Twitter, MapPin } from 'lucide-react';

const designDevLinks = [
  { label: 'Brand Identity™', href: '/services/brand-identity' },
  { label: 'Pitch Deck Design™', href: '/services/pitch-deck' },
  { label: 'Web Design™', href: '/services/web-design' },
  { label: 'Web App Dev™', href: '/services/web-app-dev' },
  { label: 'MVP Development™', href: '/services/mvp-development' },
  { label: 'E-Commerce Dev™', href: '/services/ecommerce' },
  { label: 'API Integration™', href: '/services/api-integration' },
];

const contentMarketingLinks = [
  { label: 'Authority Content™', href: '/services/authority-content' },
  { label: 'Conversion Copy™', href: '/services/conversion-copy' },
  { label: 'Email Marketing™', href: '/services/email-marketing' },
  { label: 'Video Content™', href: '/services/video-content' },
  { label: 'Corporate Comms™', href: '/services/corporate-comms' },
  { label: 'Social Media™', href: '/services/social-growth' },
  { label: 'Paid Ads™', href: '/services/ad-campaigns' },
  { label: 'Strategy Consulting™', href: '/services/strategy' },
];

const socials = [
  { icon: Instagram, href: 'https://instagram.com/noplindigital', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/noplindigital', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/noplindigital', label: 'Twitter/X' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0A0A1F', borderTop: '1px solid rgba(26,86,219,0.15)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="inline-flex items-center gap-0.5">
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', color: '#fff' }}>Noplin</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', color: '#1A56DB' }}>Digital</span>
            </Link>

            <p className="text-sm leading-relaxed max-w-55" style={{ color: '#94A3B8', fontFamily: 'var(--font-body)' }}>
              For ambitious businesses that want real growth.
            </p>

            {/* Location */}
            <div className="flex items-start gap-2 text-sm" style={{ color: '#94A3B8', fontFamily: 'var(--font-body)' }}>
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>London, United Kingdom</span>
            </div>
          </div>

          {/* Col 2 — Design & Dev */}
          <div className="flex flex-col gap-4">
            <p className="uppercase text-xs tracking-widest font-semibold" style={{ color: '#1A56DB', fontFamily: 'var(--font-display)', letterSpacing: '0.12em' }}>
              Design & Dev
            </p>
            <ul className="flex flex-col gap-2.5">
              {designDevLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-colors duration-150 hover:text-white" style={{ color: '#94A3B8', fontFamily: 'var(--font-body)' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Content & Marketing */}
          <div className="flex flex-col gap-4">
            <p className="uppercase text-xs tracking-widest font-semibold" style={{ color: '#1A56DB', fontFamily: 'var(--font-display)', letterSpacing: '0.12em' }}>
              Content & Marketing
            </p>
            <ul className="flex flex-col gap-2.5">
              {contentMarketingLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-colors duration-150 hover:text-white" style={{ color: '#94A3B8', fontFamily: 'var(--font-body)' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Connect */}
          <div className="flex flex-col gap-4">
            <p className="uppercase text-xs tracking-widest font-semibold" style={{ color: '#1A56DB', fontFamily: 'var(--font-display)', letterSpacing: '0.12em' }}>
              Connect
            </p>

            <a href="mailto:hello@noplin.com" className="text-sm transition-colors duration-150 hover:text-white" style={{ color: '#94A3B8', fontFamily: 'var(--font-body)' }}>
              hello@noplin.com
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex items-center justify-center w-9 h-9 rounded-lg border border-slate-400/20 text-slate-400 transition-colors duration-200 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm" style={{ color: '#94A3B8', fontFamily: 'var(--font-body)' }}>
            © 2025 Noplin Digital Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-sm transition-colors duration-150 hover:text-white" style={{ color: '#94A3B8', fontFamily: 'var(--font-body)' }}>
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm transition-colors duration-150 hover:text-white" style={{ color: '#94A3B8', fontFamily: 'var(--font-body)' }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
