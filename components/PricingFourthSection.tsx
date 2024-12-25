import React from 'react'
import {Montserrat} from "next/font/google";
const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })
export default function PricingFourthSection() {
  return (
    <>
    <div className={`${Montserratfont.className} w-full max-w-[2000px] py-20 space-y-32`}>
<div className='first-div w-[80%] mx-auto flex flex-col items-center gap-2 '>
<h1 className='text-3xl font-bold'>Pricing FAQs</h1>
<p className='text-[#737373] font-semibold md:w-[552px] text-center px-16'>Problems trying to resolve the conflict between 
the two major realms of Classical physics</p>
</div>

<div className='second-div w-[80%] mx-auto'>
<div className='w-full grid grid-cols-1 md:grid-cols-2 gap-20'>
{Array(6).fill(1).map((item)=>(
    <div className=''>
<h1 className='font-bold'>the quick fox jumps over the lazy dog</h1>
<p className='text-[#737373]'>Met minim Mollie non desert Alamo est sit cliquey 
dolor do met sent. RELIT official consequent door ENIM 
RELIT Mollie. Excitation venial consequent sent 
nostrum met.</p>
    </div>
))}
</div>
</div>
<div className='third-div text-[#737373] w-[80%] mx-auto text-center font-semibold'>
Haven’t got your answer? Contact our support
</div>
    </div>
    
    </>
  )
}
