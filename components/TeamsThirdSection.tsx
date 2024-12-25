import React from 'react';
import {Montserrat} from "next/font/google";
import { Button } from './ui/button';
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })

export default function TeamsThirdSection() {
  return (
    <>
    <div className={`${Montserratfont.className} container w-full max-w-[2000px] py-20 mb-16`}>
<div className='w-[80%] mx-auto flex flex-col items-center gap-6'>
<h1 className='text-4xl font-bold text-center md:text-start '>Start your 14 days free trial</h1>
<p className='text-[#737373] md:w-[480px] text-center  font-semibold '>Met minim Mollie non desert Alamo est sit cliquey dolor 
do met sent. RELIT official consequent.</p>
<Button className='bg-[#23a6f0] hover:bg-[#2276a7] py-7 px-10'>Try it free now</Button>
<div className='flex items-center space-x-7  mt-4'>
<FaTwitter className='w-7 h-7 text-[#55acee]'/>
            <IoLogoFacebook className='w-8 h-8 text-[#395185]'/>
            <FaInstagram className='w-7 h-7 '/>
            <FaLinkedin className='w-7 h-7 text-[#0a66c2]'/>
        </div>
</div>
    </div>
    </>
  )
}
