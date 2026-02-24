import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Video Script & Editing™ | Noplin Digital',
  description: 'Scripts and editing for YouTube, Instagram, TikTok, and corporate videos. Starting from ₦25,000/video.',
};

export default function VideoContentPage() {
  return (
    <ServicePageTemplate
      serviceName="Video Script & Editing™"
      department="Content"
      about=""
      leadSpecialist="Funke + Jessica"
      tagline="Professional scripts and editing for YouTube, Instagram, TikTok, and corporate videos that actually get watched."
      startingPrice="From ₦25,000/video"
      turnaround="3–5 days"
      whatItIncludes={[
        'Video script writing',
        'Professional video editing',
        'Captions & subtitles',
        'Thumbnail design',
        'Platform optimization',
        'Color grading',
        'Music/audio selection',
        'Revision rounds',
      ]}
      pricingTiers={[
        {
          name: 'Starter',
          price: '₦25,000',
          turnaround: '3–5 days',
          bestFor: 'Creators needing a script or a quick clean edit',
          includes: ['Script only OR basic edit', 'Captions', '1 revision round', 'Delivered in platform format'],
        },
        {
          name: 'Growth',
          price: '₦75,000',
          turnaround: '3–5 days',
          bestFor: 'Creators and businesses needing polished, professional video content',
          includes: ['Script + professional edit', 'Captions & subtitles', 'Thumbnail design', 'Color grading', 'Platform optimization', '2 revision rounds'],
          best: true,
        },
        {
          name: 'Premium',
          price: '₦150,000/mo',
          turnaround: 'Ongoing',
          bestFor: 'Brands running consistent video content across platforms',
          includes: ['4 videos/month', 'Script + full production management', 'Thumbnail suite', 'Multi-platform optimization', 'Content calendar', 'Monthly analytics review'],
        },
      ]}
      whoItsFor="Content creators, business owners, and marketing teams who want video content that looks and sounds professional — without needing to manage every step of production themselves."
      process={[
        { step: '01', title: 'Brief', description: 'You share the topic, target audience, platform, and any footage you have.' },
        { step: '02', title: 'Script', description: 'We write a structured, engaging script optimized for your platform and goal.' },
        { step: '03', title: 'Edit', description: 'We edit your footage (or guide your recording based on the script).' },
        { step: '04', title: 'Deliver', description: 'Final video, captions, and thumbnail delivered in all required formats.' },
      ]}
      complementaryServices={[
        { name: 'Social Growth Engine™', url: '/services/social-media' },
        { name: 'Precision Ad Campaigns™', url: '/services/paid-ads' },
        { name: 'Corporate Comms Suite™', url: '/services/corporate-comms' },
      ]}
      faqs={[
        { question: 'Do I need to provide footage?', answer: 'For talking-head or on-location videos, yes — you record using our script and direction, and we edit. For motion graphic or screen-based videos, we handle production end-to-end.' },
        { question: 'What platforms do you optimize for?', answer: 'YouTube, Instagram Reels, TikTok, LinkedIn, Facebook — each platform has specific format and length requirements that we optimize for automatically.' },
        { question: 'How long can the videos be?', answer: 'We handle videos from 30-second social clips up to 20-minute YouTube videos. Longer corporate productions are quoted separately.' },
        { question: 'Do you do animated videos?', answer: 'Basic motion graphics and text animations are included. Full 2D/3D animation is a separate service — contact us for a custom quote.' },
      ]}
    />
  );
}
