'use client';

import BlogHero from './BlogHero';
import BlogGrid from './BlogGrid';
import BlogCTA from './BlogCTA';

export default function BlogPageClient({ posts }: { posts: any[] }) {
  return (
    <main>
      <BlogHero />
      <BlogGrid posts={posts} />
      <BlogCTA />
    </main>
  );
}
