import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Pitch Deck & Presentation™ | Noplin Digital',
  description: 'Investor-ready pitch decks and presentations that command attention. Starting from ₦80,000, delivered in 3–5 days.',
};

export default function PitchDeckPage() {
  return (
    <ServicePageTemplate
      serviceName="Pitch Deck & Presentation™"
      department="Design"
      leadSpecialist="Malachy"
      about=""
      tagline="Investor-ready pitch decks and presentations that command attention and win rooms."
      startingPrice="From ₦80,000"
      turnaround="3–5 days"
      whatItIncludes={[
        'Slide design & layout',
        'Content structuring',
        'Data visualization',
        'Brand-consistent styling',
        'Speaker notes (Growth+)',
        'PDF + PowerPoint delivery',
        '2 revision rounds',
        'Source files included',
      ]}
      pricingTiers={[
        {
          name: 'Starter',
          price: '₦80,000',
          turnaround: '3–5 days',
          bestFor: 'Teams needing a clean, professional standard deck',
          includes: ['10-slide deck', 'Brand-consistent design', 'PDF + PPTX delivery', '2 revision rounds'],
        },
        {
          name: 'Growth',
          price: '₦150,000',
          turnaround: '3–5 days',
          bestFor: 'Startups pitching to investors or partners',
          includes: ['20-slide investor deck', 'Speaker notes', 'Data visualization', 'PDF + PPTX delivery', '3 revision rounds'],
          best: true,
        },
        {
          name: 'Premium',
          price: '₦250,000',
          turnaround: '5–7 days',
          bestFor: 'High-stakes pitches that must win every time',
          includes: ['Premium animated deck', 'Speaker coaching session', 'Full narrative structure', 'PDF + PPTX + video export', 'Unlimited revisions'],
        },
      ]}
      whoItsFor="Startup founders, executives, and sales teams who need to walk into a room — or onto a screen — and immediately command attention and credibility."
      process={[
        { step: '01', title: 'Brief & Content', description: 'You share your content, goals, and audience. We structure the narrative.' },
        { step: '02', title: 'Design Draft', description: 'We design the full deck and share for review.' },
        { step: '03', title: 'Revisions', description: 'We apply your feedback until every slide is exactly right.' },
        { step: '04', title: 'Final Delivery', description: 'PDF + PPTX files delivered with all source files.' },
      ]}
      complementaryServices={[
        { name: 'Brand Identity™', url: '/services/brand-identity' },
        { name: 'Digital Strategy Consulting™', url: '/services/strategy-consulting' },
        { name: 'Conversion Copy™', url: '/services/conversion-copy' },
      ]}
      faqs={[
        { question: 'Do I need to provide the content?', answer: 'Yes — you provide the raw content and we structure and design it. If you need help with the narrative and copy, we can add that as a Conversion Copy add-on.' },
        { question: 'Can you match my existing brand?', answer: 'Yes. Provide your brand guidelines or logo and we will build a deck that is perfectly on-brand.' },
        { question: 'What format is the final delivery?', answer: 'PDF and PowerPoint (.pptx). Premium tier also includes a video export for digital sharing.' },
        { question: 'Do you do animated slides?', answer: 'Yes — animations are included in the Premium tier. Basic transitions are included in all tiers.' },
      ]}
    />
  );
}
