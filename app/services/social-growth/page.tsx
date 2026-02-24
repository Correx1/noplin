import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Social Growth Engine™ | Noplin Digital',
  description: 'Full social media management that grows real audiences and drives genuine engagement. Starting from ₦80,000/month.',
};

export default function SocialMediaPage() {
  return (
    <ServicePageTemplate
      serviceName="Social Growth Engine™"
      department="Marketing"
      about=""
      leadSpecialist="Jessica"
      tagline="Full social media management that grows real audiences, drives genuine engagement, and builds brands people actually love."
      startingPrice="From ₦80,000/mo"
      turnaround="Ongoing"
      whatItIncludes={[
        'Content calendar planning',
        'Post creation & design',
        'Caption writing',
        'Hashtag strategy',
        'Community management',
        'Story & reel creation',
        'Platform-specific optimization',
        'Monthly analytics report',
      ]}
      pricingTiers={[
        {
          name: 'Starter',
          price: '₦80,000/mo',
          turnaround: 'Ongoing',
          bestFor: 'Businesses establishing a consistent social media presence',
          includes: ['2 platforms', '12 posts/month', 'Caption writing', 'Basic hashtag strategy', 'Monthly report'],
        },
        {
          name: 'Growth',
          price: '₦150,000/mo',
          turnaround: 'Ongoing',
          bestFor: 'Brands ready to scale their social presence and engagement',
          includes: ['3 platforms', '20 posts/month', 'Stories & reels', 'Community management', 'Engagement strategy', 'Bi-weekly check-in'],
          best: true,
        },
        {
          name: 'Premium',
          price: '₦300,000/mo',
          turnaround: 'Ongoing',
          bestFor: 'Brands that want complete, fully managed social media dominance',
          includes: ['All platforms', 'Full management + daily engagement', 'Video content creation', 'Influencer outreach guidance', 'Weekly reports', 'Dedicated social manager'],
        },
      ]}
      whoItsFor="Business owners and marketing managers who know social media matters but do not have the time, skills, or team to run it properly — and want it handled by people who actually understand what drives growth."
      process={[
        { step: '01', title: 'Social Audit', description: 'We review your existing profiles, competitors, and audience to define your content strategy.' },
        { step: '02', title: 'Strategy & Calendar', description: 'A full content strategy and monthly calendar approved by you before anything is posted.' },
        { step: '03', title: 'Create & Post', description: 'We create, design, and publish all content on schedule.' },
        { step: '04', title: 'Engage & Report', description: 'Community management and monthly reports on growth and engagement metrics.' },
      ]}
      complementaryServices={[
        { name: 'Precision Ad Campaigns™', url: '/services/paid-ads' },
        { name: 'Video Script & Editing™', url: '/services/video-content' },
        { name: 'Brand Identity™', url: '/services/brand-identity' },
      ]}
      faqs={[
        { question: 'Which social platforms do you manage?', answer: 'Instagram, LinkedIn, TikTok, Twitter/X, Facebook, and YouTube. We recommend the best platforms for your audience during onboarding.' },
        { question: 'Do I need to approve posts before they go live?', answer: 'Yes — we share the full content calendar for approval before scheduling. You review everything in advance.' },
        { question: 'Do you run social ads as well?', answer: 'Organic social management and paid social ads are separate services. We recommend combining them for maximum reach — see our Paid Ads service.' },
        { question: 'How do you measure success?', answer: 'We track follower growth, engagement rate, reach, impressions, and profile visits. Monthly reports include all key metrics with commentary on trends.' },
      ]}
    />
  );
}
