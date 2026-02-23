import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'API Development & Integration™ | Noplin Digital',
  description: 'Connect your tools, automate your workflows, and scale your operations with custom API development. From ₦150,000.',
};

export default function ApiIntegrationPage() {
  return (
    <ServicePageTemplate
      serviceName="API Development & Integration™"
      department="Web & Dev"
      leadSpecialist="Gilbert"
      tagline="Connect your tools, automate your workflows, and scale your operations with precision-built APIs."
      startingPrice="From ₦150,000"
      turnaround="1–3 weeks"
      whatItIncludes={[
        'API development (REST/GraphQL)',
        'Third-party API integration',
        'Webhook setup & management',
        'Authentication & security',
        'API documentation',
        'Automated testing',
        'Error handling & logging',
        'Deployment & monitoring',
      ]}
      pricingTiers={[
        {
          name: 'Starter',
          price: '₦150,000',
          turnaround: '1–2 weeks',
          bestFor: 'Teams needing a single API integration or connection',
          includes: ['1 API integration', 'Webhook setup', 'Basic documentation', 'Testing', 'Deployment'],
        },
        {
          name: 'Growth',
          price: '₦350,000',
          turnaround: '2–3 weeks',
          bestFor: 'Businesses connecting multiple systems and automating workflows',
          includes: ['3–5 API integrations', 'Workflow automation', 'Advanced documentation', 'Monitoring setup', 'Error logging'],
          best: true,
        },
        {
          name: 'Premium',
          price: '₦700,000',
          turnaround: '3–4 weeks',
          bestFor: 'Enterprise teams needing a full custom API ecosystem',
          includes: ['Custom API build', 'Full integration suite', 'API gateway setup', 'Security hardening', 'Full technical documentation', 'Ongoing support option'],
        },
      ]}
      whoItsFor="Development teams, operations managers, and business owners who need their software systems to talk to each other — reliably, securely, and automatically."
      process={[
        { step: '01', title: 'Technical Discovery', description: 'We map your systems, data flows, and define what needs to connect.' },
        { step: '02', title: 'Architecture Design', description: 'We design the integration architecture and get your approval.' },
        { step: '03', title: 'Build & Integrate', description: 'Development, testing, and connection of all specified systems.' },
        { step: '04', title: 'Handover', description: 'Full documentation, deployment, and team walkthrough.' },
      ]}
      complementaryServices={[
        { name: 'Custom Web App Development™', url: '/services/web-app-development' },
        { name: 'E-Commerce Development™', url: '/services/ecommerce-development' },
        { name: 'MVP Development for Startups™', url: '/services/mvp-development' },
      ]}
      faqs={[
        { question: 'What APIs do you integrate with?', answer: 'We integrate with any API — payment platforms, CRMs, ERPs, marketing tools, social platforms, analytics systems, and more. If it has an API, we can connect it.' },
        { question: 'Do you build custom APIs from scratch?', answer: 'Yes — Premium tier includes a fully custom API build. We design the schema, build the endpoints, document everything, and hand it over production-ready.' },
        { question: 'How do you handle API security?', answer: 'All APIs are built with authentication (JWT/OAuth), rate limiting, input validation, and HTTPS by default. Security is never an afterthought.' },
        { question: 'What if the integration breaks after launch?', answer: 'Growth and Premium tiers include a support window. We also offer maintenance retainers for ongoing monitoring and updates.' },
      ]}
    />
  );
}
