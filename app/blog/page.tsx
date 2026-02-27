import type { Metadata } from 'next';
import BlogPageClient from '../components/blog/BlogPageClient';
import { client } from '../../sanity/lib/client';
import { getAllPostsQuery } from '../../sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Blog & Insights | Noplin Digital',
  description: 'Digital marketing guides, web design tips, and business growth strategies from the Noplin Digital team.',
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  let posts: any[] = [];
  try {
    posts = await client.fetch(getAllPostsQuery);
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }
  
  return <BlogPageClient posts={posts} />;
}
