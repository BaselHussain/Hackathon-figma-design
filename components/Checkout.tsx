"use client"
import React, { useContext, useState } from 'react';
import {loadStripe} from "@stripe/stripe-js";
import axios from "axios";
import { Montserrat } from "next/font/google";
import { Button } from './ui/button';
import { CartContext } from '@/context';

const Montserratfont = Montserrat({
    weight: ["400", "500", "600", "700"],
    style: "normal",
    subsets: ["latin"],
  });



  const stripePromise=loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)

export default function Checkout() {
  const [isClicked,setIsclicked]=useState<boolean>(false)
  const cartObj=useContext(CartContext)

 

  const createStripeSession = async () => {
    setIsclicked(true);
    const stripe = await stripePromise;
  
    try {
      const checkoutSession = await axios.post(`/api/checkout-sessions`, {
        cartItems: cartObj.cart,
        total: cartObj.total, // Assuming total price is stored in cart context
      });
  
      console.log(checkoutSession);
      const result = await stripe?.redirectToCheckout({
        sessionId: checkoutSession.data.id,
      });
  
      if (result?.error) {
        console.log(result?.error.message);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
   
  };
  



 
  return (
    <>
    <div className={`${Montserratfont.className} container w-full max-w-[2000px] relative`}>
        <div className='w-[50%] md:w-[40%] absolute right-3 top-0 flex flex-col gap-3'>
            <div className='flex justify-between items-center py-3 border-b'>
                <h2 className='font-semibold'>Grand Total:</h2>
                <span>${(cartObj.total).toFixed(2)}</span>
            </div>
           

<Button className='w-[60%] mx-auto mt-6 md:mt-10' disabled={isClicked} onClick={createStripeSession}>
  
 {isClicked?'Processing...' : "Check Out"}

  
  </Button>

        </div>
    </div>
    

    
    </>
  )
}
