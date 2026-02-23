import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'A-Grade Brand Identity™ | Noplin Digital',
  description: 'Professional brand identity design — logos, brand kits, and visual systems built to make your business unforgettable. Starting from ₦80,000.',
};

export default function BrandIdentityPage() {
  return (
    <ServicePageTemplate
      serviceName="A-Grade Brand Identity™"
      department="Design"
      leadSpecialist="Malachy"
      tagline="Logos, visual systems, and brand kits that make your business unforgettable and command premium positioning."
      startingPrice="From ₦80,000"
      turnaround="3–5 days"
      whatItIncludes={[
        'Primary logo design',
        'Alternate logo versions (horizontal, stacked, icon)',
        'Brand color palette',
        'Typography system',
        'Business card design',
        'Brand style guide PDF',
        'All source files (AI, EPS, PNG, SVG)',
        '2 revision rounds',
      ]}
      pricingTiers={[
        {
          name: 'Starter',
          price: '₦80,000',
          turnaround: '3–5 days',
          bestFor: 'New businesses needing a clean, professional logo fast',
          includes: ['Core logo design', 'Color palette', '1 brand asset', 'PNG + SVG files', '2 revision rounds'],
        },
        {
          name: 'Growth',
          price: '₦200,000',
          turnaround: '5–7 days',
          bestFor: 'Growing businesses that need a complete, consistent brand identity',
          includes: ['Logo suite (primary, alt, icon)', 'Full color palette', 'Typography system', 'Stationery design', 'Brand style guide'],
          best: true,
        },
        {
          name: 'Premium',
          price: '₦500,000',
          turnaround: '7–10 days',
          bestFor: 'Established businesses wanting a comprehensive, investor-ready brand system',
          includes: ['Everything in Growth', 'Extended brand guidelines doc', 'Social media templates', 'Presentation template', 'Brand application mockups'],
        },
      ]}
      whoItsFor="Startups, new businesses, and established brands due for a refresh who want a visual identity that communicates premium, builds trust, and stands out in their market — locally and globally."
      process={[
        { step: '01', title: 'Brand Discovery', description: 'We gather your brand values, audience, competitors, and vision through a detailed brief.' },
        { step: '02', title: 'Concept Design', description: 'Our designer creates 2–3 distinct concept directions for you to review.' },
        { step: '03', title: 'Refinement', description: 'You select your preferred direction and we refine until it is perfect.' },
        { step: '04', title: 'Delivery', description: 'All final files delivered in every format you will ever need.' },
      ]}
      complementaryServices={[
        { name: 'Web Design™', url: '/services/web-design' },
        { name: 'Pitch Deck & Presentation™', url: '/services/pitch-deck' },
        { name: 'Social Growth Engine™', url: '/services/social-media' },
      ]}
      faqs={[
        { question: 'How many logo concepts do I get?', answer: 'Depending on your tier, you receive 2–3 distinct concept directions to choose from, then unlimited refinements within the revision rounds included in your package.' },
        { question: 'What files will I receive?', answer: 'You receive all source files: AI, EPS, SVG, PNG (transparent background), and PDF — in both color and black and white versions.' },
        { question: 'Do you do rebrands?', answer: 'Yes. Rebrands are welcome. We treat them the same as new projects — clean slate, full discovery, new identity built to match where your business is going.' },
        { question: 'How do revisions work?', answer: 'Revisions are done in rounds. Each round, you provide consolidated feedback and we apply all changes. Starter includes 2 rounds, Growth and Premium include 3 rounds.' },
      ]}
    />
  );
}
