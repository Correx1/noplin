'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from '../ui/WhatsAppButton';
import DarkModeBackground from './DarkModeBackground';

export default function ConditionalLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith('/studio');

  return (
    <>
      {!isStudio && <DarkModeBackground />}
      {!isStudio && <Navbar />}
      {children}
      {!isStudio && <Footer />}
      {!isStudio && <WhatsAppButton />}
    </>
  );
}
