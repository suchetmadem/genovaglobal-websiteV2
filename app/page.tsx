import { Hero } from '@/components/hero'
import {
  FeaturedResearch,
  WhatWeDo,
  ImpactStats,
  HowItWorks,
} from '@/components/home-sections'
import { CTASection } from '@/components/cta-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedResearch />
      <WhatWeDo />
      <ImpactStats />
      <HowItWorks />
      <CTASection />
    </>
  )
}
