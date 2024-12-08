import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import {Montserrat} from "next/font/google"
import { Button } from './ui/button';

const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })

export default function Footer() {
  return (
    <>
<div className={`${Montserratfont.className} container w-full `}>

<div className='first-one  py-[40px] '>
    <div className=' flex items-center justify-between w-[90%] mx-auto'>
<h1  className='text-2xl font-bold'>Bandage</h1>
<div className='flex items-center space-x-3 text-[#23A6F0]'>
    <FaFacebook className='w-5 h-5'/>
<FaInstagram className='w-5 h-5'/>
<FaTwitter className='w-5 h-5'/>
</div>
</div>
</div>

<div className='second-one'>
<div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:gap-2'>

<div className='first-col flex flex-col justify-center space-y-3'>
<h1 className='text-xl font-bold'>Company Info</h1>
<ul className='flex flex-col space-y-2'>
<li>About Us</li>
<li>Carrier</li>
<li> We are hiring</li>
<li>blog</li>
</ul>
</div>


<div className='second-col flex flex-col justify-center space-y-3'>
<h1 className='text-xl font-bold'>Legal</h1>
<ul className='flex flex-col space-y-2'>
<li>About Us</li>
<li>Carrier</li>
<li> We are hiring</li>
<li>blog</li>
</ul>
</div>


<div className='third-col flex flex-col justify-center space-y-3'>
<h1 className='text-xl font-bold'>Features</h1>
<ul className='flex flex-col space-y-2'>
<li>Business Marketing</li>
<li>User Analytic</li>
<li> Live Chat</li>
<li>Unlimited Support</li>
</ul>
</div>


<div className='fourth-col flex flex-col justify-center space-y-3'>
<h1 className='text-xl font-bold'>Resources</h1>
<ul className='flex flex-col space-y-2'>
<li>IOS & Android</li>
<li>Watch a Demo</li>
<li> Customers</li>
<li>API</li>
</ul>
</div>


<div className='fifth-col  flex flex-col justify-center space-y-3 py-10'>
<h1 className='text-xl font-bold'>Get In touch</h1>
<div className='relative'>
<input type="text" placeholder='Your Email' className='w-[70%] md:w-full  px-1 py-2 border-2  rounded-sm'/>
<Button className='absolute right-12 md:right-0  bg-[#23a6f0] px-1 py-[1.35rem]  text-white font-semibold rounded-sm'>Subscribe</Button>
</div>
</div>


</div>
</div>

</div>

    </>
  )
}
