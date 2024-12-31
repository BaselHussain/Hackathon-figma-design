"use client"
import Header from '@/components/Header'

import React,{useContext} from 'react';
import CartItems from '@/components/CartItems';
import Footer from '@/components/Footer';
import Checkout from '@/components/Checkout';
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
