"use client"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react'
import { Button } from './ui/button';
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { IoEye } from "react-icons/io5";
import { CartContext } from '@/context';
import { toast } from "sonner"
import {Montserrat} from "next/font/google";

const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })


export default  function SanitySingleProduct({id}:{id:string}) {
    const cartObj=useContext(CartContext)
    interface SanitySingleProduct{
        _id:string,
        title:string,
        description:string,
        productImage:string,
        price:number,
        tags:string[],
        discountPercentage:number,
        isNew:boolean
    }
    const [sanitySingleProduct,setSanitySingleProduct]=useState<SanitySingleProduct>()
  

    useEffect(()=>{
        const fetchSanitySingleProduct=async()=>{
            const query=`
            *[_type=="product" && _id=='${id}'][0]{
          _id,
          title,
          description,
            "productImage":productImage.asset->url,
              price,
              tags,
              discountPercentage,
              isNew
        } `
        const data=await client.fetch(query)
        setSanitySingleProduct(data);
        }
        fetchSanitySingleProduct()
    },[])
   
    const handleCartClick = () => {
        cartObj.handleAddtoCart({
          id: sanitySingleProduct?._id ?? "",
          title: sanitySingleProduct?.title ?? "",
          description: sanitySingleProduct?.description ?? "",
          price: sanitySingleProduct?.price ?? 0,
          src: sanitySingleProduct?.productImage ?? "",
        }) ;
      
        toast("Product has been added to your cart", {
          
        });
      }


    
    
  return (
    <>
    <Header/>
    <section className={`${Montserratfont.className} text-gray-600 body-font overflow-hidden`} >
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      {sanitySingleProduct?.productImage ? (
                        <Image
                          src={sanitySingleProduct.productImage}
                          alt={sanitySingleProduct?.title || 'sanitySingleProduct image'}
                          width={4000}
                          height={4000}
                          className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                          No Image Available
                        </div>
                      )}
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm mb-3 text-gray-500 tracking-widest">
        {sanitySingleProduct?.isNew?"New sanitySingleProduct":" Old Edition"}
        </h2>
        <h1 className="text-2xl font-bold mb-1">{sanitySingleProduct?.title}</h1>
        <div className="flex mb-4">
          <div className='flex items-center space-x-3'>
              {Array(4).fill(1).map((item)=>(
                  <FaStar className='text-yellow-500'/>
              ))
          }
          <span className='text-gray-500 font-semibold'> Reviews</span>
          </div>
        </div>
        <span className=" text-2xl font-bold">${sanitySingleProduct?.price.toFixed(2)}</span>
        <p className="leading-relaxed mt-5">{sanitySingleProduct?.description.substring(0,400)}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
        </div>
        
          
          <div className='flex items-center space-x-6 mt-8 md:mt-5 lg:mt-10'>
              <Button className='text-white bg-[#23a6f0] hover:bg-[#20709e] '>Select Options</Button>
          <CiHeart className='w-5 h-5'/>
          <BsCart className='w-5 h-5 cursor-pointer'  onClick={handleCartClick}/>
          <IoEye className='w-5 h-5'/>
          
          
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
    </>
  )
}
