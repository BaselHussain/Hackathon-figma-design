import React from 'react'
import {Montserrat} from "next/font/google";
import Image from 'next/image';
import { Button } from './ui/button';

const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })


export default function FifthSection() {
  return (
    <>
    <div className={`${Montserratfont.className} container w-full max-[2000px] bg-white mt-16 md:mt-0`}>
<div className='second-container w-[80%] mx-auto flex flex-col md:flex-row md:justify-between  md:space-x-24 gap-y-10 md:gap-y-0'>

<div className='image-div order-2 md:order-none'>
<Image
src={'/images/asian-woman-man.png'}
alt='boy-girl'
width={2000}
height={2000}
className='w-full h-full'/>
</div>


<div className='text-div  flex flex-col justify-center space-y-2 lg:space-y-3 my-auto order-1 md:order-none'>

<h3 className='uppercase text-[#737373] font-semibold  text-center md:text-start'>Summer 2020</h3>
<h1 className='text-2xl lg:text-3xl xl:text-4xl font-bold text-center md:text-start'>Part of the Nueral Universe</h1>
<p className='text-[#737373] font-semibold text-sm text-center md:text-start'>We know how large objects will act, 
but things on a small scale.</p>
<div className='flex flex-col md:flex-row space-y-3 md:space-y-0 items-center space-x-2 mt-6'>
    <Button className='bg-white border-2 border-[#2dc071] text-[#2dc071] px-6 py-5 rounded-sm hover:bg-[#2dc071] hover:text-white'>Buy Now</Button>
    <Button className='bg-white border-2 border-[#2dc071] text-[#2dc071] px-6 py-5 rounded-sm hover:bg-[#2dc071] hover:text-white'>Read More</Button>
</div>
</div>

</div>

    </div>
    </>
  )
}
