// Renamed to .tsx to support JSX payloads in the mock body property
import React from 'react';

export const categoryColors: Record<string, string> = {
  'Business Growth': '#F59E0B',
  'Web Design': '#1A56DB',
  'Brand Identity': '#06B6D4',
  'Paid Ads': '#8B5CF6',
  'Social Media': '#10B981',
  'Content & SEO': '#22C55E',
};

export type BlogPost = {
  id: string;
  categories: string[];
  title: string;
  excerpt: string;
  author: {
    name: string;
    image: string;
    bio?: string;
  };
  date: string;
  readTime: string;
  href: string;
  mainImage: string;
  body?: React.ReactNode;
};

// Generate 15 placeholder posts to support the 8/4 layout and pagination
export const posts: BlogPost[] = Array.from({ length: 15 }).map((_, i) => ({
  id: `post-${i + 1}`,
  categories: i % 3 === 0 ? ['Web Design', 'Strategy'] : i % 2 === 0 ? ['Brand Identity'] : ['Paid Ads', 'Business Growth'],
  title: [
    'Why Nigerian SMEs Are Losing Money on Digital Marketing',
    '5 Things Every Nigerian Business Website Must Have in 2026',
    'How to Build a Brand That Customers Actually Trust',
    'The Social Media Strategy That Works for Nigerian Businesses',
    'How to Run Meta Ads in Nigeria That Actually Convert',
  ][i % 5] + ` (Part ${Math.floor(i / 5) + 1})`,
  excerpt: 'Most businesses invest in digital marketing without a strategy — spending on ads, social media, and websites without a clear system. Here is what the most successful brands do differently.',
  author: {
    name: i % 2 === 0 ? 'Samuel Noplin' : 'Sarah Noplin',
    image: '/team/sam.jpg', 
    bio: 'A seasoned digital strategist specializing in high-conversion web experiences and uncompromising brand architecture.',
  },
  date: `February ${10 + i}, 2026`,
  readTime: `${4 + (i % 5)} min read`,
  href: `/blog/post-${i + 1}`,
  mainImage: `/portfolio/web${(i % 3) + 1}.png`,
 
}));

posts[0].body = (
  <div className="flex flex-col gap-6">
    <p className="text-xl font-medium leading-relaxed text-[#09090b] mb-8">
      Most businesses invest in digital marketing without a strategy — spending on ads, social media, and websites without a clear system. Here is what the most successful brands do differently. That single foundational principle separates the brands that scale effortlessly from the ones constantly burning entirely too much cash for too little return. Let's break down exactly what that looks like in practice.
    </p>

    <h2 style={{ fontFamily: 'var(--font-display)', color: '#09090b' }} className="text-2xl font-bold mt-12 mb-6">The Cost of Moving Without Direction</h2>
    <p>
      You’ve seen it happen. A business launches a massive advertising campaign, pours thousands of dollars into Meta and Google networks, only to realize their landing page is fundamentally broken on mobile devices, or worse, their brand messaging is completely misaligned with the traffic they are buying. 
    </p>
    <p>
      When we talk about "strategy" at Noplin, we aren't using a buzzword. We're talking about the architectural blueprints that dictate every single pixel, word, and campaign structure. It means knowing exactly what happens *after* the click, and exactly why the user clicked in the first place.
    </p>

    {/* Simulating inline images from Sanity Portable Text */}
    <div className="flex flex-col gap-8 my-12 not-prose">
      <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] rounded-xl overflow-hidden shadow-sm">
        <img src="/portfolio/web2.png" alt="Strategy chart" className="object-cover w-full h-full absolute inset-0" />
      </div>
    </div>

    <blockquote className="border-l-4 border-[#1A56DB] pl-6 my-10 italic text-[#09090b] font-medium bg-gray-50 py-4 pr-4 rounded-r-lg">
      "Design without strategy is just art. Art is beautiful, but strategy is what actually pays the bills and scales the business."
    </blockquote>

    <h3 style={{ fontFamily: 'var(--font-display)', color: '#09090b' }} className="text-xl font-bold mt-10 mb-5">Structuring the Perfect Layout</h3>
    <p>
      Consider the border-radius debate. On one side, heavily rounded buttons feel playful, human, and soft. On the other side, sharp monolithic edges feel uncompromising, premium, and institutional (think Stripe or Vercel). Neither is inherently wrong, but choosing one without understanding *who* you are selling to is a critical failure.
    </p>
    
    {/* Simulating a second inline image */}
    <div className="flex flex-col gap-8 my-12 not-prose">
      <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] rounded-xl overflow-hidden shadow-sm">
        <img src="/portfolio/app2.png" alt="Mobile app UI" className="object-cover w-full h-full absolute inset-0" />
      </div>
    </div>

    <p>
      In the end, every single touchpoint must align to build a coherent system. From the way your web traffic is routed, to how your sales forms collect information, right down to the color palette you use to highlight your primary call-to-actions.
    </p>
  </div>
);
