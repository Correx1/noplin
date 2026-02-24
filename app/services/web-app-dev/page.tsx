import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Custom Web App Development™ | Noplin Digital',
  description: 'Scalable web applications built on Laravel. From core apps to enterprise platforms. Starting from ₦500,000.',
};

export default function WebAppDevelopmentPage() {
  return (
    <ServicePageTemplate
      serviceName="Custom Web App Development™"
      department="Web & Dev"
      leadSpecialist="Gilbert"
      about="We build custom web applications using Laravel — from core business apps to complex enterprise platforms. Engineered for performance, built for growth."
      tagline="Scalable web applications built on Laravel — engineered for performance, built for growth."
      startingPrice="From ₦500,000"
      turnaround="4–8 weeks"
      whatItIncludes={[
        'Laravel backend development',
        'React or Vue frontend',
        'Database architecture & design',
        'REST API development',
        'Admin panel & dashboard',
        'User authentication & roles',
        'Deployment & server config',
        'Technical documentation',
      ]}
      pricingTiers={[
        {
          name: 'Starter',
          price: '₦500,000',
          turnaround: '4–5 weeks',
          bestFor: 'Teams needing a focused web app with core features',
          includes: ['Laravel backend', 'Core feature set', 'Basic admin panel', 'Database design', 'Deployment'],
        },
        {
          name: 'Growth',
          price: '₦1,200,000',
          turnaround: '6–8 weeks',
          bestFor: 'Mid-scale apps needing user systems and dashboards',
          includes: ['Full Laravel + React app', 'User auth & roles', 'Custom dashboard', 'API development', 'Admin panel', 'Technical docs'],
          best: true,
        },
        {
          name: 'Premium',
          price: '₦2,500,000+',
          turnaround: '8–12 weeks',
          bestFor: 'Enterprise-grade applications at full scale',
          includes: ['Full-scale enterprise app', 'Advanced integrations', 'Multi-tenant support', 'Performance optimization', '90-day support', 'Full documentation'],
        },
      ]}
      whoItsFor="Businesses, startups, and enterprises that need a custom web application — built properly, built to last, and built to scale — not a template or a no-code workaround."
      process={[
        { step: '01', title: 'Scoping & Architecture', description: 'We define requirements, user flows, and technical architecture before writing a line of code.' },
        { step: '02', title: 'Design & Prototype', description: 'UI/UX designed and approved before development begins.' },
        { step: '03', title: 'Development', description: 'Backend and frontend developed in sprints with regular progress updates.' },
        { step: '04', title: 'Testing & Launch', description: 'Full QA, bug fixes, deployment, and handover with documentation.' },
      ]}
      complementaryServices={[
        { name: 'MVP Development™', url: '/services/mvp-development' },
        { name: 'API Development & Integration™', url: '/services/api-integration' },
        { name: 'Digital Strategy Consulting™', url: '/services/strategy-consulting' },
      ]}
      faqs={[
        { question: 'What tech stack do you use?', answer: 'Our primary stack is Laravel (PHP) for the backend, with React or Vue for the frontend. We can also work with other stacks on a case-by-case basis.' },
        { question: 'Who hosts the application?', answer: 'We handle deployment to your preferred hosting provider (AWS, DigitalOcean, VPS, etc.). We can recommend and set up the right infrastructure for your scale.' },
        { question: 'Do you build mobile apps?', answer: 'We build web apps accessible on all devices. Native iOS/Android development is not currently in scope, but React Native projects can be discussed.' },
        { question: 'What happens after delivery?', answer: 'Growth and Premium tiers include post-launch support. We also offer monthly maintenance retainers for ongoing updates and monitoring.' },
      ]}
    />
  );
}
