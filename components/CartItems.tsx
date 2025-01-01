"use client";
import { CartContext } from "@/context";
import React, { useContext,useState } from "react";
import { Montserrat } from "next/font/google";
import { FaTrash } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import Image from "next/image";

const Montserratfont = Montserrat({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
});

export default function cartObj() {
  const cartObj = useContext(CartContext);

    
  

  return (
    <div
      className={`${Montserratfont.className} container w-full max-w-[2000px]`}
    >
      <div className="w-[90%] mx-auto">
        {/* Table Header */}
        <div className="w-full grid grid-cols-[2fr_1fr_1fr_1fr] gap-0 border-b pb-4">
          <h1 className="text-base md:text-2xl font-semibold">Items</h1>
          <h1 className="text-base md:text-2xl font-semibold text-center">Price</h1>
          <h1 className="text-base md:text-2xl font-semibold text-center">Quantity</h1>
          <h1 className="text-base md:text-2xl font-semibold text-center">Total</h1>
        </div>

        {/* Cart Items */}
        {cartObj.cart.length > 0 ? (
          cartObj.cart.map((item) => (
            <div
              key={item.id}
              className="w-full grid grid-cols-[2fr_1fr_1fr_1fr] gap-0 items-center border-b py-4"
            >
              {/* Item Details */}
              <div className="flex items-center gap-x-1 md:gap-x-4">
                <div className="image-div h-[40px] w-[30px] md:h-[80px] md:w-[70px]">
                  <Image
                    src={item.src}
                    alt="product"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-fill md:object-contain"
                  />
                </div>
                <p className="text-xs md:text-base ">{item.title}</p>
              </div>

              {/* Price */}
              <p className="text-center text-xs md:text-base">${item.price.toFixed(2)}</p>

              {/* Quantity */}
              <div className="text-center text-xs md:text-base flex items-center justify-center gap-2">
<FaMinus onClick={()=>cartObj.handleUpdateQuantity(item.id,-1)} className="cursor-pointer"/>
<p>{item.quantity}</p>
<FaPlus onClick={()=>cartObj.handleUpdateQuantity(item.id,1)} className="cursor-pointer"/>

                </div>

              {/* Total */}
              <p className="text-center text-xs md:text-base relative">{(item.price * (item.quantity || 1)).toFixed(2)} <FaTrash onClick={()=>cartObj.handleDeleteItem(item.id)} className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"/></p>
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-lg font-semibold">Your cart is empty</p>
          </div>
        )}
      </div>
    </div>
  );
}
