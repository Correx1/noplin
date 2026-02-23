import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Conversion-First Web Design™ | Noplin Digital',
  description: 'Professional web design services. Websites built to rank, convert, and impress — delivered in 7–10 days. Starting from ₦300,000.',
};

export default function WebDesignPage() {
  return (
    <ServicePageTemplate
      serviceName="Conversion-First Web Design™"
      department="Web & Dev"
      leadSpecialist="Gilbert"
      tagline="Websites that rank, convert, and impress — built for your business goals, not just aesthetics."
      startingPrice="From ₦300,000"
      turnaround="7–10 days"
      whatItIncludes={[
        'Custom responsive design',
        'Mobile-first development',
        'SEO-optimized structure',
        'CMS integration',
        'Contact form setup',
        'Google Analytics integration',
        '3 rounds of revisions',
        '30-day post-launch support',
      ]}
      pricingTiers={[
        {
          name: 'Starter',
          price: '₦300,000',
          turnaround: '7 days',
          bestFor: 'Businesses needing a quick, high-converting online presence',
          includes: ['Landing page (1 page)', 'Mobile responsive', 'Contact form', 'SEO setup', 'Google Analytics'],
        },
        {
          name: 'Growth',
          price: '₦600,000',
          turnaround: '10–14 days',
          bestFor: 'SMEs needing a full professional website',
          includes: ['Business website (5–8 pages)', 'CMS integration', '2 rounds of revisions', 'SEO optimization', 'Analytics + speed optimization'],
          best: true,
        },
        {
          name: 'Premium',
          price: '₦1,500,000+',
          turnaround: '3–4 weeks',
          bestFor: 'Businesses wanting maximum impact and custom functionality',
          includes: ['10+ pages', 'Custom features & integrations', '3 rounds of revisions', 'Post-launch support (30 days)', 'Full SEO + performance audit'],
        },
      ]}
      whoItsFor="Business owners, startup founders, and corporate teams who need a professional online presence that actually generates leads — not just a pretty page."
      process={[
        { step: '01', title: 'Discovery & Brief', description: 'We learn your goals, audience, and brand — then create a clear project scope.' },
        { step: '02', title: 'Design Mockup', description: 'You approve the full design direction before a single line of code is written.' },
        { step: '03', title: 'Build', description: 'We develop the site with clean code, speed optimization, and SEO baked in.' },
        { step: '04', title: 'Launch', description: 'Final testing, your approval, then live deployment with 30 days of support.' },
      ]}
      complementaryServices={[
        { name: 'Brand Identity™', url: '/services/brand-identity' },
        { name: 'Authority Content™ (SEO)', url: '/services/seo-content' },
        { name: 'Precision Ad Campaigns™', url: '/services/paid-ads' },
      ]}
      faqs={[
        { question: 'Do you build on WordPress?', answer: 'We build custom or on your preferred CMS (WordPress, Webflow, or Next.js). We recommend the right platform for your needs and budget.' },
        { question: 'Do you offer hosting?', answer: 'We do not host sites directly, but we recommend reliable hosting providers and help you set everything up for a smooth launch.' },
        { question: 'What do I need to provide?', answer: 'We will need your content (text, images, logo), your brand colors and fonts if you have them, and any specific functionality requirements. We can help with content if needed.' },
        { question: 'Can I update the site myself?', answer: 'Yes. We integrate a CMS and provide a walkthrough so you can make updates independently — no technical skills required.' },
      ]}
    />
  );
}
