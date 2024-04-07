'use client'

import AboutSection from '@/components/pages/AboutSection'
import FAQsSection from '@/components/pages/FAQsSection'
import HeroSection from '@/components/pages/HeroSection'
import HowItWorksSection from '@/components/pages/HowItWorksSection'
import Kittynomics from '@/components/pages/KittynomicsSection'
import ReadMoreSection from '@/components/pages/ReadMoreSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ReadMoreSection />
      <HowItWorksSection />
      <Kittynomics />
      <AboutSection />
      <FAQsSection />
    </div>
  )
}
