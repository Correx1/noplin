import HeroSection from './components/home/HeroSection';
import SocialProofStrip from './components/home/SocialProofStrip';
import WhatWeDoSection from './components/home/WhatWeDoSection';
import FeaturedServicesSection from './components/home/FeaturedServicesSection';
import WhyNoplinSection from './components/home/WhyNoplinSection';
import ProcessSection from './components/home/ProcessSection';
import PortfolioTeaser from './components/home/PortfolioTeaser';
import TestimonialsSection from './components/home/TestimonialsSection';
import PricingTeaser from './components/home/PricingTeaser';
import FinalCTASection from './components/home/FinalCTASection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SocialProofStrip />
      <WhatWeDoSection />
      <FeaturedServicesSection />
      <WhyNoplinSection />
      <ProcessSection />
      <PortfolioTeaser />
      <TestimonialsSection />
      <PricingTeaser />
      <FinalCTASection />
    </main>
  );
}
