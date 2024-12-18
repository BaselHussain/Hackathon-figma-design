"use client"
import { Button } from '@/components/ui/button'
import { CartContext } from '@/context'
import React,{useContext} from 'react'



export default function page() {
    const cartItems=useContext(CartContext)
  
  return (
    <>
    
      
      {cartItems.cart.map((item)=>(
        <div key={item.id} className='flex space-x-10'>
          <p>{item.title}</p>
          <p>{item.price}</p>
<Button onClick={()=>cartItems.handleDeleteItem(item.id)}>Delete</Button>
          
        </div>
        
      ))}
     <div>{cartItems.total}</div>
    
    </>
  )
}
