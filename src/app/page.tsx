'use client'

import AboutSection from '@/components/pages/AboutSection'
import FAQsSection from '@/components/pages/FAQsSection'
import HeroSection from '@/components/pages/HeroSection'
import HowItWorksSection from '@/components/pages/HowItWorksSection'
import Kittynomics from '@/components/pages/KittynomicsSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HowItWorksSection />
      <Kittynomics />
      <AboutSection />
      <FAQsSection />
    </div>
  )
}
