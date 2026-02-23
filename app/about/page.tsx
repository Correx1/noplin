import type { Metadata } from 'next';
import AboutPageClient from '../components/about/AboutPageClient';

export const metadata: Metadata = {
  title: 'About Noplin Digital | Premium Digital Agency',
  description: 'Meet the results-obsessed team behind Noplin Digital. Based in Nigeria, serving clients globally.',
};

export default function AboutPage() {
  return <AboutPageClient />;
}
