"use client";
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from './ui/button';
import { FaTrash } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';
import { CartContext } from '@/context';

import { useEffect, useState,useContext } from 'react';
interface Product {
    id: number;
    title: string;
    description: string;
    oldPrice: number;
    newPrice: number;
    src: string;
  }

export default function ProductList() {
   const cartObj=useContext(CartContext)
      if (!cartObj) return null;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`);
  
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
  
        const data: Product[] = await response.json();
        setProducts(data);
        console.log(products)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchProducts();
  }, []);

  return (
    <div className='w-full container max-w-[2000px]'>
      <div className='w-[90%] xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-y-24 md:gap-x-6  xl:gap-y-10 '>
      {products.map((product) => (
         <div key={product.id} className='flex flex-col space-y-6 h-[615px]  w-[338px] mx-auto md:w-full lg:w-[220px] xl:w-[239px]'>
         <Link href={`/SingleProduct/${product.id}`}>
            <div className='h-[427px] w-full'>
        <Image
        src={product.src}
        alt='image'
        width={4000}
        height={4000}
        className='w-full h-full object-fill '/>
        </div>
        
        <h1 className='text-center mt-5 text-xl font-bold'>{product.title}</h1>
        <p className='text-center text-[#737373] font-semibold '>{product.description}</p>
        </Link>
        <p className='text-center text-sm font-semibold'><span className='text-[#737373] mr-2'>${product.oldPrice}</span>   <span className='text-green-800'>${product.newPrice}</span></p>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button className='cursor-pointer bg-red-700 hover:bg-red-500 w-[60%] mx-auto' onClick={()=>cartObj.handleAddtoCart({id:product.id,title:product.title,description:product.description,price:product.newPrice,src:product.src})}>Add To cart
        
          </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className=' text-3xl font-bold text-center'>Cart Items</SheetTitle>
              <SheetDescription className='mt-20'>
                <ul className='list-decimal  w-full'>
                    {cartObj.cart.map((item,index)=>(
                        <div key={item.id} className='flex items-center justify-around  w-full'>
                            <span className='text-lg text-black font-bold mr-3'>{index+1}</span>
                        <li key={item.id} className='text-black text-lg font-bold flex items-center space-x-4 '>
                           
                            <div className='h-[50px] w-[40px]'>
                                <Image
                                src={item.src}
                                alt='product'
                                width={1000}
                                height={1000}
                                className='w-full h-full object-contain'/>
        
                            </div>
                            <span>{item.title}</span>
                        <span>${item.price}</span>
                        <FaTrash className='cursor-pointer' onClick={()=>cartObj.handleDeleteItem(item.id)}/>
                        </li>
        
                        </div>
                    ))}
                </ul>
                <div className='mt-20'>
                    <h1 className='text-center text-black text-2xl font-bold'>SubTotal : ${cartObj.total}</h1>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
                </div>
               
      ))}
      </div>
    </div>
  );
}
