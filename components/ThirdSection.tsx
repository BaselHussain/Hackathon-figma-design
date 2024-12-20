"use client";
import React from 'react';
import { useContext } from 'react';
import Image from 'next/image';

import {Montserrat} from "next/font/google";

import { CartContext } from '@/context';
import Link from 'next/link';
import { Button } from './ui/button';


const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })

  interface Items{
    id:number;
    title:string;
    description:string;
    oldPrice:number;
    newPrice:number;
    src:string
  }



export default function ThirdSection() {
    const cartObj=useContext(CartContext)
  

const bestProducts:Items[]=[{
    id:1,
    title:'Graphic Design',
    description:"English Department",
    oldPrice:16.48,
    newPrice:6.48,
    src:'/images/african-girl.png'
},{
    id:2,
    title:'Graphic Design',
    description:"English Department",
    oldPrice:16.48,
    newPrice:6.48,
    src:'/images/boy-with-wall.png'
},{
    id:3,
    title:'Graphic Design',
    description:"English Department",
    oldPrice:16.48,
    newPrice:6.48,
    src:'/images/pink-girl.png'
},{
    id:4,
    title:'Graphic Design',
    description:"English Department",
    oldPrice:16.48,
    newPrice:6.48,
    src:'/images/brown-girl.png'
},{
    id:5,
    title:'Graphic Design',
    description:"English Department",
    oldPrice:16.48,
    newPrice:6.48,
    src:'/images/long-jacket-boy.png'
},{
    id:6,
    title:'Graphic Design',
    description:"English Department",
    oldPrice:16.48,
    newPrice:6.48,
    src:'/images/yellow-girl.png'
},{
    id:7,
    title:'Graphic Design',
    description:"English Department",
    oldPrice:16.48,
    newPrice:6.48,
    src:'/images/boy-with-hoodie.png'
},{
    id:8,
    title:'Graphic Design',
    description:"English Department",
    oldPrice:16.48,
    newPrice:6.48,
    src:'/images/last-boy.png'
}
]



  return (
    <>
    <div className={`${Montserratfont.className} container w-full max-w-[1439px] space-y-20 my-20`}>
<div className='w-[90%] lg:w-[80%] mx-auto space-y-3'>
<p className='text-center text-sm text-[#737373] font-semibold'>Featured Products</p>
<h1 className='text-center text-2xl font-bold'>Best Seller Products</h1>
<p className='text-center text-xs text-[#737373] font-semibold'>Problems trying to solve the conflict between</p>
</div>



<div className='w-[90%] xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-y-24 md:gap-x-6  xl:gap-y-10 '>
{
    bestProducts.map((product)=>(
      
    
        <div key={product.id} className='flex flex-col space-y-6 h-[615px]  w-[338px] mx-auto md:w-full lg:w-[220px] xl:w-[239px]'>
 <Link href={`/SingleProduct/${product.id}`}>
    <div className='h-[427px] w-full'>
<Image
src={product.src}
alt='image'
width={4000}
height={4000}
className='w-full h-full object-fill '/>
</div>

<h1 className='text-center mt-5 text-xl font-bold'>{product.title}</h1>
<p className='text-center text-[#737373] font-semibold '>{product.description}</p>
</Link>
<p className='text-center text-sm font-semibold'><span className='text-[#737373] mr-2'>${product.oldPrice}</span>   <span className='text-green-800'>${product.newPrice}</span></p>
<Button className='cursor-pointer bg-red-700 hover:bg-red-500 w-[60%] mx-auto' onClick={()=>cartObj.handleAddtoCart({id:product.id,title:product.title,description:product.description,price:product.newPrice})}>Add To cart</Button>

        </div>
       
       
    ))
}

</div>
    </div>
    </>
  )
}
