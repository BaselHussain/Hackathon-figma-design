import { client } from '@/sanity/lib/client';
import React from 'react';
import Image from 'next/image';
import { Montserrat } from "next/font/google";
import { urlFor } from '@/sanity/lib/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-3">
          {products.map((product: any) => (
            <div
              key={product._id}
              className="flex flex-col space-y-6 h-[450px]"
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
              
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}
