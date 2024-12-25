import React from 'react';
import {Montserrat} from "next/font/google";
import { Switch } from "@/components/ui/switch";
import { FaCircleCheck } from "react-icons/fa6";
import { Button } from './ui/button';
const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })

export default function PricingSecondSection() {
  return (
    <>
    <div className={`${Montserratfont.className} container w-full max-w-[2000px] py-20`}>
<div className='first-div w-[80%] mx-auto flex flex-col gap-y-5 items-center mb-32'>
<h1 className='text-3xl font-bold'>Pricing</h1>
<p className='text-[#737373] font-semibold w-full text-center md:w-[469px]'>Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics </p>
<div className='flex items-center justify-center space-x-3'>
<span className='font-semibold'>Monthly</span>
<Switch className='border border-[#23a6f0] bg-[#23a6f0]'/>
<span className='font-semibold'>Yearly</span>
<div className='rounded-full bg-[#b2e3ff] text-[#23a6f0] px-4 py-2 font-semibold cursor-pointer'>Save 25%</div>

</div>
</div>

<div className='second-div w-[80%] md:w-[98%] lg:w-[80%] mx-auto flex flex-col items-center md:items-start md:flex-row md:justify-center gap-y-6 '>
<div className='first-pricing w-[327px] h-[664px]  rounded-lg border border-[#23a6f0] flex flex-col pt-10 px-10 md:px-6 lg:px-10 gap-y-7 items-center font-semibold'>
<h1 className='text-center text-2xl uppercase '>Free</h1>
<p className='text-center'>Organize across all <br /> 
apps by hand</p>
<h2 className='relative text-[#23a6f0] text-4xl font-bold '>0<div className='flex flex-col w-24   absolute top-0 left-7 '><span className='font-bold text-sm'>$</span><span className='text-xs'>Per Month</span></div></h2>
<div className='flex flex-col  text-sm gap-y-7'>
<p className='flex gap-x-2 items-center'> <FaCircleCheck className='rounded-full bg-white w-6 h-6 text-green-500 '/>Unlimited product updates</p>
<p className='flex gap-x-2 items-center'> <FaCircleCheck className='rounded-full bg-white w-6 h-6 text-green-500 '/>Unlimited product updates</p>
<p className='flex gap-x-2 items-center'> <FaCircleCheck className='rounded-full bg-white w-6 h-6 text-green-500 '/>Unlimited product updates</p>
<p className='flex gap-x-2 items-center'> <FaCircleCheck className='rounded-full bg-white w-6 h-6 text-[#bdbdbd] '/>1GB  Cloud storage</p>
<p className='flex gap-x-2 items-center'> <FaCircleCheck className='rounded-full bg-white w-6 h-6 text-[#bdbdbd] '/> Email and community 
support</p>
</div>
<Button className='w-[100%] mx-auto bg-[#23a6f0] hover:bg-[#1d6b97] py-5'>Try for free</Button>
</div>

<div className='second-pricing w-[327px] h-[664px] md:h-[704px] rounded-lg border border-[#23a6f0] bg-[#252b42] text-white flex flex-col px-10 md:px-6 pt-12 lg:px-10 gap-y-7 items-center font-semibold md:relative md:bottom-10'>
<h1 className='text-center text-2xl uppercase'>Standard</h1>
<p className='text-center'>Organize across all <br /> 
apps by hand</p>
<h2 className='relative text-[#23a6f0] text-4xl font-bold '>9.99<div className='flex flex-col w-24   absolute top-0 left-[5.3rem] '><span className='font-bold text-sm'>$</span><span className='text-xs'>Per Month</span></div></h2>
<div className='flex flex-col  text-sm gap-y-7'>
<p className='flex gap-x-2 items-center'> <FaCircleCheck className='rounded-full bg-white w-6 h-6 text-green-500 '/>Unlimited product updates</p>
<p className='flex gap-x-2 items-center'> <FaCircleCheck className='rounded-full bg-white w-6 h-6 text-green-500 '/>Unlimited product updates</p>
<p className='flex gap-x-2 items-center'> <FaCircleCheck className='rounded-full bg-white w-6 h-6 text-green-500 '/>Unlimited product updates</p>
<p className='flex gap-x-2 items-center'> <FaCircleCheck className='rounded-full bg-white w-6 h-6 text-[#bdbdbd] '/>1GB  Cloud storage</p>
<p className='flex gap-x-2 items-center'> <FaCircleCheck className='rounded-full bg-white w-6 h-6 text-[#bdbdbd] '/> Email and community 
support</p>
</div>
<Button className='w-[100%] mx-auto bg-[#23a6f0] hover:bg-[#1d6b97] py-5'>Try for free</Button>
</div>

<div className='third-pricing w-[327px] h-[664px]  rounded-lg border border-[#23a6f0] flex flex-col px-10 md:px-6 pt-10 lg:px-10 gap-y-7 items-center font-semibold'>
<h1 className='text-center text-2xl uppercase'>Premium</h1>
<p className='text-center'>Organize across all <br /> 
apps by hand</p>
<h2 className='relative text-[#23a6f0] text-4xl font-bold '>19.99<div className='flex flex-col w-24   absolute top-0 left-[6.3rem] '><span className='font-bold text-sm'>$</span><span className='text-xs'>Per Month</span></div></h2>
<div className='flex flex-col  text-sm gap-y-7'>
<p className='flex gap-x-2 items-center'> <FaCircleCheck className='rounded-full bg-white w-6 h-6 text-green-500 '/>Unlimited product updates</p>
<p className='flex gap-x-2 items-center'> <FaCircleCheck className='rounded-full bg-white w-6 h-6 text-green-500 '/>Unlimited product updates</p>
<p className='flex gap-x-2 items-center'> <FaCircleCheck className='rounded-full bg-white w-6 h-6 text-green-500 '/>Unlimited product updates</p>
<p className='flex gap-x-2 items-center'> <FaCircleCheck className='rounded-full bg-white w-6 h-6 text-[#bdbdbd] '/>1GB  Cloud storage</p>
<p className='flex gap-x-2 items-center'> <FaCircleCheck className='rounded-full bg-white w-6 h-6 text-[#bdbdbd] '/> Email and community 
support</p>
</div>
<Button className='w-[100%] mx-auto bg-[#23a6f0] hover:bg-[#1d6b97] py-5'>Try for free</Button>
</div>
</div>
    </div>
    </>
  )
}
