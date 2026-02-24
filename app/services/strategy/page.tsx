import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Digital Strategy Consulting™ | Noplin Digital',
  description: 'End-to-end digital strategy for CEOs and founders who want real competitive advantage. Starting from ₦1,000,000.',
};

export default function StrategyConsultingPage() {
  return (
    <ServicePageTemplate
      serviceName="Digital Strategy Consulting™"
      department="Marketing"
      leadSpecialist="CEO"
      about=""
      tagline="End-to-end digital strategy for serious business leaders who want real competitive advantage — not generic advice."
      startingPrice="From ₦1,000,000"
      turnaround="Project-based"
      whatItIncludes={[
        'Business & digital audit',
        'Competitor analysis',
        'Multi-channel strategy',
        'KPI framework & dashboards',
        'Implementation roadmap',
        'Quarterly review sessions',
        'Team training & enablement',
        'Executive briefings',
      ]}
      pricingTiers={[
        {
          name: 'Starter',
          price: '₦1,000,000',
          turnaround: '2–3 weeks',
          bestFor: 'CEOs needing a clear digital strategy and 90-day roadmap',
          includes: ['Full digital audit', '90-day strategy roadmap', 'Channel recommendations', 'KPI framework', 'Executive briefing session'],
        },
        {
          name: 'Growth',
          price: '₦2,000,000',
          turnaround: '6 months',
          bestFor: 'Businesses that need strategy plus implementation oversight',
          includes: ['Full strategy development', 'Implementation oversight (6 months)', 'Monthly strategy sessions', 'Team enablement', 'Quarterly reviews', 'KPI dashboards'],
          best: true,
        },
        {
          name: 'Premium',
          price: 'Custom',
          turnaround: 'Ongoing',
          bestFor: 'Organisations needing a fractional CMO/CDO on an ongoing basis',
          includes: ['Fractional CMO/CDO engagement', 'Board-level strategy', 'Full team oversight', 'Unlimited advisory access', 'Custom deliverables', 'Executive reporting'],
        },
      ]}
      whoItsFor="CEOs, founders, and senior executives who are spending money on digital but not seeing results — and want an expert to audit what is happening, fix the gaps, and build a strategy that delivers real competitive advantage."
      process={[
        { step: '01', title: 'Deep Audit', description: 'We audit your entire digital presence — website, ads, social, content, analytics, competitors — and identify exactly what is broken and what is working.' },
        { step: '02', title: 'Strategy Build', description: 'We build a custom multi-channel digital strategy aligned to your business goals and market position.' },
        { step: '03', title: 'Roadmap & Briefing', description: 'You receive a prioritized implementation roadmap and a full executive briefing session.' },
        { step: '04', title: 'Implement & Review', description: 'We oversee implementation (internal or with our services) and review quarterly against agreed KPIs.' },
      ]}
      complementaryServices={[
        { name: 'Precision Ad Campaigns™', url: '/services/paid-ads' },
        { name: 'Custom Web App Development™', url: '/services/web-app-development' },
        { name: 'Brand Identity™', url: '/services/brand-identity' },
      ]}
      faqs={[
        { question: 'Is this consulting or implementation?', answer: 'Primarily consulting and strategy — we tell you exactly what to do and why. Implementation can be handled by your team or by Noplin Digital as a separate engagement.' },
        { question: 'What size businesses is this for?', answer: 'This service is best suited for businesses with existing operations who need strategic clarity. We have worked with funded startups, SMEs, and established enterprises across multiple sectors.' },
        { question: 'What do I get as a deliverable?', answer: 'You receive a full digital strategy document, a prioritized 90-day action plan, a KPI dashboard template, and an executive briefing session. Higher tiers include ongoing oversight.' },
        { question: 'Can you implement the strategy as well?', answer: 'Yes — we can refer specific execution to the relevant Noplin service departments (ads, web, content, social). Many clients engage us for strategy first and then expand into implementation.' },
      ]}
    />
  );
}
