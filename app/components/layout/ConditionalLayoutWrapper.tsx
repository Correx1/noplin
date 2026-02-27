'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from '../ui/WhatsAppButton';

export default function ConditionalLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith('/studio');

  return (
    <>
      {!isStudio && <Navbar />}
      {children}
      {!isStudio && <Footer />}
      {!isStudio && <WhatsAppButton />}
    </>
  );
}
