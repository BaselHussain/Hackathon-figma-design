import AboutUsFifthSection from '@/components/AboutUsFifthSection'
import AboutUsFourthSectionImage from '@/components/AboutUsFourthSectionImage'
import AboutUsHeroSection from '@/components/AboutUsHeroSection'
import AboutUsSecondSection from '@/components/AboutUsSecondSection'
import AboutUsSeventhSection from '@/components/AboutUsSeventhSection'
import AboutUsSixthSection from '@/components/AboutUsSixthSection'
import AboutUsThirdSection from '@/components/AboutUsThirdSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function page() {
  return (
    <div>
        <Header/>
      <AboutUsHeroSection/>
      <AboutUsSecondSection/>
      <AboutUsThirdSection/>
      <AboutUsFourthSectionImage/>
      <AboutUsFifthSection/>
      <AboutUsSixthSection/>
      <AboutUsSeventhSection/>
      <Footer/>
    </div>
  )
}
