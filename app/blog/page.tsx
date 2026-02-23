import type { Metadata } from 'next';
import BlogPageClient from '../components/blog/BlogPageClient';

export const metadata: Metadata = {
  title: 'Blog & Insights | Noplin Digital',
  description: 'Digital marketing guides, web design tips, and business growth strategies from the Noplin Digital team.',
};

export default function BlogPage() {
  return <BlogPageClient />;
}
