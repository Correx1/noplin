import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Conversion Copy™ | Noplin Digital',
  description: 'Website copy, landing pages, and ad copy that drives action. Written to convert. From ₦50,000.',
};

export default function ConversionCopyPage() {
  return (
    <ServicePageTemplate
      serviceName="Conversion Copy™"
      department="Content"
      leadSpecialist="Funke"
      tagline="Website copy, landing pages, and ad copy written to stop scrolling and drive immediate action."
      startingPrice="From ₦50,000"
      turnaround="3–5 days"
      whatItIncludes={[
        'Headline & subheadline copy',
        'Body copy & value propositions',
        'CTA writing & placement guidance',
        'Brand voice alignment',
        'SEO keyword integration',
        '2 revision rounds',
        'Final document delivery',
        'Copy strategy notes',
      ]}
      pricingTiers={[
        {
          name: 'Starter',
          price: '₦50,000',
          turnaround: '3–5 days',
          bestFor: 'One page or ad copy set that needs to convert',
          includes: ['1 page copy OR ad copy set', 'Headline + body + CTA', 'Brand voice alignment', '2 revision rounds'],
        },
        {
          name: 'Growth',
          price: '₦150,000',
          turnaround: '5–7 days',
          bestFor: 'Full websites needing consistent, conversion-focused copy',
          includes: ['Full website copy (5 pages)', 'Home, About, Services, Contact, CTA pages', 'Brand voice guide', '3 revision rounds', 'Copy strategy doc'],
          best: true,
        },
        {
          name: 'Premium',
          price: '₦300,000',
          turnaround: '7–10 days',
          bestFor: 'Full-funnel copy covering every customer touchpoint',
          includes: ['Website copy (5+ pages)', 'Email sequence copy', 'Ad copy (3 campaigns)', 'Landing page copy', 'Full brand voice guide', 'Unlimited revisions'],
        },
      ]}
      whoItsFor="Business owners, marketing teams, and founders who know their product is great but their copy isn't doing it justice — and want words that actually move people to act."
      process={[
        { step: '01', title: 'Discovery Brief', description: 'You fill in our copy brief covering your audience, product, tone, and goals.' },
        { step: '02', title: 'Copy Draft', description: 'We write the full copy and share a Google Doc for your review.' },
        { step: '03', title: 'Revisions', description: 'You give feedback, we refine. Repeat within revision rounds.' },
        { step: '04', title: 'Final Delivery', description: 'Clean final document ready to go straight into your website or campaign.' },
      ]}
      complementaryServices={[
        { name: 'Conversion-First Web Design™', url: '/services/web-design' },
        { name: 'Revenue Email System™', url: '/services/email-marketing' },
        { name: 'Precision Ad Campaigns™', url: '/services/paid-ads' },
      ]}
      faqs={[
        { question: 'Do I need to brief you on my business?', answer: 'Yes — we use a detailed copy brief to understand your audience, product, and goals before writing a single word. The brief takes about 20 minutes to fill in.' },
        { question: 'Can you match my existing brand voice?', answer: 'Yes. Share examples of content you like and we will match or improve on your existing voice.' },
        { question: 'How are revisions handled?', answer: 'Each revision round, you provide consolidated feedback and we apply all changes. This ensures efficient turnarounds without endless back-and-forth.' },
        { question: 'Do you write for any industry?', answer: 'Yes — we write across all industries. With your brief and our research process, we get up to speed fast.' },
      ]}
    />
  );
}
