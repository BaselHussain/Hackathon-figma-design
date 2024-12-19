import React from 'react';
import { FaHooli } from "react-icons/fa";
import { FaLyft } from "react-icons/fa";
import { FaStripe } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaPiedPiperHat } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import {Montserrat} from "next/font/google";
import Image from 'next/image'
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
    src:string,
    rating:number
  }
  

const bestProducts:Items[]=[{
    id:1,
    title:'Graphic Design',
    description:"English Department",
    oldPrice:16.48,
    newPrice:6.48,
    src:'/images/pink-plate.png',
    rating:20
},{
    id:2,
    title:'Graphic Design',
    description:"English Department",
    oldPrice:16.48,
    newPrice:6.48,
    src:'/images/gray-cup.png',
    rating:20
},{
    id:3,
    title:'Graphic Design',
    description:"English Department",
    oldPrice:16.48,
    newPrice:6.48,
    src:'/images/fork-spoon.png',
    rating:20
},{
    id:4,
    title:'Graphic Design',
    description:"English Department",
    oldPrice:16.48,
    newPrice:6.48,
    src:'/images/cups.png',
    rating:20
},{
    id:5,
    title:'Graphic Design',
    description:"English Department",
    oldPrice:16.48,
    newPrice:6.48,
    src:'/images/bowl.png',
    rating:20
},{
    id:6,
    title:'Graphic Design',
    description:"English Department",
    oldPrice:16.48,
    newPrice:6.48,
    src:'/images/blue-chair.png',
    rating:20
},{
    id:7,
    title:'Graphic Design',
    description:"English Department",
    oldPrice:16.48,
    newPrice:6.48,
    src:'/images/pink-plate.png',
    rating:20
},{
    id:8,
    title:'Graphic Design',
    description:"English Department",
    oldPrice:16.48,
    newPrice:6.48,
    src:'/images/gray-cup.png',
    rating:20
}
]

export default function SingleProductThirdSection() {
  return (
    <>
    <div className={`${Montserratfont.className} container w-full max-w-[1439px]`}>
        <div className='first-div  w-[80%] md:w-[95%] lg:w-[90%] xl:w-[80%] mx-auto py-10'>
            <h1 className='text-2xl font-bold'>Best Seller Products</h1>
        </div>
        <div className='second-div  w-[80%] md:w-[95%] lg:w-[90%] xl:w-[80%] mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-36 md:gap-5'>
{
    bestProducts.map((product)=>(
        <div key={product.id} className='h-[442px]'>
            <div className='h-[427px] md:h-[280px] w-full'>
<Image
src={product.src}
alt='product'
width={1500}
height={1500}
className='w-full h-full'/>
</div>
<div className='flex flex-col space-y-2 mt-3 ml-3'>
    <h3 className='text-lg font-bold'>{product.title}</h3>
    <span className='text-gray-500 font-semibold'>{product.description}</span>
    <p className='text-gray-500 font-semibold'>${product.oldPrice}<span className='text-green-600 ml-2'>${product.newPrice}</span></p>
</div>
            
            
        </div>
    ))
}

        </div>
        <div className='second-div  flex flex-col md:flex-row items-center justify-between space-x-4 space-y-4 md:space-y-0 text-[#737373] py-14 mt-20 md:mt-0'>
        
        <FaHooli className='w-24 h-24'/>
        <FaLyft className='w-24 h-24'/>
        <FaPiedPiperHat className='w-24 h-24'/>
        <FaStripe className='w-24 h-24'/>
        <FaAws className='w-24 h-24'/>
        <FaRedditAlien className='w-24 h-24'/>
        </div>
        </div>
    </div>
    </>
  )
}
