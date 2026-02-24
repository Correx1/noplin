import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Authority Content™ (SEO) | Noplin Digital',
  description: 'SEO blog content that ranks on Google and converts readers into leads. Starting from ₦60,000/month.',
};

export default function SeoContentPage() {
  return (
    <ServicePageTemplate
      serviceName="Authority Content™ (SEO)"
      department="Content"
      leadSpecialist="Funke"
      about=""
      tagline="SEO blog content that ranks on Google and converts readers into leads — written by experts, not AI."
      startingPrice="From ₦60,000/mo"
      turnaround="Ongoing"
      whatItIncludes={[
        'Keyword research & strategy',
        'SEO-optimized blog articles',
        'Meta titles & descriptions',
        'Internal linking strategy',
        'Content calendar',
        'Monthly performance report',
        'Topic cluster planning',
        'Competitor gap analysis',
      ]}
      pricingTiers={[
        {
          name: 'Starter',
          price: '₦60,000/mo',
          turnaround: 'Ongoing',
          bestFor: 'Businesses starting their content marketing journey',
          includes: ['4 articles/month', 'Basic keyword research', 'SEO optimization', 'Meta descriptions', 'Monthly report'],
        },
        {
          name: 'Growth',
          price: '₦130,000/mo',
          turnaround: 'Ongoing',
          bestFor: 'Businesses serious about ranking and organic lead generation',
          includes: ['8 articles/month', 'Full keyword strategy', 'Topic cluster planning', 'Internal linking', 'Competitor analysis', 'Monthly strategy call'],
          best: true,
        },
        {
          name: 'Premium',
          price: '₦250,000/mo',
          turnaround: 'Ongoing',
          bestFor: 'Brands that want to dominate their niche on Google',
          includes: ['12+ articles/month', 'Full SEO strategy', 'Content calendar management', 'Performance tracking', 'Quarterly strategy review', 'Link building guidance'],
        },
      ]}
      whoItsFor="Business owners, marketing managers, and founders who understand that organic search is the highest-ROI marketing channel — and want to build it properly with expert-written content."
      process={[
        { step: '01', title: 'SEO Audit & Strategy', description: 'We audit your existing content, identify keyword opportunities, and build a 3-month content strategy.' },
        { step: '02', title: 'Content Calendar', description: 'A full calendar of topics approved by you before writing begins.' },
        { step: '03', title: 'Write & Optimize', description: 'Expert-written articles optimized for your target keywords and your brand voice.' },
        { step: '04', title: 'Publish & Report', description: 'We publish (or hand over to you) and report on ranking progress monthly.' },
      ]}
      complementaryServices={[
        { name: 'Conversion-First Web Design™', url: '/services/web-design' },
        { name: 'Conversion Copy™', url: '/services/conversion-copy' },
        { name: 'Precision Ad Campaigns™', url: '/services/paid-ads' },
      ]}
      faqs={[
        { question: 'Do you use AI to write?', answer: 'No. All content is written by expert human writers. We use AI for research and optimization only — never for the final copy.' },
        { question: 'How long before I see rankings?', answer: 'SEO is a 3–6 month game. Most clients see meaningful movement within 90 days and significant organic traffic growth within 6 months of consistent publishing.' },
        { question: 'Do you publish directly to my blog?', answer: 'Yes — with CMS access, we publish directly. Otherwise, we deliver fully formatted, ready-to-publish articles.' },
        { question: 'Can you write about any industry?', answer: 'Yes. We research every topic thoroughly. We have written for tech, finance, health, e-commerce, real estate, and more.' },
      ]}
    />
  );
}
