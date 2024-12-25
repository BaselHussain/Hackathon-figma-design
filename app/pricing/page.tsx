import Footer from '@/components/Footer'
import Header from '@/components/Header'
import PricingFifthSection from '@/components/PricingFifthSection'
import PricingFirstSection from '@/components/PricingFirstSection'
import PricingFourthSection from '@/components/PricingFourthSection'
import PricingSecondSection from '@/components/PricingSecondSection'
import PricingThirdSection from '@/components/PricingThirdSection'
import React from 'react'

export default function page() {
  return (
   <>
   <Header/>
   <PricingFirstSection/>
   <PricingSecondSection/>
   <PricingThirdSection/>
   <PricingFourthSection/>
   <PricingFifthSection/>
   <Footer/>
   </>
  )
}
