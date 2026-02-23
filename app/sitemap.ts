import { MetadataRoute } from 'next';

const BASE = 'https://noplin.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    // ── Core pages ──────────────────────────
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/process`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/work`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },

    // ── Service pages ─────────────────────────
    { url: `${BASE}/services/brand-identity`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/pitch-deck`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/web-design`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/web-app-development`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/mvp-development`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/ecommerce-development`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/api-integration`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/seo-content`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/conversion-copy`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/email-marketing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/video-content`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/corporate-comms`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/social-media`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/paid-ads`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/strategy-consulting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // ── Blog posts ────────────────────────────
    { url: `${BASE}/blog/nigerian-smes-digital-marketing`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/blog/nigerian-website-essentials-2025`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/blog/build-brand-nigerian-customers-trust`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/blog/facebook-ads-nigeria-that-convert`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/blog/social-media-strategy-nigeria-2025`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ];
}
