'use client';
import HeroSection from './HeroSection';
import ServiceInfo from './ServiceInfo';
import PricingTiers, { PricingTier } from './PricingTiers';
import ProcessSteps from './ProcessSteps';
import ComplementaryServices from './ComplementaryServices';
import FAQ from './FAQ';

export interface ServicePageTemplateProps {
  serviceName: string;
  department: 'Design' | 'Web & Dev' | 'Content' | 'Marketing';
  leadSpecialist: string;
  tagline: string;
  startingPrice: string;
  turnaround: string;
  about: string;                  // About this Service
  whatItIncludes: string[];
  whoItsFor: string;
  pricingTiers: PricingTier[];
  process: { step: string; title: string; description: string }[];
  complementaryServices: { name: string; url: string }[];
  faqs: { question: string; answer: string }[];
}

// Predefined department colors
const deptColors: Record<string, { bg: string; text: string }> = {
  Design: { bg: 'rgba(6,182,212,0.10)', text: '#06B6D4' },
  'Web & Dev': { bg: 'rgba(26,86,219,0.12)', text: '#1A56DB' },
  Content: { bg: 'rgba(6,182,212,0.10)', text: '#06B6D4' },
  Marketing: { bg: 'rgba(245,158,11,0.10)', text: '#F59E0B' },
};

export default function ServicePageTemplate(props: ServicePageTemplateProps) {
  const {
    serviceName,
    department,
    leadSpecialist,
    tagline,
    startingPrice,
    turnaround,
    about,
    whatItIncludes,
    whoItsFor,
    pricingTiers,
    process,
    complementaryServices,
    faqs,
  } = props;

  return (
    <main>
      {/* HERO */}
      <HeroSection
        serviceName={serviceName}
        department={department}
        leadSpecialist={leadSpecialist}
        tagline={tagline}
        startingPrice={startingPrice}
        turnaround={turnaround}
        deptColor={deptColors[department]}
      />

      {/* About + What It Includes + Who Its For */}
      <ServiceInfo about={about} whatItIncludes={whatItIncludes} whoItsFor={whoItsFor} />

      {/* Pricing Tiers */}
      <PricingTiers tiers={pricingTiers} />

      {/* Process Steps */}
      <ProcessSteps steps={process} />

      {/* Complementary Services */}
      <ComplementaryServices services={complementaryServices} />

      {/* FAQ */}
      <FAQ faqs={faqs} />
    </main>
  );
}