import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, DM_Sans } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import ThemeProvider from './components/providers/ThemeProvider';
import LenisProvider from './components/providers/LenisProvider';
import ConditionalLayoutWrapper from './components/layout/ConditionalLayoutWrapper';
import GoogleAnalytics from './components/analytics/GoogleAnalytics';
import MetaPixel from './components/analytics/MetaPixel';
import { OrganizationSchema } from './components/seo/JsonLd';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0D0D2B',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://noplin.com'),
  title: 'Noplin Digital — Premium Digital Agency Nigeria',
  description:
    'Results-obsessed digital agency delivering premium design, development, content and marketing. Trusted by startups, SMEs and growing businesses across Africa and beyond.',
  keywords:
    'digital agency Nigeria, web design agency Nigeria, brand identity design Nigeria',
  openGraph: {
    title: 'Noplin Digital — Premium Digital Agency Nigeria',
    description:
      'Results-obsessed digital agency delivering premium design, development, content and marketing.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
    siteName: 'Noplin Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noplin Digital — Premium Digital Agency Nigeria',
    description: 'Results-obsessed digital agency delivering premium design, development, content and marketing.',
    images: ['/opengraph-image'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: `try{if(localStorage.getItem('noplin-theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}` }} />
        <OrganizationSchema />
      </head>
      <body className="font-body overflow-x-hidden antialiased" style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)' }}>
        <ThemeProvider>
          <LenisProvider>
            <ConditionalLayoutWrapper>
              {children}
            </ConditionalLayoutWrapper>
          </LenisProvider>
        </ThemeProvider>
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
        <Suspense>
          <MetaPixel />
        </Suspense>
      </body>
    </html>
  );
}

