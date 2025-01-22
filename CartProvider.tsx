"use client";
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { CartContext, WishListContext } from './context';

interface Cart {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity?: number;
  src: string;
}

interface WishList{
  id:string;
  title:string;
  description: string;
  price:number;
  src:string
  }

function useLocalStorage<T>(key: string) {
  const [storedValue, setStoredValue] = useState<T | null>(null); 

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const item = window.localStorage.getItem(key);
        if (item) {
          setStoredValue(JSON.parse(item));
        }
      } catch (error) {
        console.error("Error reading from localStorage", error);
      }
    }
  }, [key]);

  const setValue = (value: T | ((val: T | null) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  };

  return [storedValue, setValue] as const;
}

export default function CartProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cart, setCart] = useLocalStorage<Cart[]>("cart");
  const [wishList, setWishList] = useLocalStorage<WishList[]>("wishlist");

  // If the cart is null (first time loading), initialize it as an empty array
  const cartData = cart ?? [];
const wishListData=wishList ?? []

  const total = useMemo(
    () =>
      cartData.reduce(
        (sum, cartItem) => sum + cartItem.price * (cartItem.quantity || 1),
        0
      ),
    [cartData]
  );

  const handleAddtoCart = useCallback(
    (item: Cart) => {
      setCart((prevCart) => {
        const cartItems = prevCart ?? []; 
        const itemExists = cartItems.find((cartItem) => cartItem.id === item.id);
        if (itemExists) {
          return cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
              : cartItem
          );
        }
        return [...cartItems, { ...item, quantity: 1 }];
      });
    },
    [setCart]
  );

  const handleAddtoWishList=useCallback(
    (item:WishList)=>{
      setWishList((prevWishList)=>{
      const  wishListItems=prevWishList ?? []
     const itemExist=wishListItems.find((wishListItem)=>wishListItem.id===item.id)
     if(itemExist){
      return wishListItems
     }
        return [...wishListItems,item]
      })
    },[setWishList]
  );


  const handleDeleteItem = useCallback(
    (id: string) => {
      setCart((prevCart) => {
        const cartItems = prevCart ?? []; // Fallback to empty array if prevCart is null
        return cartItems.filter((cartItem) => cartItem.id !== id);
      });
    },
    [setCart]
  );

  const handleDeleteFromWishList = useCallback(
    (id: string) => {
      setWishList((prevWishList) => {
        const wishListItems = prevWishList ?? []; // Fallback to empty array if prevCart is null
        return wishListItems.filter((wishListItem) => wishListItem.id !== id);
      });
    },
    [setWishList]
  );

  const handleUpdateQuantity = useCallback(
    (id: string, change: number) => {
      setCart((prevCart) => {
        const cartItems = prevCart ?? []; // Fallback to empty array if prevCart is null
        return cartItems.map((cartItem) =>
          cartItem.id === id
            ? {
                ...cartItem,
                quantity: (cartItem.quantity || 1) + change > 0? (cartItem.quantity || 1) + change: 1,
              }
            : cartItem
        );
      });
    },
    [setCart]
  );

  return (
    
    <CartContext.Provider
      value={{ cart: cartData, handleAddtoCart, handleDeleteItem, handleUpdateQuantity, total }}
    >
      <WishListContext.Provider
        value={{ wishList: wishListData, handleAddtoWishList, handleDeleteFromWishList }}
      >
        {children}
      </WishListContext.Provider>
    </CartContext.Provider>
    
  );
}
