'use client';

import Link from 'next/link';

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

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.54V6.78a4.85 4.85 0 0 1-1.03-.09z"/>
    </svg>
  );
}
function TwitterXIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

const socials = [
  { icon: <InstagramIcon />, href: 'https://instagram.com/noplindigital', label: 'Instagram' },
  { icon: <LinkedInIcon />, href: 'https://linkedin.com/company/noplindigital', label: 'LinkedIn' },
  { icon: <TikTokIcon />, href: 'https://tiktok.com/@noplindigital', label: 'TikTok' },
  { icon: <TwitterXIcon />, href: 'https://twitter.com/noplindigital', label: 'Twitter/X' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0A0A1F', borderTop: '1px solid rgba(26,86,219,0.15)' }}>
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="inline-flex items-center gap-0.5">
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', color: '#fff' }}>Noplin</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', color: '#1A56DB' }}>Digital</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-[220px]" style={{ color: '#94A3B8', fontFamily: 'var(--font-body)' }}>
              For ambitious businesses that want real growth.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200"
                  style={{ color: '#94A3B8', border: '1px solid rgba(148,163,184,0.15)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = '#fff';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,86,219,0.4)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(26,86,219,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = '#94A3B8';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(148,163,184,0.15)';
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                  }}
                >
                  {s.icon}
                </a>
              ))}
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
                  <Link href={l.href} className="text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: '#94A3B8', fontFamily: 'var(--font-body)' }}>
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
                  <Link href={l.href} className="text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: '#94A3B8', fontFamily: 'var(--font-body)' }}>
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
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="mailto:hello@noplin.com" className="text-sm transition-colors duration-150 hover:text-white"
                  style={{ color: '#94A3B8', fontFamily: 'var(--font-body)' }}>
                  hello@noplin.com
                </a>
              </li>
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer"
                    className="text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: '#94A3B8', fontFamily: 'var(--font-body)' }}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-3 inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-all duration-200"
              style={{ fontFamily: 'var(--font-display)', background: '#1A56DB' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#1447c0';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(26,86,219,0.4)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#1A56DB';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              Get a Free Quote
            </Link>
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
            <Link href="/privacy" className="text-sm transition-colors duration-150 hover:text-white"
              style={{ color: '#94A3B8', fontFamily: 'var(--font-body)' }}>
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm transition-colors duration-150 hover:text-white"
              style={{ color: '#94A3B8', fontFamily: 'var(--font-body)' }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
