"use client";
import { client } from '@/sanity/lib/client';
import React, { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { urlFor } from '@/sanity/lib/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CartContext } from '@/context';
import { Slider } from "@/components/ui/slider";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from './ui/button';
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi"
import { Label } from './ui/label';
import { Input } from './ui/input';


const Montserratfont = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: 'normal',
  subsets: ['latin'],
});

interface SanityProductList {
  _id: string;
  title: string;
  description: string;
  productImage: string;
  price: number;
  tags: string[];
  discountPercentage: number;
  isNew: boolean;
}

interface ShopProps{
  searchParams:{[key:string]:string | undefined}
}


export default function SanityProductList({searchParams}:ShopProps) {
  const cartObj = useContext(CartContext);
  if (!cartObj) return null;

  const [products, setProducts] = useState<SanityProductList[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filteredProducts, setFilteredProducts] = useState<SanityProductList[]>([]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [filterMinPrice, setFilterMinPrice] = useState<number>(0);
  const [filterMaxPrice, setFilterMaxPrice] = useState<number>(0);
  const [searchQuery,setSearchQuery]=useState<string>("")
 



  const handleFilterProducts = () => {
    const filtered = products.filter((product) =>
      (product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) &&
      product.price >= filterMinPrice &&
      product.price <= filterMaxPrice
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    handleFilterProducts();
  }, [filterMinPrice, filterMaxPrice,searchQuery]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `
        *[_type == "product"]{
          _id,
          title,
          description,
          "productImage": productImage.asset->url,
          price,
          tags,
          discountPercentage,
          isNew
        }
      `;

      try {
        const data = await client.fetch(query);
        setProducts(data);
        setFilteredProducts(data);

        if (data.length > 0) {
          const min = Math.min(...data.map((product: SanityProductList) => product.price));
          const max = Math.max(...data.map((product: SanityProductList) => product.price));
          setMinPrice(min);
          setMaxPrice(max);
          setFilterMinPrice(min);
          setFilterMaxPrice(max);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center my-20">Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className={`${Montserratfont.className} container w-full max-w-[2000px]`}>
      <h1 className='text-xl font-bold text-center mb-2'>Filter Product by Price Range</h1>
        <div className="w-[90%] mx-auto flex items-center justify-center gap-12">
          
          <div className="w-1/2">
            <Label>Min: ${filterMinPrice}</Label>
            <Slider
              min={minPrice}
              max={maxPrice}
              step={10}
              value={[filterMinPrice]}
              onValueChange={(value) => setFilterMinPrice(value[0])}
              className="w-full cursor-pointer"
            />
          </div>
          <div className="w-1/2">
            <Label>Max: ${filterMaxPrice}</Label>
            <Slider
              min={minPrice}
              max={maxPrice}
              step={10}
              value={[filterMaxPrice]}
              onValueChange={(value) => setFilterMaxPrice(value[0])}
              className="w-full cursor-pointer"
            />
          </div>
        </div>
<div className='w-[90%] mx-auto mt-10 flex justify-end relative'>
  <Input className='w-[60%] md:w-[35%] lg:w-[30%] '
  placeholder='Search Product'
  value={searchQuery}
  onChange={(e)=>setSearchQuery(e.target.value)}
  />
  <FiSearch className='absolute w-6 h-6 top-1/2 -translate-y-1/2 right-2 cursor-pointer'/>
</div>
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-12 my-14">
          {filteredProducts.map((product) => (
            <div key={product._id} className="flex flex-col justify-center gap-y-2 h-[600px] cursor-pointer">
              <Link href={`/SanityProduct/${product._id}`}>
                <div className="h-[300px] w-full">
                  {product.productImage ? (
                    <Image
                      src={urlFor(product.productImage).url()}
                      alt={product.title || 'Product image'}
                      width={4000}
                      height={4000}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                      No Image Available
                    </div>
                  )}
                </div>
                <h1 className="text-center mt-5 text-xl font-bold">{product.title}</h1>
                <p className="text-center line-clamp-3">{product.description}</p>
                <h1 className="text-center text-xl font-bold">${product.price}</h1>
              </Link>

              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    className="cursor-pointer bg-red-700 hover:bg-red-500 w-[60%] mx-auto"
                    onClick={() =>
                      cartObj.handleAddtoCart({
                        id: product._id,
                        title: product.title,
                        description: product.description,
                        price: product.price,
                        src: product.productImage,
                      })
                    }
                  >
                    Add To Cart
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-scroll">
                  <SheetHeader>
                    <SheetTitle className="text-3xl font-bold text-center">Cart Items</SheetTitle>
                    <SheetDescription className="mt-20">
                      <ul className="list-decimal w-full">
                        {cartObj.cart.map((item) => (
                          <li
                            key={item.id}
                            className="text-black text-sm font-semibold flex items-center justify-between space-x-2 w-full py-4"
                          >
                            <div className="h-[70px] w-[50px]">
                              <Image
                                src={item.src}
                                alt="product"
                                width={1000}
                                height={1000}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span>
                              {item.title}
                              <p className="flex items-center gap-2 justify-center mt-2">
                                <FaMinus onClick={() => cartObj.handleUpdateQuantity(item.id, -1)} />
                                <span>{item.quantity}</span>
                                <FaPlus onClick={() => cartObj.handleUpdateQuantity(item.id, 1)} />
                              </p>
                            </span>
                            <span>${item.price}</span>
                            <FaTrash className="cursor-pointer" onClick={() => cartObj.handleDeleteItem(item.id)} />
                          </li>
                        ))}
                      </ul>
                      <div className="mt-20">
                        <h1 className="text-center text-black text-2xl font-bold">
                          SubTotal: ${cartObj.total.toFixed(2)}
                        </h1>
                      </div>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          ))}

          
        </div>
      </div>
      <Footer />
    </>
  );
}
