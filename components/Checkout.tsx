import React, { useContext } from 'react';
import { Montserrat } from "next/font/google";
import { Button } from './ui/button';
import { CartContext } from '@/context';
const Montserratfont = Montserrat({
    weight: ["400", "500", "600", "700"],
    style: "normal",
    subsets: ["latin"],
  });

export default function Checkout() {
    const cartObj=useContext(CartContext)
  return (
    <>
    <div className={`${Montserratfont.className} container w-full max-w-[2000px] relative`}>
        <div className='w-[50%] md:w-[40%] absolute right-3 top-0 flex flex-col gap-3'>
            <div className='flex justify-between items-center py-3 border-b'>
                <h2 className='font-semibold'>Grand Total:</h2>
                <span>${(cartObj.total).toFixed(2)}</span>
            </div>
           

<Button className='w-[60%] mx-auto mt-6 md:mt-10'>Check Out</Button>

        </div>

    </div>
    </>
  )
}
