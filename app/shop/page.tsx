import { client } from '@/sanity/lib/client';
import React from 'react';
import Image from 'next/image';
import { Montserrat } from "next/font/google";
import { urlFor } from '@/sanity/lib/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const Montserratfont = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: "normal",
  subsets: ["latin"]
});

export default async function page() {
  const query = `
    *[_type == "product"]{
      _id,
      title,
      description,
      productImage,
      price,
      tags,
      discountPercentage,
      isNew
    }
  `;

  const products = await client.fetch(query);

  return (
    <>
    <Header/>
      <div className={`${Montserratfont.className} container w-full max-w-[2000px]`}>
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-12 my-20">
          {products.map((product: any) => (
            <Link href={`/SanityProduct/${product._id}`} key={product._id}>
            <div
              key={product._id}
              className="flex flex-col justify-center gap-y-2 h-[550px] cursor-pointer"
            >
              <div className="h-[300px] w-full">
                {product.productImage ? (
                  <Image
                    src={urlFor(product.productImage).url()}
                    alt={product.title || 'Product image'}
                    width={4000}
                    height={4000}
                    className="w-full h-full object-fill"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image Available
                  </div>
                )}
              </div>
              <h1 className="text-center mt-5 text-xl font-bold">{product.title}</h1>
              <p className='text-center line-clamp-3'>{product.description}</p>
              <h1 className='text-center text-xl font-bold'>${product.price}</h1>
              
            </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}
