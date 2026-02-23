import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Noplin Digital — Premium Digital Agency';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0D0D2B',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background radial */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 700,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(26,86,219,0.35) 0%, transparent 65%)',
          }}
        />

        {/* Grid lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />

        {/* Logo mark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, position: 'relative', zIndex: 1 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: '#1A56DB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: '#fff', fontSize: 24, fontWeight: 700 }}>N</span>
          </div>
          <span style={{ color: '#fff', fontSize: 36, fontWeight: 700, letterSpacing: '-1px' }}>
            Noplin <span style={{ color: '#1A56DB' }}>Digital</span>
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: 20,
            textAlign: 'center',
            maxWidth: 700,
            lineHeight: 1.5,
            margin: '0 0 32px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Premium Digital Agency — Design, Dev, Content, Marketing
        </p>

        {/* Divider */}
        <div
          style={{
            width: 80,
            height: 2,
            background: '#1A56DB',
            marginBottom: 32,
            position: 'relative',
            zIndex: 1,
          }}
        />

        {/* Contact row */}
        <div
          style={{
            display: 'flex',
            gap: 40,
            color: 'rgba(148,163,184,0.9)',
            fontSize: 16,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <span>hello@noplin.com</span>
          <span style={{ color: 'rgba(26,86,219,0.6)' }}>·</span>
          <span>noplin.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
