"use client"
import React,{useState,useEffect} from 'react';
import {Montserrat} from "next/font/google";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })

export default function page() {
    const [orderId,setOrderId]=useState<number>()
useEffect(()=>{

  const generateOrderID=()=>{
    const newOrderID=Math.floor(Math.random()*90000 + 10000)
    setOrderId(newOrderID)
   }
   generateOrderID()

},
[])
  return (
    <>
    <Header/>
    <div className={`${Montserratfont.className} container w-full max-w-[2000px]`}>
<div className='w-full flex justify-center  h-screen'>
<div className='w-[60%] bg-card  mt-14'>
<h1 className='text-center font-bold text-3xl'>Thank you for your order!</h1>
<p className='text-center font-semibold'>Your order id is {orderId}</p>
<p className='text-center font-semibold'>We will send you a confirmation e-mail soon</p>
</div>
</div>
    </div>
    <Footer/>
    </>
  )
}
