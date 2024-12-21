"use client";
import React,{useState ,useMemo, useCallback} from 'react'
import { CartContext } from './context';

interface Cart{
    id: number;
    title: string;
    description: string;
    price: number
    
}

export default function CartProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const [cart,setCart]=useState<Cart[]>([])
    const total = useMemo(
        () => cart.reduce((sum, cartItem) => sum + cartItem.price, 0),
        [cart]
      );
    
    
        const handleAddtoCart = useCallback(
            (item: Cart) => setCart((prevCart) => [...prevCart, item]),
            []
          );
    
        const handleDeleteItem = useCallback(
            (id: number) =>
              setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id)),
            []
          );

  return (
    
      <CartContext.Provider value={{cart,handleAddtoCart,handleDeleteItem,total}}>
      {children}
      </CartContext.Provider>
   
  )
}
