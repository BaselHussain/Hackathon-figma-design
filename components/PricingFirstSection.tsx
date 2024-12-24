import React from 'react';
import {Montserrat} from "next/font/google";
import { FaChevronRight } from "react-icons/fa";
const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })

export default function PricingFirstSection() {
  return (
   <>
   <div className={`${Montserratfont.className} container w-full max-w-[2000px] py-16`}>
<div className='w-80% mx-auto flex flex-col items-center gap-y-5'>
<h3 className='font-semibold text-[#737373]'>PRICING</h3>
<h1 className='text-3xl font-bold'>Simple Pricing</h1>
<h4 className='flex items-center space-x-3 font-bold'><span>Home</span>  <FaChevronRight/> <span className='text-[#737373]'>Pricing</span></h4>
</div>



   </div>
   
   </>
  )
}
