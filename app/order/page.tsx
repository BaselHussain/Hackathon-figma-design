"use client"
import React,{useState,useEffect} from 'react'

export default function page() {
    const [orderId,setOrderId]=useState<number>()
    const [isSubmitted,setIsSubmitted]=useState<boolean>(false)
useEffect(()=>{
if(isSubmitted){
  const generateOrderID=()=>{
    const newOrderID=Math.floor(Math.random()*90000 + 10000)
    setOrderId(newOrderID)
   }
   generateOrderID()
}
},
[isSubmitted])
  return (
    <div>
      hello
    </div>
  )
}
