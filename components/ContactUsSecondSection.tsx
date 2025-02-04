import React from 'react';
import {Montserrat} from "next/font/google";
import { BiPhone } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";
import { IoIosMail } from "react-icons/io";
import { Button } from './ui/button';
import { PiArrowBendRightDownBold } from "react-icons/pi";
const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })

export default function ContactUsSecondSection() {
  return (
    <>
    <div className={`${Montserratfont.className} container w-full max-w-[2000px] `}>
<div className='second-container w-[80%] mx-auto my-10 md:my-20'>

<div className='w-[310px] md:w-[550px] 2xl:w-[625px] mx-auto first-div text-center space-y-5'>
    <h3 className='font-bold'>Visit Our Office</h3>
    <p className=' text-3xl lg:text-4xl  font-bold'>We help small businesses 
    with big ideas</p>
</div>

<div className='second-div mt-20 grid grid-cols-1 md:grid-cols-3'>
     <div className='first-grid cursor-pointer h-[393px] md:h-[403px] group bg-white flex flex-col items-center justify-center gap-y-5 hover:bg-[#252b42] hover:text-white'>
<BiPhone className='w-20 h-20 text-[#23a6f0]'/>
<div>
<p className='font-semibold text-xs lg:text-base'>georgia.young@example.com</p>
<p className='text-cente font-semibold text-xs lg:text-base'>georgia.young@ple.com</p>
<p className='text-center font-bold mt-5'>Get Support</p>
</div>
<Button className='bg-white text-[#23a6f0] group-hover:bg-[#252b42] rounded-full border py-6 px-7 border-[#23a6f0]'>Submit Request</Button>
     </div>
     <div className='second-grid cursor-pointer h-[393px] md:h-[403px] group bg-white flex flex-col items-center justify-center gap-y-5 hover:bg-[#252b42] hover:text-white'>
<TiLocation className='w-20 h-20 text-[#23a6f0]'/>
<div>
<p className='font-semibold  text-xs lg:text-base'>georgia.young@example.com</p>
<p className='text-center font-semibold text-xs lg:text-base'>georgia.young@ple.com</p>
<p className='text-center font-bold mt-5'>Get Support</p>
</div>
<Button className='bg-white text-[#23a6f0] group-hover:bg-[#252b42] rounded-full border py-6 px-7 border-[#23a6f0]'>Submit Request</Button>
     </div>
     <div className='third-grid cursor-pointer h-[393px] md:h-[403px] group bg-white flex flex-col items-center justify-center gap-y-5 hover:bg-[#252b42] hover:text-white'>
        <IoIosMail className='w-20 h-20 text-[#23a6f0]'/>
        <div>
        <p className='font-semibold text-xs lg:text-base'>georgia.young@example.com</p>
        <p className='text-center font-semibold text-xs lg:text-base'>georgia.young@ple.com</p>
        <p className='text-center font-bold mt-5'>Get Support</p>
        </div>
        <Button className='bg-white text-[#23a6f0] group-hover:bg-[#252b42] rounded-full border py-6 px-7 border-[#23a6f0]'>Submit Request</Button>
     </div>
</div>

<div className='w-[321px] md:w-[607px] mx-auto flex flex-col  items-center gap-y-6 mt-20'>
    <div className='flex flex-col items-center'>
    <PiArrowBendRightDownBold className='text-[#23a6f0] w-14 h-14'/>
    <p className='font-bold'>WE Can&apos;t WAIT TO MEET YOU</p>
    </div>
    
    <h1 className='text-2xl lg:text-3xl font-bold'>Let&apos;s Talk</h1>
    <Button className='bg-[#23a6f0] text-white hover:bg-[#206a96] py-6 px-8'>Try It Free Now</Button>
</div>
</div>
    </div>
    </>
  )
}
