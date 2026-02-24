import type { Metadata } from 'next';
import ServicesPageClient from '../components/services/ServicesPageClient';

export const metadata: Metadata = {
  title: 'All Services | Noplin Digital — Digital Agency',
  description: '15 premium digital services across design, web development, content, and marketing. Clear pricing, fast delivery. Serving clients globally.',
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
