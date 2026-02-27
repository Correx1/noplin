import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categoryColors, posts } from '../../components/blog/BlogData';
import BlogCTA from '../../components/blog/BlogCTA';

// Removed static params, indicating dynamic fetching
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Find the post matching the slug (temporarily using placeholder data, but simulating dynamic fetch structure)
  const post = posts.find((p) => p.id === slug);

  if (!post) {
    notFound();
  }

  // Get up to 4 related posts sharing at least one category
  const relatedPosts = posts
    .filter(p => p.id !== post.id && p.categories.some(cat => post.categories.includes(cat)))
    .slice(0, 4);

  return (
    <main className="bg-white min-h-screen pt-[120px] pb-[120px]">
      <article className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* ── LEFT COLUMN: MAIN CONTENT (8 COLS) ──────────────── */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          <div className="flex flex-col items-start gap-4 mb-4">
            <div className="flex flex-wrap gap-2">
              {post.categories.map(cat => (
                <span 
                  key={cat}
                  style={{ fontSize: '11px', fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: categoryColors[cat] ?? '#06B6D4' }}
                  className="px-3 py-1 bg-gray-100 rounded-sm"
                >
                  {cat}
                </span>
              ))}
            </div>
            
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#09090b', lineHeight: 1.15 }} className="tracking-tight max-w-3xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-2" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#52525b' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden relative shrink-0">
                  <Image src={post.author.image} alt={post.author.name} fill className="object-cover" />
                </div>
                <span className="font-semibold text-[#09090b]">{post.author.name}</span>
              </div>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#d4d4d8' }} />
              <time dateTime={post.date}>{post.date}</time>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#d4d4d8' }} />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* 1. MAIN IMAGE: This is the primary feature image at the top of the article (from post.mainImage) */}
          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] rounded-xl overflow-hidden mb-8 border border-gray-200">
            <Image 
              src={post.mainImage} 
              alt={post.title} 
              fill 
              className="object-cover"
              priority
            />
          </div>

          {/* 2. BODY CONTENT (PORTABLE TEXT): 
               This is where your actual article text goes! 
               Yes, you CAN insert images directly inside this text editor in Sanity, 
               and they will render exactly where you place them between paragraphs. 
          */}
          <div className="prose prose-lg max-w-none text-[#3f3f46]" style={{ fontFamily: 'var(--font-body)', lineHeight: 1.8 }}>
            {post.body ? (
              post.body
            ) : (
              <>
                <p className="text-xl font-medium leading-relaxed text-[#09090b] mb-8">
                  {post.excerpt}
                </p>
                <p>
                  This is a placeholder post body because real content hasn't been fetched from Sanity yet. The layout above demonstrates how text will fall back if no rich body is present.
                </p>
              </>
            )}
          </div>
        </div>

        {/* ── RIGHT COLUMN: SIDEBAR CONTENT (4 COLS) ────────────── */}
        <div className="lg:col-span-4">
          <div className="sticky top-[100px] flex flex-col p-6 rounded-xl border border-gray-200 bg-gray-50 shadow-sm">
            <div className="border-b border-gray-200 pb-4 mb-6 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#1A56DB]" />
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: '#09090b' }}>
                Related Articles
              </h3>
            </div>

            <div className="flex flex-col gap-6">
              {relatedPosts.map((related) => (
                <Link key={related.id} href={related.href} className="group flex flex-col gap-1.5 pb-5 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="flex flex-wrap gap-1 mb-1">
                    {related.categories.slice(0, 2).map(cat => (
                      <span key={cat} style={{ fontSize: '10px', fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: categoryColors[cat] ?? '#06B6D4' }}>
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '15px', color: '#09090b', lineHeight: 1.4 }} className="transition-colors duration-200 group-hover:text-[#1A56DB]">
                    {related.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1" style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#71717a' }}>
                    <span>{related.date}</span>
                    <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#e4e4e7' }} />
                    <span>{related.readTime}</span>
                  </div>
                </Link>
              ))}

              {relatedPosts.length === 0 && (
                <p className="text-sm text-gray-500 font-body">No related articles available.</p>
              )}
            </div>
          </div>
          
          {/* Author snippet in sidebar */}
          <div className="mt-8 p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden relative shrink-0 border border-gray-200">
               <Image src={post.author.image} alt={post.author.name} fill className="object-cover" />
            </div>
            <div>
               <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.125rem', color: '#09090b' }}>{post.author.name}</h4>
               <span style={{ fontFamily: 'var(--font-display)', fontSize: '12px', color: '#1A56DB', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Author</span>
               {post.author.bio && (
                 <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#52525b', lineHeight: 1.6 }} className="mt-3">
                   {post.author.bio}
                 </p>
               )}
            </div>
          </div>
        </div>

      </article>

      {/* ── CTA ────────────────────────────────────── */}
      <div className="mt-24 border-t border-gray-200">
        <BlogCTA />
      </div>
    </main>
  );
}
