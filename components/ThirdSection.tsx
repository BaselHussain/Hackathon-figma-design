"use client";
import React from 'react';
import {Montserrat} from "next/font/google";
import ProductList from './ProductList';


const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })

  


export default function ThirdSection() {

  return (
    <>
    <div className={`${Montserratfont.className} container w-full max-w-[2000px] space-y-20 my-20`}>
<div className='w-[90%] lg:w-[80%] mx-auto space-y-3'>
<p className='text-center text-sm text-[#737373] font-semibold'>Featured Products</p>
<h1 className='text-center text-2xl font-bold'>Best Seller Products</h1>
<p className='text-center text-xs text-[#737373] font-semibold'>Problems trying to solve the conflict between</p>
</div>

<ProductList/>
</div>
    
    </>
  )
}
