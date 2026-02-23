import type { Metadata } from 'next';
import WorkPageClient from '../components/work/WorkPageClient';

export const metadata: Metadata = {
  title: 'Our Work | Noplin Digital Portfolio',
  description: "Browse Noplin Digital's portfolio of web design, brand identity, and digital marketing projects.",
};

export default function WorkPage() {
  return <WorkPageClient />;
}
