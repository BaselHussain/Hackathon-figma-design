import Footer from '@/components/Footer'
import Header from '@/components/Header'
import TeamsHeroSection from '@/components/TeamsHeroSection'
import TeamsSecondSection from '@/components/TeamsSecondSection'
import TeamsThirdSection from '@/components/TeamsThirdSection'
import React from 'react'


export default function page() {
  return (
    <>
    <Header/>
    <TeamsHeroSection/>
    <TeamsSecondSection/>
    <TeamsThirdSection/>
    
    <Footer/>
    </>
  )
}
