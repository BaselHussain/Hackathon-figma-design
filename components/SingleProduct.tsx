"use client";
import Header from '@/components/Header';
import React,{useEffect, useState} from 'react'
import { useContext } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { IoEye } from "react-icons/io5";
import {Montserrat} from "next/font/google";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CartContext } from '@/context';
const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })
  interface singleProduct{
    id:number;
    title:string;
    description:string;
    oldPrice:number;
    newPrice:number;
    src:string,
    rating:number
  }
export default function SinglesingleProduct({id}:{id:string}) {
    
      const [singleProduct,setSinglesingleProduct]=useState<singleProduct | null>(null)
      const [error, setError] = useState<string | null>(null);
     useEffect(() => {
        const fetchSinglesingleProduct = async () => {
          try {
            const response = await fetch(`/api/singleProducts/${id}?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`);
      
            if (!response.ok) {
              throw new Error('Failed to fetch singleProducts');
            }
      
            const data = await response.json();
            setSinglesingleProduct(data)
            
            
          } catch (error) {
            setError('Error fetching singleProduct');
            console.error('Error fetching singleProducts:', error);
          }
        };
      
        fetchSinglesingleProduct();
      }, [id]);

      if (error) {
        return <div>{error}</div>;
      }

    const cartObj=useContext(CartContext)

  
    if (!singleProduct) {
        return <p>Loading...</p>; // Or display a fallback UI
      }

 
  return (
    <>

  <Header/>
  <div className={`${Montserratfont.className} container w-full max-w-[2000px] `}>
    <div className='first-div w-full py-6'>
    <div className=' w-[80%] mx-auto flex justify-center md:justify-between '>
<h2 className='flex items-center gap-x-2 font-bold'>Home <FaChevronRight/> <span className='text-gray-500'>Shop</span></h2>
    </div>
    </div>
    
    <div className='second-div w-[80%] xl:w-[80%] mx-auto flex flex-col md:flex-row md:items-start md:justify-between'>
<div className='image-div w-full h-[480px] md:w-[200px] md:h-[360px] lg:w-[280px] lg:h-[400px] xl:w-[300px]  xl:h-[470px] 2xl:w-[450px] 2xl:h-[550px] '>
<Image
src={singleProduct.src}
alt={singleProduct.title}
width={1000}
height={1000}
className='w-full h-full '/>
</div>

<div className='singleProduct-description-div md:h-[420px] h-[500px] md:mr-3 lg:mr-5 xl:mr-[12rem] mt-4 flex flex-col items-start gap-y-4 md:gap-y-2 lg:gap-y-4 xl:gap-y-6'>
<h1 className='text-2xl font-bold'>{singleProduct.title}</h1>
<div className='flex items-center space-x-3'>
    {Array(4).fill(1).map((item)=>(
        <FaStar className='text-yellow-500'/>
    ))
}
<span className='text-gray-500 font-semibold'>{singleProduct.rating} Reviews</span>
</div>
<div>
<h1 className='text-2xl font-bold'>${singleProduct.newPrice}</h1>
<p className='font-semibold'>Availability : <span className='text-[#23a6f0]'>In stock</span></p>
</div>

<p className='w-full md:w-[400px] lg:w-[484px]'>{singleProduct.description}</p>

<div className=' border-[0.3px] border-gray-400 w-full'></div>

<div className='flex items-center space-x-3'>
    <div className='rounded-full w-6 h-6 bg-[#23a6f0]'></div>
    <div className='rounded-full w-6 h-6 bg-[#2dc071]'></div>
    <div className='rounded-full w-6 h-6 bg-[#e77c40]'></div>
    <div className='rounded-full w-6 h-6 bg-[#252b42]'></div>
</div>

<div className='flex items-center space-x-6 mt-8 md:mt-5 lg:mt-10'>
    <Button className='text-white bg-[#23a6f0] hover:bg-[#20709e] '>Select Options</Button>
<CiHeart className='w-5 h-5'/>
<BsCart className='w-5 h-5 cursor-pointer' onClick={()=>cartObj.handleAddtoCart({id:singleProduct.id,title:singleProduct.title,description:singleProduct.description,price:singleProduct.newPrice,src:singleProduct.src})}/>
<IoEye className='w-5 h-5'/>
</div>



</div>
</div> 
  </div>
  </>
    
  )
}
