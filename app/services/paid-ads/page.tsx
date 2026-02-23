import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Precision Ad Campaigns™ | Noplin Digital',
  description: 'Results-driven Google and Meta ad campaigns managed by specialists. Stop wasting ad spend — start getting real ROI.',
};

export default function PaidAdsPage() {
  return (
    <ServicePageTemplate
      serviceName="Precision Ad Campaigns™"
      department="Marketing"
      leadSpecialist="Benedict"
      tagline="Google and Meta ad campaigns managed by specialists — built to generate leads, sales, and measurable ROI."
      startingPrice="From ₦50,000 setup"
      turnaround="Ongoing"
      whatItIncludes={[
        'Campaign strategy & planning',
        'Ad copywriting',
        'Creative brief & direction',
        'Audience targeting setup',
        'A/B testing',
        'Weekly performance reports',
        'Monthly optimization reviews',
        'Dedicated campaign manager',
      ]}
      pricingTiers={[
        {
          name: 'Starter',
          price: '₦50,000/mo',
          turnaround: 'Ongoing',
          bestFor: 'Businesses testing paid ads for the first time',
          includes: ['1 platform (Meta OR Google)', 'Basic campaign setup', 'Monthly reports', 'Monthly optimization', '₦50,000+ ad budget recommended'],
        },
        {
          name: 'Growth',
          price: '₦120,000/mo',
          turnaround: 'Ongoing',
          bestFor: 'Businesses ready to scale with multi-platform advertising',
          includes: ['2 platforms (Meta + Google)', 'Advanced audience targeting', 'Bi-weekly reports', 'Creative testing', 'A/B split testing', '₦150,000+ ad budget recommended'],
          best: true,
        },
        {
          name: 'Premium',
          price: '₦250,000/mo',
          turnaround: 'Ongoing',
          bestFor: 'Businesses that want full-funnel dominance and maximum ROI',
          includes: ['Multi-platform campaigns', 'Full funnel strategy', 'Weekly reports', 'Dedicated strategist', 'International targeting', '₦500,000+ ad budget recommended'],
        },
      ]}
      whoItsFor="Business owners and marketing managers who want to stop wasting ad spend and start getting real ROI from Facebook, Instagram, and Google ads — across any market, globally."
      process={[
        { step: '01', title: 'Strategy Session', description: 'We audit your current setup (if any), define your goals, and build a campaign strategy.' },
        { step: '02', title: 'Campaign Setup', description: 'We set up ad accounts, audiences, creatives, and tracking — ready to launch.' },
        { step: '03', title: 'Launch & Monitor', description: 'Campaigns go live. We monitor daily and optimize in real time for best performance.' },
        { step: '04', title: 'Report & Scale', description: 'Regular reports, honest analysis, and scaling of what is working.' },
      ]}
      complementaryServices={[
        { name: 'Web Design™', url: '/services/web-design' },
        { name: 'Conversion Copy™', url: '/services/conversion-copy' },
        { name: 'Digital Strategy Consulting™', url: '/services/strategy-consulting' },
      ]}
      faqs={[
        { question: "What's the minimum ad budget?", answer: 'We recommend a minimum ad spend of ₦50,000/month for the Starter plan to see meaningful results. The management fee is separate from your ad spend.' },
        { question: 'Do you handle the creatives (images/videos)?', answer: 'We provide creative briefs and copy. Basic static ad creatives are included in Growth and Premium tiers. Video production is available as an add-on.' },
        { question: 'How long before I see results?', answer: 'Most campaigns begin showing data within the first 2 weeks. Optimized results typically appear within 30–45 days as the algorithm learns. We set realistic expectations from day one.' },
        { question: 'Do you run international campaigns?', answer: 'Yes. We run campaigns targeting any country or region. We have experience with Nigerian, African, UK, US, and global campaign audiences.' },
      ]}
    />
  );
}
