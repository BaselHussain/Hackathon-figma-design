import React from 'react';
import {Montserrat} from "next/font/google";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Image from 'next/image';


const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })

  const team=[{
    id:1,
    src:'/images/japanese-topa-girl.png',
    name:"Username",
    profession:"Profession"
  },{
    id:2,
    src:'/images/blue-sweater-girl.png',
    name:"Username",
    profession:"Profession"
  },{
    id:3,
    src:'/images/yellow-music-girl.png',
    name:"Username",
    profession:"Profession"
  },{
    id:4,
    src:'/images/boy-smile.png',
    name:"Username",
    profession:"Profession"
  },{
    id:5,
    src:'/images/purple-bg-girl.png',
    name:"Username",
    profession:"Profession"
  },{
    id:6,
    src:'/images/orange-girl-smile.png',
    name:"Username",
    profession:"Profession"
  },{
    id:7,
    src:'/images/red-girl-smile.png',
    name:"Username",
    profession:"Profession"
  },{
    id:8,
    src:'/images/glasses-whiteshirt-girl.png',
    name:"Username",
    profession:"Profession"
  },{
    id:9,
    src:'/images/african-music-girl.png',
    name:"Username",
    profession:"Profession"
  }
]


export default function TeamsSecondSection() {
  return (
    <>
    <div className={`${Montserratfont.className} container w-full max-w-[2000px] pt-24 space-y-20`}>
<div className='w-[80%] mx-auto'>
<h1 className='text-center text-3xl font-bold'>Meet Our Team</h1>

</div>

<div className='w-[80%] mx-auto'>
<div className=' grid grid-cols-1 md:grid-cols-3 gap-x-8  gap-y-4 md:gap-y-4 lg:gap-y-20'>
{team.map((member)=>(
    <div key={member.id} className='h-[383px] '>
<div className='image-div h-[231px] md:h-[180px] lg:h-[231px] w-full'>
<Image
src={member.src}
alt='member'
width={2000}
height={2000}
className='w-full h-full'/>
</div>

<div className='flex flex-col items-center gap-y-2 mt-5'>
<h2 className='text-center font-bold'>{member.name}</h2>
<h3 className='text-sm text-[#737373] text-center'>{member.profession}</h3>
<div className='flex space-x-5 text-[#23A6F0] justify-center '>
    <FaFacebook className='w-5 h-5'/>
    <FaInstagram className='w-5 h-5'/>
    <FaTwitter className='w-5 h-5'/>
</div>
</div>


    </div>
))}
</div>


</div>
    </div>
    
    </>
    
  )
}
