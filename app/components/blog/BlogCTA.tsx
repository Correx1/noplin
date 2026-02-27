'use client';

export default function BlogCTA() {
  return (
    <section className="bg-[var(--bg-section-alt)] py-24 border-t border-[var(--border-default)]">
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-6 p-10 sm:p-14" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-accent)', borderRadius: '24px', boxShadow: 'var(--shadow-card-theme)' }}>
          
          <div className="flex flex-col gap-3">
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              Get Weekly Digital Growth Insights
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-secondary)' }}>
              No spam. Just actionable strategies, deep-dives, and technical breakdowns every single week.
            </p>
          </div>

          <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="flex-1 px-5 py-4 rounded-xl text-sm transition-colors duration-200" 
              style={{ background: 'var(--bg-section-alt)', border: '1px solid var(--border-default)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', outline: 'none' }}
              onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = '#1A56DB'; }} 
              onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--border-default)'; }} 
              required
            />
            <button 
              type="submit"
              className="btn-electric px-8 py-4 rounded-xl text-sm font-semibold whitespace-nowrap" 
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Subscribe
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
