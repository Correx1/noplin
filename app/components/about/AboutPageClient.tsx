'use client';

import AboutHero from './AboutHero';
import AboutStoryAndPurpose from './AboutStoryAndPurpose';
import AboutPillars from './AboutPillars';
import AboutTeam from './AboutTeam';
import AboutValues from './AboutValues';
import FinalCTASection from '../home/FinalCTASection';


export default function AboutPageClient() {
  return (
    <main>
      <AboutHero />
      <AboutStoryAndPurpose />
      <AboutPillars />
      <AboutTeam />
    
      <AboutValues />
     <FinalCTASection/>
    </main>
  );
}
