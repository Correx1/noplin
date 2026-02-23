import Link from 'next/link';

export default function WorkProjectPage({ params }: { params: { slug: string } }) {
  return (
    <main className="gradient-mesh force-dark" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', padding: '40px 24px' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#06B6D4', display: 'block', marginBottom: '16px' }}>Portfolio</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem,4vw,2.5rem)', color: 'var(--text-primary)', marginBottom: '12px' }}>
          Case Study Coming Soon
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          Project: <span style={{ color: 'var(--text-primary)' }}>{params.slug.replace(/-/g, ' ')}</span>
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '32px' }}>
          We are documenting this project. Check back soon.
        </p>
        <Link href="/work" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '14px', color: '#1A56DB' }}>
          ← Back to Portfolio
        </Link>
      </div>
    </main>
  );
}
