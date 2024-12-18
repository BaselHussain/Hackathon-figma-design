"use client"
import { CartContext } from '@/context'
import React,{useContext} from 'react'



export default function page() {
    const cartItems=useContext(CartContext)
    const id:any=cartItems.cart.map((item)=>{
        return(
            item.id
        )
    })
  return (
    <>
    <div>
        asas
      {cartItems.cart.map((item)=>(
        <p>{item.title}
        {item.description}
        </p>
        
      ))}
      {cartItems.handleDeleteItem(id)}
    </div>
    </>
  )
}
