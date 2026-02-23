import type { Metadata } from 'next';
import PricingPageClient from '../components/pricing/PricingPageClient';

export const metadata: Metadata = {
  title: 'Pricing | Noplin Digital Services',
  description: 'Transparent pricing for all 15 Noplin Digital services. Starter to Premium tiers for every budget.',
};

export default function PricingPage() {
  return <PricingPageClient />;
}
