import React from 'react'
import {Montserrat} from "next/font/google"
import { FaAngleRight } from "react-icons/fa6";
import Image from 'next/image'
const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })

export default function SingleProductSecondSection() {
  return (
    <>
    <div className={`${Montserratfont.className} container w-full max-w-[1439px] py-16`}>


<div className='first-div w-[95%] lg:w-[90%] xl:w-[80%]  mx-auto flex items-center justify-center space-x-7 border-b pb-7'>
<span className='text-gray-500 font-semibold'>Description</span>
<span className='text-gray-500 font-semibold'>Additional Information</span>
<span className='text-gray-500 font-semibold'>Reviews (0)</span>

</div>

<div className='second-div w-[80%] md:w-[95%] py-10 lg:w-[90%]  xl:w-[80%]  mx-auto'>
<div className='grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-4 lg:gap-6 '>
<div className='image-grid row-span-[75%] lg:row-span-2'>
    <Image
    src={'/images/furniture.png'}
    alt='furniture'
    width={1000}
    height={1000}
    className='w-full h-full'/>
</div>
<div className='second-grid row-span-2'>
    <h1 className='text-2xl font-bold'>the quick fox jumps over </h1>
    <div className='flex flex-col space-y-4 mt-6 text-gray-500'>
    <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
<p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
<p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
</div>
</div>
<div className='third-grid row-span-2'>
<h1 className='text-2xl font-bold'>the quick fox jumps over </h1>
<div className='flex flex-col space-y-4 mt-6 text-gray-500'>
<p className='flex space-x-4 items-center'><FaAngleRight/><span>the quick fox jumps over</span> </p>
<p className='flex space-x-4 items-center'><FaAngleRight/><span>the quick fox jumps over</span> </p>
<p className='flex space-x-4 items-center'><FaAngleRight/><span>the quick fox jumps over</span> </p>
<p className='flex space-x-4 items-center'><FaAngleRight/><span>the quick fox jumps over</span> </p>
</div>
<h1 className='text-2xl font-bold mt-6'>the quick fox jumps over </h1>
<div className='flex flex-col space-y-4 mt-6 text-gray-500'>
<p className='flex space-x-4 items-center'><FaAngleRight/><span>the quick fox jumps over</span> </p>
<p className='flex space-x-4 items-center'><FaAngleRight/><span>the quick fox jumps over</span> </p>
<p className='flex space-x-4 items-center'><FaAngleRight/><span>the quick fox jumps over</span> </p>
</div>
</div>


</div>
     
</div>



    </div>
    </>
  )
}
