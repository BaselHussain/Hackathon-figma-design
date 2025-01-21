"use client";
import { CartContext, WishListContext } from "@/context";
import Image from "next/image";
import React, { useContext } from "react";
import { Montserrat } from "next/font/google";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "sonner";
import { Button } from "./ui/button";
import Link from "next/link";

const Montserratfont = Montserrat({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
});

export default function WishListItems() {
  const cartObj = useContext(CartContext);
  const wishListObj = useContext(WishListContext);

  return (
    <div className={`${Montserratfont.className} w-full container max-w-[2000px] pb-24`}>
      <div className="w-[90%] lg:w-[80%] mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Your Wishlist</h1>
        {wishListObj.wishList.length > 0 ? (
          <div className="flex flex-col gap-6">
            {wishListObj.wishList.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white shadow-md rounded-lg overflow-hidden w-full p-4"
              >
                {/* Image Section */}
                <Link href={`/SanityProduct/${item.id}`}>
                  <div className="w-24 h-24 md:w-32 md:h-32 mr-4">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={500}
                      height={500}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </Link>

                {/* Details Section */}
                <div className="flex flex-col justify-between flex-1">
                  <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 truncate">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 text-sm mt-2">
                      Price: ${item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 justify-between items-center mt-auto">
                    <Button
                      className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm"
                      onClick={() => {
                        cartObj.handleAddtoCart({
                          id: item.id,
                          title: item.title,
                          description: item.description,
                          price: item.price,
                          src: item.src,
                        });
                        toast("Product has been added to your cart");
                      }}
                    >
                      Add to Cart
                    </Button>
                    <button
                      className="text-red-600 hover:text-red-800 flex items-center gap-2"
                      onClick={() => wishListObj.handleDeleteFromWishList(item.id)}
                    >
                      <FaTrashAlt className="w-5 h-5" />
                      <span className="hidden sm:inline">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center mt-12">
            Your wishlist is empty.
          </p>
        )}
      </div>

      <Link href="/shop">
        <p className="text-center my-8 text-blue-600 text-sm hover:underline">
          Go Back to Shopping
        </p>
      </Link>
    </div>
  );
}
