import React from 'react'
import {Montserrat} from "next/font/google";
import Image from 'next/image';
import { Button } from './ui/button';

const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })

export default function FourthSection() {
  return (
    <>
    <div className={`${Montserratfont.className} container w-full max-w-[2000px] bg-[#23856d] text-white  md:max-h-[709px] `}>
  <div className="w-[85%] lg:w-[75%] mx-auto  flex flex-col justify-center items-center md:flex-row md:justify-between  h-full  space-y-10 md:space-y-0 md:space-x-32">
    
    <div className="text-div mt-24 md:mt-0 flex flex-col space-y-5    order-1 md:order-none ">
      <h3 className="font-bold text-center md:text-start">Summer 2020</h3>
      <h1 className="text-4xl font-bold text-center md:text-start">Vita Classic Product</h1>
      <p className='text-center md:text-start'>
        We know how large objects will act, We know how are objects will act, We
        know
      </p>
      <div className="flex flex-col space-y-3  md:flex-row space-x-7 items-center">
        <span className="text-2xl font-bold mt-2">$16.48</span>
        <Button
          className="bg-[#2dc071] text-white font-bold px-8 py-6 rounded-sm uppercase hover:bg-[#27a160]"
        >
          Add To Cart
        </Button>
      </div>
    </div>

    
    <div className="image-div xl:h-[709px] md:pt-16 lg:pt-20 flex flex-col justify-center mt-10 w-full  order-2 md:order-none">
      <Image
        src={"/images/hero-man.png"}
        alt="heroman"
        width={700}
        height={700}
        className="h-full w-[90%]   "
      />
     
    </div>
  </div>
</div>

    </>
  )
}
