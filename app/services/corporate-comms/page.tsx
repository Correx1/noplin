import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Corporate Comms Suite™ | Noplin Digital',
  description: 'Business proposals, reports, internal newsletters, and official communications. Starting from ₦30,000.',
};

export default function CorporateCommsPage() {
  return (
    <ServicePageTemplate
      serviceName="Corporate Comms Suite™"
      department="Content"
      leadSpecialist="Funke"
      about=""
      tagline="Professional business proposals, reports, and corporate communications that reflect your organization's excellence."
      startingPrice="From ₦30,000"
      turnaround="2–3 days"
      whatItIncludes={[
        'Business proposals',
        'Annual & quarterly reports',
        'Board presentations',
        'Internal newsletters',
        'Official letters & memos',
        'Brand-consistent formatting',
        'Copy editing & proofreading',
        'PDF & Word delivery',
      ]}
      pricingTiers={[
        {
          name: 'Starter',
          price: '₦30,000',
          turnaround: '2–3 days',
          bestFor: 'Businesses needing one polished corporate document',
          includes: ['1 document (proposal/report/letter)', 'Brand-consistent formatting', 'Copy editing', 'PDF + Word delivery', '2 revision rounds'],
        },
        {
          name: 'Growth',
          price: '₦80,000',
          turnaround: '3–5 days',
          bestFor: 'Teams needing a full corporate communications package',
          includes: ['3–5 documents', 'Full formatting suite', 'Brand voice alignment', 'Copy editing & proofreading', '3 revision rounds'],
          best: true,
        },
        {
          name: 'Premium',
          price: '₦150,000/mo',
          turnaround: 'Ongoing',
          bestFor: 'Organizations needing ongoing professional communications support',
          includes: ['Monthly comms retainer', 'Unlimited document types', 'Priority turnaround', 'Brand voice management', 'Dedicated comms writer'],
        },
      ]}
      whoItsFor="Executives, founders, and operations teams who need their organization's written communications to reflect professionalism, clarity, and credibility — every time."
      process={[
        { step: '01', title: 'Brief', description: 'You share the document type, purpose, audience, and any raw content or data.' },
        { step: '02', title: 'Draft', description: 'We structure, write, and format the document to your brand standards.' },
        { step: '03', title: 'Review', description: 'You review and give feedback within revision rounds.' },
        { step: '04', title: 'Deliver', description: 'Final document in PDF + editable Word/Google Docs format.' },
      ]}
      complementaryServices={[
        { name: 'Pitch Deck & Presentation™', url: '/services/pitch-deck' },
        { name: 'Brand Identity™', url: '/services/brand-identity' },
        { name: 'Digital Strategy Consulting™', url: '/services/strategy-consulting' },
      ]}
      faqs={[
        { question: 'What types of documents can you write?', answer: 'Business proposals, investor reports, annual reports, board meeting documents, RFPs, staff newsletters, official correspondence, policy documents, and more.' },
        { question: 'Do you proofread existing documents?', answer: 'Yes — proofreading and copy editing of existing documents is available as a standalone service. Contact us for a quote based on word count.' },
        { question: 'Can you match our company tone?', answer: 'Yes. Share samples of your existing communications and we will match your organizational voice and style.' },
        { question: 'How do you handle confidential documents?', answer: 'All client documents are treated with full confidentiality. We can sign an NDA before beginning work if required.' },
      ]}
    />
  );
}
