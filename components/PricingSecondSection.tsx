import React from 'react';
import {Montserrat} from "next/font/google";
import { FaChevronRight } from "react-icons/fa";
import { Switch } from "@/components/ui/switch"
const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })

export default function PricingSecondSection() {
  return (
    <>
    <div className={`${Montserratfont.className} container w-full max-w-[2000px] py-20`}>
<div className='first-div w-[80%] mx-auto flex flex-col gap-y-5 items-center py-10'>
<h1 className='text-2xl font-bold'>Pricing</h1>
<p className='text-[#737373] font-semibold md:w-[469px]'>Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics </p>
<div className='flex items-center gap-3'>
<span className='font-semibold'>Monthly</span>
<Switch className='border border-[#23a6f0] bg-[#23a6f0]'/>
<span className='font-semibold'>Yearly</span>
<div className='rounded-full bg-[#b2e3ff] text-[#23a6f0] px-4 py-2 font-semibold cursor-pointer'>Save 25%</div>

</div>
</div>

<div className='second-div w-[80%] mx-auto flex '>
<div className='rounded-lg border border-[#23a6f0] flex flex-col py-5 px-5 gap-y-3 items-center font-semibold'>
<h1>Free</h1>
<p>Organize across all 
apps by hand</p>
<h2 className='relative text-[#23a6f0] text-2xl font-bold'>0<div className='flex flex-col w-64   absolute top-0 left-5 '><span className='font-bold text-sm'>$</span><span className='text-xs'>Per Month</span></div></h2>
</div>
<div className='rounded-lg border border-[#23a6f0] bg-[#252b42] text-white flex flex-col py-5 px-5 gap-y-3 items-center font-semibold'>
<h1>Standard</h1>
<p>Organize across all 
apps by hand</p>
<h2 className='relative text-[#23a6f0] text-2xl font-bold'>9.99<div className='flex flex-col w-64   absolute top-0 left-[3.8rem] '><span className='font-bold text-sm'>$</span><span className='text-xs'>Per Month</span></div></h2>
</div>
<div className='rounded-lg border border-[#23a6f0] flex flex-col py-5 px-5 gap-y-3 items-center font-semibold'>
<h1>Premium</h1>
<p>Organize across all 
apps by hand</p>
<h2 className='relative text-[#23a6f0] text-2xl font-bold'>19.99<div className='flex flex-col w-64   absolute top-0 left-[4.5rem] '><span className='font-bold text-sm'>$</span><span className='text-xs'>Per Month</span></div></h2>
</div>
</div>
    </div>
    </>
  )
}
