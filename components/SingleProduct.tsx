"use client";
import Header from '@/components/Header';
import React, { useContext } from 'react'
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

export default function SingleProduct({id}:{id:string}) {
    const cartObj=useContext(CartContext)

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
        description:"Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        oldPrice:16.48,
        newPrice:6.48,
        src:'/images/african-girl.png',
        rating:20
    },{
        id:2,
        title:'Graphic Design',
        description:"Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        oldPrice:16.48,
        newPrice:6.48,
        src:'/images/boy-with-wall.png',
        rating:20
    },{
        id:3,
        title:'Graphic Design',
        description:"Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        oldPrice:16.48,
        newPrice:6.48,
        src:'/images/pink-girl.png',
        rating:20
    },{
        id:4,
        title:'Graphic Design',
        description:"Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        oldPrice:16.48,
        newPrice:6.48,
        src:'/images/brown-girl.png',
        rating:20
    },{
        id:5,
        title:'Graphic Design',
        description:"Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        oldPrice:16.48,
        newPrice:6.48,
        src:'/images/long-jacket-boy.png',
        rating:20
    },{
        id:6,
        title:'Graphic Design',
        description:"Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        oldPrice:16.48,
        newPrice:6.48,
        src:'/images/yellow-girl.png',
        rating:20
    },{
        id:7,
        title:'Graphic Design',
        description:"Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        oldPrice:16.48,
        newPrice:6.48,
        src:'/images/boy-with-hoodie.png',
        rating:20
    },{
        id:8,
        title:'Graphic Design',
        description:"Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        oldPrice:16.48,
        newPrice:6.48,
        src:'/images/last-boy.png',
        rating:20
    }
    ]
const product=bestProducts.find((product)=>product.id===Number(id))
if(!product){
    return(
        <h1>Product not found</h1>
    )
}
  return (
    <>
<>
  <Header/>
  <div className={`${Montserratfont.className} container w-full max-w-[1439px] mt-10`}>
    <div className='first-div w-full py-6'>
    <div className=' w-[80%] mx-auto flex justify-center md:justify-between '>
<h2 className='flex items-center gap-x-2 font-bold'>Home <FaChevronRight/> <span className='text-gray-500'>Shop</span></h2>
    </div>
    </div>
    
    <div className='second-div w-[90%] xl:w-[80%] mx-auto flex flex-col md:flex-row md:items-start md:justify-between'>
<div className='image-div w-[348px] h-[350px] md:w-[275px] md:h-[460px] lg:w-[350px]  xl:w-[400px] xl:h-[500px] 2xl:w-[450px] 2xl:h-[550px] '>
<Image
src={product.src}
alt={product.title}
width={1000}
height={1000}
className='w-full h-full '/>
</div>

<div className='product-description-div h-[471px] lg:mr-16 xl:mr-24 mt-4 flex flex-col items-start space-y-7'>
<h1 className='text-2xl font-bold'>{product.title}</h1>
<div className='flex items-center space-x-3'>
    {Array(4).fill(1).map((item)=>(
        <FaStar className='text-yellow-500'/>
    ))
}
<span className='text-gray-500 font-semibold'>{product.rating} Reviews</span>
</div>
<div>
<h1 className='text-2xl font-bold'>${product.newPrice}</h1>
<p className='font-semibold'>Availability : <span className='text-[#23a6f0]'>In stock</span></p>
</div>

<p className='w-[400px] lg:w-[464px]'>{product.description}</p>

<div className=' border-[0.3px] border-gray-400 w-full'></div>

<div className='flex items-center space-x-3'>
    <div className='rounded-full w-6 h-6 bg-[#23a6f0]'></div>
    <div className='rounded-full w-6 h-6 bg-[#2dc071]'></div>
    <div className='rounded-full w-6 h-6 bg-[#e77c40]'></div>
    <div className='rounded-full w-6 h-6 bg-[#252b42]'></div>
</div>

<div className='flex items-center space-x-6 '>
    <Button className='text-white bg-[#23a6f0] hover:bg-[#20709e] '>Select Options</Button>
<CiHeart className='w-5 h-5'/>
<BsCart className='w-5 h-5 cursor-pointer' onClick={()=>cartObj.handleAddtoCart({id:product.id,title:product.title,description:product.description,price:product.newPrice})}/>
<IoEye className='w-5 h-5'/>
</div>



</div>
</div> 
  </div>
  </>
    </>
  )
}
