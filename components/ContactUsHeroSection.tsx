import React from 'react';
import {Montserrat} from "next/font/google";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Image from 'next/image';
const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })

export default function ContactUsHeroSection() {
  return (
    <>
    <div className={`${Montserratfont.className} container w-full max-w-[1439px]`}>
<div className='second-container w-[80%]  mx-auto flex flex-col gap-y-20 md:gap-y-0  items-center md:flex-row justify-between py-8'>

<div className="text-div flex flex-col space-y-8 order-1 md:order-none lg:mt-10">
      <h3 className="font-bold hidden md:block uppercase">Contact us</h3>
      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center md:text-start ">Get in touch <br /> today!</h1>
      <p className='text-[#737373] font-semibold text-center md:text-start'>
      We know how large objects will act, <br />
      but things on a small scale
      </p>
      <div className="flex flex-col items-center md:items-start justify-center gap-y-3 md:justify-start ">
       
        <p className='text-2xl font-bold'>Phone : +451 215 215 </p>
        <p className='text-2xl font-bold'>Fax : +451 215 215</p>
        <div className='flex space-x-7  mt-4'>
        
            <FaFacebook className='w-7 h-7'/>
            <FaInstagram className='w-7 h-7'/>
            <FaTwitter className='w-7 h-7'/>
            <FaLinkedin className='w-7 h-7'/>
        </div>
      </div>
    </div>

<div className="image-div md:w-[40%] h-full  order-2 md:order-none relative ">
      <Image
        src={"/images/family-shopping.png"}
        alt="shopping-girl"
        width={2000}
        height={2000}
        className="h-full w-full ml-3 md:ml-0 z-30 relative scale-[1.1] md:scale-[1.08] lg:scale-[1.2]"
      />
      <div className='p-[5.5rem] md:p-[6rem]  lg:p-[9.2rem] xl:p-[11rem] z-10 rounded-full bg-[#ffe9ea] left-3 md:left-5 lg:left-2 xl:left-3 absolute   top-2 md:top-3 lg:-top-0 xl:-top-2 '>

      </div>
    </div>

</div>


    </div>
    </>
  )
}
