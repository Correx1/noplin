import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'MVP Development for Startups™ | Noplin Digital',
  description: 'Launch your startup idea fast with a built-to-scale MVP. Starting from ₦400,000, delivered in 3–6 weeks.',
};

export default function MvpDevelopmentPage() {
  return (
    <ServicePageTemplate
      serviceName="MVP Development for Startups™"
      department="Web & Dev"
      leadSpecialist="Gilbert"
      tagline="Launch your startup idea fast with a built-to-scale MVP — test the market without wasting runway."
      startingPrice="From ₦400,000"
      turnaround="3–6 weeks"
      whatItIncludes={[
        'Product scoping & feature mapping',
        'UI/UX design',
        'Core feature development',
        'User authentication',
        'Testing & QA',
        'Deployment',
        'Handover documentation',
        'Post-launch guidance',
      ]}
      pricingTiers={[
        {
          name: 'Starter',
          price: '₦400,000',
          turnaround: '3–4 weeks',
          bestFor: 'Proving one core idea with minimal features',
          includes: ['1 core feature set', 'Basic UI design', 'User auth', 'Deployment', 'Handover docs'],
        },
        {
          name: 'Growth',
          price: '₦800,000',
          turnaround: '4–6 weeks',
          bestFor: 'Full MVP with user system ready for beta launch',
          includes: ['Full feature set', 'User system & roles', 'Dashboard', 'API layer', 'Basic admin panel', 'Documentation'],
          best: true,
        },
        {
          name: 'Premium',
          price: '₦1,500,000',
          turnaround: '6–8 weeks',
          bestFor: 'Production-ready MVP built for investor demos and real users',
          includes: ['Production-grade code', 'Full user system', 'Payment integration', '30-day post-launch support', 'Scalable architecture', 'Full handover package'],
        },
      ]}
      whoItsFor="Startup founders and entrepreneurs who have a validated idea and need to move fast — without compromising on code quality or scalability."
      process={[
        { step: '01', title: 'Discovery', description: 'We map your core user journey, must-have features, and define the MVP scope.' },
        { step: '02', title: 'Design', description: 'Clean UI/UX designed and approved before development starts.' },
        { step: '03', title: 'Build', description: 'Focused development on your core feature set — nothing extra, nothing missing.' },
        { step: '04', title: 'Launch & Handover', description: 'Deployed, tested, and handed over with documentation so your team can own it.' },
      ]}
      complementaryServices={[
        { name: 'Digital Strategy Consulting™', url: '/services/strategy-consulting' },
        { name: 'Custom Web App Development™', url: '/services/web-app-development' },
        { name: 'Brand Identity™', url: '/services/brand-identity' },
      ]}
      faqs={[
        { question: 'How do you decide what goes into the MVP?', answer: 'We run a scoping session to identify your single most critical user journey and build around that. Everything else is deferred to v2.' },
        { question: 'Can I add features after launch?', answer: 'Yes — we build MVPs with extensibility in mind. We can continue as your dev partner for ongoing feature releases.' },
        { question: 'Do you help with product strategy?', answer: 'Basic product guidance is included. For a full digital strategy, we recommend pairing this with our Strategy Consulting service.' },
        { question: 'What if I already have designs?', answer: 'Great — we can work from your existing designs and go straight into development, potentially reducing the timeline and cost.' },
      ]}
    />
  );
}
