import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'E-Commerce Development™ | Noplin Digital',
  description: 'Online stores built for conversions and growth. Payment integration, product catalogue, mobile-optimized. From ₦400,000.',
};

export default function EcommerceDevelopmentPage() {
  return (
    <ServicePageTemplate
      serviceName="E-Commerce Development™"
      department="Web & Dev"
      leadSpecialist="Gilbert"
      tagline="Online stores built for conversions, growth, and seamless customer experiences."
      startingPrice="From ₦400,000"
      turnaround="2–4 weeks"
      whatItIncludes={[
        'Product catalogue & management',
        'Shopping cart & checkout',
        'Payment gateway integration',
        'Order management system',
        'Mobile-optimized design',
        'Product search & filters',
        'Inventory management',
        'Analytics integration',
      ]}
      pricingTiers={[
        {
          name: 'Starter',
          price: '₦400,000',
          turnaround: '2–3 weeks',
          bestFor: 'Small businesses launching their first online store',
          includes: ['Up to 50 products', 'Shopping cart', 'Basic payment gateway', 'Order management', 'Mobile responsive'],
        },
        {
          name: 'Growth',
          price: '₦750,000',
          turnaround: '3–4 weeks',
          bestFor: 'Growing businesses needing a full-featured store',
          includes: ['Unlimited products', 'Advanced payment integration', 'Coupon & discount system', 'Inventory management', 'Analytics dashboard'],
          best: true,
        },
        {
          name: 'Premium',
          price: '₦1,200,000',
          turnaround: '4–6 weeks',
          bestFor: 'Enterprises requiring a custom, high-volume e-commerce platform',
          includes: ['Custom features & integrations', 'Multi-currency support', 'Advanced analytics', 'ERP/CRM integration', '30-day post-launch support'],
        },
      ]}
      whoItsFor="Business owners, product brands, and retailers who want to sell online professionally — with a store that reflects their brand quality and actually converts visitors into customers."
      process={[
        { step: '01', title: 'Store Strategy', description: 'We define your catalogue structure, payment flow, and customer journey.' },
        { step: '02', title: 'Design', description: 'Custom store design approved before development.' },
        { step: '03', title: 'Build & Integrate', description: 'Full development including payment gateway setup and product upload.' },
        { step: '04', title: 'Test & Launch', description: 'End-to-end testing of every purchase flow, then go live.' },
      ]}
      complementaryServices={[
        { name: 'Conversion-First Web Design™', url: '/services/web-design' },
        { name: 'Precision Ad Campaigns™', url: '/services/paid-ads' },
        { name: 'Social Growth Engine™', url: '/services/social-media' },
      ]}
      faqs={[
        { question: 'What payment gateways do you integrate?', answer: 'We integrate Paystack, Flutterwave, Stripe, and PayPal depending on your market. We recommend the best option for your customer base.' },
        { question: 'Can I manage my own products after launch?', answer: 'Yes — we build with a CMS/admin panel so you can add, edit, and remove products without any technical knowledge.' },
        { question: 'Do you handle product upload?', answer: 'We handle the initial upload of your existing product catalogue. Ongoing updates are managed by you through the admin panel.' },
        { question: 'Can the store handle high traffic?', answer: 'Yes — we build on scalable infrastructure. For very high-traffic launches we recommend discussing your expected volume during scoping.' },
      ]}
    />
  );
}
