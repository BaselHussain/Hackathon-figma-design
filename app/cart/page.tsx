"use client"
import Header from '@/components/Header'

import React,{useContext} from 'react';
import CartItems from '@/components/CartItems';
import Footer from '@/components/Footer';
;




export default function page() {
    
  
  return (
    <>
    
    <Header/>
     <CartItems/>
     <Footer/>
    </>
  )
}
