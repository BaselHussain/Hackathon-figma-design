"use client"
import Header from '@/components/Header'

import React from 'react';

import Footer from '@/components/Footer';
import Checkout from '@/components/Checkout';
import CartItems from '@/components/CartItems';
;




export default function page() {
    
  
  return (
    <>
    
    <Header/>
     <CartItems/>
     <Checkout/>
    

    <div className='mt-96'>
      
    </div>

     <Footer/>
    </>
  )
}
