'use client'

import FAQsSection from '@/components/pages/FAQsSection'
import HeroSection from '@/components/pages/HeroSection'
import HowItWorksSection from '@/components/pages/HowItWorksSection'
import Kittynomics from '@/components/pages/KittynomicsSection'
import ReadMoreSection from '@/components/pages/ReadMoreSection'
import RoadmapSection from '@/components/pages/RoadmapSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ReadMoreSection />
      <HowItWorksSection />
      <Kittynomics />
      <RoadmapSection />
      <FAQsSection />
    </div>
  )
}
