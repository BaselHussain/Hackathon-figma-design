"use client"
import React, { useContext } from 'react';
import { useParams } from 'next/navigation';
import {Montserrat} from "next/font/google";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { OrderContext } from '@/context';
const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })

export default function page() {
  const params = useParams(); // Retrieve the dynamic `id` from the URL
  const { id } = params;
  const orderObj=useContext(OrderContext)
  const singleOrder=orderObj.orders.find((order)=>order.id === Number(id))
  if (!singleOrder) {
    return <div className='h-screen flex items-center justify-center'><div className='rounded-full w-24 h-24 animate-spin border-4 border-r-transparent border-blue-700'></div></div>;
  }
  return (
    <>
    <Header/>
    <div className={`${Montserratfont.className} container w-full max-w-[2000px]`}>
<div className='w-full flex justify-center  h-screen'>
<div className='w-[60%] bg-card  mt-14'>
<h1 className='text-center font-bold text-3xl'>Thank you for your order Mr.{singleOrder.name}!</h1>
<p className='text-center font-semibold'>Your order id is {singleOrder?.id}</p>
<p className='text-center font-semibold'>We will send you a confirmation e-mail soon at {singleOrder.email}</p>
<p className='text-center font-semibold'>Estimated Delivery time is 3-4 days</p>
</div>
</div>
    </div>
    <Footer/>
    </>
  )
}
