import type { Metadata } from 'next';
import ContactPageClient from '../components/contact/ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Noplin Digital | Get a Free Quote',
  description: 'Get in touch with Noplin Digital. We respond within 2 hours. Premium digital services for ambitious businesses.',
};

export default function ContactPage() {
  return <ContactPageClient />;
}
