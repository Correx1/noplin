/**
 * Organization JSON-LD Structured Data
 * Place in root layout or homepage to signal to search engines who Noplin Digital is.
 */
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Noplin Digital',
    url: 'https://noplin.com',
    logo: 'https://noplin.com/logo.png',
    description:
      'Premium digital agency delivering design, development, content, and marketing for ambitious businesses across Africa and beyond.',
    email: 'hello@noplin.com',
    sameAs: [
      'https://instagram.com/noplindigital',
      'https://linkedin.com/company/noplindigital',
      'https://tiktok.com/@noplindigital',
      'https://x.com/noplindigital',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@noplin.com',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    areaServed: ['Nigeria', 'United Kingdom', 'United States', 'Africa'],
    foundingLocation: {
      '@type': 'Place',
      name: 'Lagos, Nigeria',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Service JSON-LD Structured Data
 * Import and use on each individual service page.
 */
interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  provider?: string;
  priceRange?: string;
  areaServed?: string;
}

export function ServiceSchema({
  name,
  description,
  url,
  provider = 'Noplin Digital',
  priceRange = '₦50,000–₦2,500,000',
  areaServed = 'Nigeria',
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `https://noplin.com${url}`,
    provider: {
      '@type': 'Organization',
      name: provider,
      url: 'https://noplin.com',
    },
    areaServed,
    priceRange,
    serviceType: name,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
