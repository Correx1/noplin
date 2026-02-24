import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Revenue Email System™ | Noplin Digital',
  description: 'Automated email sequences and campaigns that sell while you sleep. Starting from ₦60,000/month.',
};

export default function EmailMarketingPage() {
  return (
    <ServicePageTemplate
      serviceName="Revenue Email System™"
      department="Content"
      leadSpecialist="Funke"
      about=""
      tagline="Automated email sequences and campaigns that nurture leads, build loyalty, and sell while you sleep."
      startingPrice="From ₦60,000/mo"
      turnaround="Ongoing"
      whatItIncludes={[
        'Email strategy & planning',
        'Copywriting for all emails',
        'Email template design',
        'Automation setup',
        'List segmentation',
        'A/B testing',
        'Monthly performance reports',
        'Platform management',
      ]}
      pricingTiers={[
        {
          name: 'Starter',
          price: '₦60,000/mo',
          turnaround: 'Ongoing',
          bestFor: 'Businesses starting email marketing with a newsletter and basic sequences',
          includes: ['Monthly newsletter', 'Basic welcome sequence (3 emails)', 'Template design', 'Open rate reporting'],
        },
        {
          name: 'Growth',
          price: '₦130,000/mo',
          turnaround: 'Ongoing',
          bestFor: 'Businesses ready to automate and scale email revenue',
          includes: ['Full drip campaign', 'Automation sequences', 'List segmentation', 'A/B testing', 'Bi-monthly strategy call', 'Detailed analytics'],
          best: true,
        },
        {
          name: 'Premium',
          price: '₦250,000/mo',
          turnaround: 'Ongoing',
          bestFor: 'Businesses running a complete email revenue engine',
          includes: ['Complete revenue email system', 'All automation flows', 'Advanced segmentation', 'Re-engagement campaigns', 'Weekly reports', 'Dedicated strategist'],
        },
      ]}
      whoItsFor="E-commerce stores, service businesses, and content creators who have an email list (or want to build one) and need a system that consistently converts subscribers into paying customers."
      process={[
        { step: '01', title: 'Email Audit & Strategy', description: 'We review your existing email setup, define your automation goals, and map out your full email customer journey.' },
        { step: '02', title: 'Copy & Design', description: 'We write and design all email templates, sequences, and campaigns.' },
        { step: '03', title: 'Setup & Automate', description: 'Everything is built and automated in your preferred email platform.' },
        { step: '04', title: 'Monitor & Optimize', description: 'Monthly reviews, A/B tests, and continuous improvement based on data.' },
      ]}
      complementaryServices={[
        { name: 'Conversion Copy™', url: '/services/conversion-copy' },
        { name: 'Social Growth Engine™', url: '/services/social-media' },
        { name: 'Precision Ad Campaigns™', url: '/services/paid-ads' },
      ]}
      faqs={[
        { question: 'What email platforms do you work with?', answer: 'We work with Mailchimp, MailerLite, Klaviyo, ConvertKit, ActiveCampaign, and most other major platforms. We can recommend the right one for your business.' },
        { question: 'Do I need an existing email list?', answer: 'No — we can help you build your list as part of the strategy. We will recommend lead magnets and opt-in strategies as part of your plan.' },
        { question: 'How often will emails be sent?', answer: 'The frequency depends on your strategy tier. Typically 2–4 emails per month for newsletters, plus automated sequences triggered by user actions.' },
        { question: 'Can you migrate my existing email list?', answer: 'Yes — list migration and cleanup (removing inactive subscribers) is included in the setup phase.' },
      ]}
    />
  );
}
