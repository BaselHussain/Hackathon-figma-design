"use client";
import React,{useState ,useMemo, useCallback,useEffect} from 'react'
import { CartContext } from './context';

interface Cart{
    id: number;
    title: string;
    description: string;
    price: number;
    quantity?:number;
    src:string
    
}

export default function CartProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const [cart,setCart]=useState<Cart[]>([])
     // Save the cart to localStorage when it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  // Load the cart from localStorage on page load
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  
    const total = useMemo(
      () => cart.reduce((sum, cartItem) => sum + (cartItem.price * (cartItem.quantity || 1)), 0),
      [cart]
    );
    
    
        const handleAddtoCart = useCallback(
            (item: Cart) => {
setCart((prevCart)=>{
  const itemExists=prevCart.find((cartItem)=>cartItem.id===item.id)
  if(itemExists){
  return  prevCart.map((cartItem)=>
      cartItem.id===item.id?
      {...cartItem,quantity:(cartItem.quantity || 1) + 1}
      :cartItem
    )
  }
  return [...prevCart,{...item, quantity:  1}]
})

            },[]
          );
    
        const handleDeleteItem = useCallback(
            (id: number) =>
              setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id)),
            []
          );

          const handleUpdateQuantity=useCallback(
            (id:number,change:number)=>{
              setCart((prevCart)=>
              prevCart.map((cartItem)=>
              cartItem.id===id ?
          {...cartItem,quantity: (cartItem.quantity || 1) + change > 0 ? (cartItem.quantity || 1) + change : 1}
          :cartItem
        )
      )
    },[]
          )

  return (
    
      <CartContext.Provider value={{cart,handleAddtoCart,handleDeleteItem,handleUpdateQuantity,total}}>
      {children}
      </CartContext.Provider>
   
  )
}
