"use client"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { client } from '@/sanity/lib/client'
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react'
import { Button } from './ui/button';
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { IoEye } from "react-icons/io5";
import { CartContext, WishListContext } from '@/context';
import { toast } from "sonner"
import { Montserrat } from "next/font/google";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa6";
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';

const Montserratfont = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: "normal",
  subsets: ["latin"]
})

export default function SanitySingleProduct({ id }: { id: string }) {
  const cartObj = useContext(CartContext)
  const wishListObj = useContext(WishListContext)

  interface SanitySingleProduct {
    _id: string,
    title: string,
    description: string,
    productImage: string,
    price: number,
    tags: string[],
    discountPercentage: number,
    isNew: boolean
  }

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

const [allProducts,setAllProducts]=useState<SanityProductList[]>()
  const [sanitySingleProduct, setSanitySingleProduct] = useState<SanitySingleProduct>()
  const [relatedProducts,setRelatedProducts]=useState<SanityProductList[]>([])
  const [tags,setTags]=useState<string[]>([])
  const { wishList } = wishListObj; 
  const [isPresentInWishList, setIsPresentInWishList] = useState(() => {
    return wishList.some((item) => item.id === sanitySingleProduct?._id);
  });

  useEffect(() => {
    setIsPresentInWishList(wishList.some((item) => item.id === sanitySingleProduct?._id));
  }, [wishList, sanitySingleProduct]);
  
  useEffect(() => {
      const fetchAllProducts = async () => {
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
          setAllProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        } 
      };
  
      fetchAllProducts();
    }, []);
  

  useEffect(() => {
    const fetchSanitySingleProduct = async () => {
      const query = `*[_type=="product" && _id=='${id}'][0]{
        _id,
        title,
        description,
        "productImage":productImage.asset->url,
        price,
        tags,
        discountPercentage,
        isNew
      }`
      const data = await client.fetch(query)
      setSanitySingleProduct(data);
      setTags(data.tags || [])
    }
    fetchSanitySingleProduct()
  }, [id])

  useEffect(()=>{
    const handleRelatedProducts = () => {
      if (tags.length === 0 || allProducts?.length === 0) return;
    
      const related = allProducts?.filter((product) => {
       
        const hasMatchingTag = tags.some((tag)=>product.tags.includes(tag))
    
        return hasMatchingTag && product._id !== sanitySingleProduct?._id;
      });
    
      setRelatedProducts(related ?? []);
      
    };
    handleRelatedProducts()
  },[tags, allProducts, sanitySingleProduct,relatedProducts])
  

  const handleCartClick = () => {
    cartObj.handleAddtoCart({
      id: sanitySingleProduct?._id ?? "",
      title: sanitySingleProduct?.title ?? "",
      description: sanitySingleProduct?.description ?? "",
      price: sanitySingleProduct?.price ?? 0,
      src: sanitySingleProduct?.productImage ?? "",
    });
    toast("Product has been added to your cart");
  }

  
  const handleToggleHeartIcon = () => {
    if (isPresentInWishList) {
      handleDeleteHeartClick();
    } else {
      handleHeartClick();
    }
  };
  
  const handleHeartClick = () => {
    wishListObj.handleAddtoWishList({
      id: sanitySingleProduct?._id ?? "",
      title: sanitySingleProduct?.title ?? "",
      description: sanitySingleProduct?.description ?? "",
      price: sanitySingleProduct?.price ?? 0,
      src: sanitySingleProduct?.productImage ?? "",
    });
  
    setIsPresentInWishList(true); // Update state
    toast("Product has been added to WishList");
  };
  
  const handleDeleteHeartClick = () => {
    wishListObj.handleDeleteFromWishList(sanitySingleProduct?._id ?? "");
  
    setIsPresentInWishList(false); // Update state
    toast("Product has been removed from WishList");
  };
  

 

  return (
    <>
      <Header />
      <div className={`${Montserratfont.className} container w-full max-w-[2000px]`}>
      <div className='my-24 second-div w-[90%] md:w-[83%] lg:w-[80%]  mx-auto flex flex-col md:flex-row md:items-start md:justify-between'>
      {sanitySingleProduct?.productImage?  (
      <div className='image-div w-full h-[480px] md:w-[220px] md:h-[300px] lg:w-[280px] lg:h-[400px] xl:w-[350px]  xl:h-[420px] 2xl:w-[450px] 2xl:h-[550px] '>
      <Image
      src={sanitySingleProduct?.productImage}
      alt={sanitySingleProduct?.title}
      width={1000}
      height={1000}
      className='w-full h-full '/>
      </div>):(
        <p>no image</p>
      )
}
      <div className='singleProduct-description-div md:h-[420px] h-[500px]  lg:mr-5 xl:mr-[8.5rem] mt-4 md:mt-0  flex flex-col items-start gap-y-4 md:gap-y-2 lg:gap-y-4 xl:gap-y-6'>
      <h1 className='text-2xl font-bold'>{sanitySingleProduct?.title}</h1>
      <div className='flex items-center space-x-3'>
          {Array(4).fill(1).map((item,i)=>(
              <FaStar key={i} className='text-yellow-500'/>
          ))
      }
      <span className='text-gray-500 font-semibold'>4.5 Reviews</span>
      </div>
      <div>
      <h1 className='text-2xl font-bold'>${sanitySingleProduct?.price}</h1>
     
      </div>
      
      <p className='w-full md:w-[400px] lg:w-[484px]'>{sanitySingleProduct?.description.substring(0,200)}</p>
      
      <div className=' border-[0.3px] border-gray-400 w-full'></div>
      
     
      
      <div className='flex items-center space-x-6 mt-8 md:mt-5 lg:mt-10'>
          
          {isPresentInWishList? (
                  <FaHeart className='w-5 h-5 text-red-600 cursor-pointer' onClick={handleToggleHeartIcon} />
                ) : (
                  <FaRegHeart className='w-5 h-5 cursor-pointer' onClick={handleToggleHeartIcon} />
                )}
      <BsCart className='w-5 h-5 cursor-pointer'  onClick={handleCartClick}/>
      <IoEye className='w-5 h-5'/>
      </div>
      
      
      
      </div>
      </div>  

      <div className='w-[85%] mx-auto mt-24 lg:mt-44'>
        <h1 className='text-left text-3xl font-bold '>Products You may also like</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3'>
{relatedProducts.map((relatedProduct)=>(
  <div key={relatedProduct._id} className="flex flex-col justify-center gap-y-2 h-[600px] cursor-pointer">
  <Link href={`/SanityProduct/${relatedProduct._id}`}>
    <div className="h-[300px] w-full">
      {relatedProduct.productImage ? (
        <Image
          src={urlFor(relatedProduct.productImage).url()}
          alt={relatedProduct.title || 'Product image'}
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
    <h1 className="text-center mt-5 text-xl font-bold">{relatedProduct.title}</h1>
    <p className="text-center line-clamp-3">{relatedProduct.description}</p>
    <h1 className="text-center text-xl font-bold">${relatedProduct.price}</h1>
  </Link>

  <Sheet>
    <SheetTrigger asChild>
      <Button
        className="cursor-pointer bg-red-700 hover:bg-red-500 w-[60%] mx-auto"
        onClick={() =>
          cartObj.handleAddtoCart({
            id: relatedProduct._id,
            title: relatedProduct.title,
            description: relatedProduct.description,
            price: relatedProduct.price,
            src: relatedProduct.productImage,
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

      </div>
      <Footer />
    </>
  )
}
