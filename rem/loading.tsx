export default function Loading() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 force-dark"
    >
      <style>{`
        @keyframes logoGlow {
          0%, 100% { box-shadow: 0 0 16px 4px rgba(26,86,219,0.25); }
          50%       { box-shadow: 0 0 36px 12px rgba(26,86,219,0.55); }
        }
        @keyframes progressBar {
          0%   { width: 0%; }
          60%  { width: 70%; }
          85%  { width: 88%; }
          100% { width: 100%; }
        }
        .loading-logo { animation: logoGlow 1.8s ease-in-out infinite; }
        .loading-bar  { animation: progressBar 1.8s ease-in-out infinite; }
      `}</style>

      <div className="flex flex-col items-center gap-8">
        {/* Logo mark */}
        <div
          className="loading-logo"
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            background: '#1A56DB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28 }}>N</span>
        </div>

        {/* Wordmark */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>
            Noplin <span style={{ color: '#1A56DB' }}>Digital</span>
          </span>
        </div>

        {/* Progress bar */}
        <div style={{ width: 160, height: 2, background: 'rgba(26,86,219,0.15)', borderRadius: 2, overflow: 'hidden' }}>
          <div
            className="loading-bar"
            style={{ height: '100%', background: '#1A56DB', borderRadius: 2 }}
          />
        </div>
      </div>
    </div>
  );
}
