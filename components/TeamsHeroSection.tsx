import React from 'react';
import {Montserrat} from "next/font/google";
import { FaChevronRight } from "react-icons/fa6";
import Image from 'next/image';
const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })

  



export default function TeamsHeroSection() {
  return (
    <>
    <div className={`${Montserratfont.className} container w-full max-w-[2000px] space-y-10 py-16`}>
        <div className='first-div w-[80%] mx-auto flex flex-col items-center gap-y-4'>
<h3 className='text-[#737373] font-semibold text-center'>WHAT WE DO</h3>

<h1 className='text-4xl font-bold text-center'>Innovation tailored for you</h1>
<h4 className='flex items-center gap-2 text-center'><span>Home </span><FaChevronRight className='text-[#737373]'/><span className='text-[#737373]'>Team</span></h4>
        </div>
<div className='second div w-full grid grid-cols-2 md:grid-cols-4 gap-2 xl:h-[530px]'>
<div className='first-image col-span-2 row-span-2'>
    <Image
    src={'/images/red-bg-girl.png'}
    alt='red-girl'
    width={2000}
    height={2000}
    className='w-full h-full '/>
</div>
<div className='second-image'>
<Image
src={'/images/black-purse-girl.png'}
alt=''
width={2000}
height={2000}
className='w-full h-full '/>
</div>
<div className='third-image'>
<Image
src={'/images/jean-shirt-girl.png'}
alt=''
width={2000}
height={2000}
className='w-full h-full '/>
</div>
<div className='fourth-image'>
<Image
src={'/images/black-shirt-girl.png'}
alt=''
width={2000}
height={2000}
className='w-full h-full '/>
</div>
<div className='fifth-image'>
    <Image
    src={'/images/dark-blue-jean-shirt-girl.png'}
    alt=''
    width={2000}
    height={2000}
    className='w-full h-full'/>
</div>
</div>


    </div>
    </>
  )
}
