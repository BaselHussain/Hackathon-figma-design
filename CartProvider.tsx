"use client";
import React, { useState, useMemo, useCallback, useEffect } from "react";
import { CartContext, OrderContext, WishListContext } from "./context";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

interface Cart {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity?: number;
  src: string;
}

interface WishList {
  id: string;
  title: string;
  description: string;
  price: number;
  src: string;
}

export interface Order {
  id: number;
  name: string;
  email: string;
  address: string;
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
}: Readonly<{ children: React.ReactNode }>) {
  const { data: session } = useSession(); // Get user session from NextAuth
  const router = useRouter();

  const [cart, setCart] = useLocalStorage<Cart[]>("cart");
  const [wishList, setWishList] = useLocalStorage<WishList[]>("wishlist");
  const [orders, setOrders] = useLocalStorage<Order[]>("orders");
  const [toggleHeartIcon, setToggleHeartIcon] = useLocalStorage<boolean>("toggleHeartIcon");

  const cartData = cart ?? [];
  const wishListData = wishList ?? [];
  const orderData = orders ?? [];

  const total = useMemo(
    () => cartData.reduce((sum, cartItem) => sum + cartItem.price * (cartItem.quantity || 1), 0),
    [cartData]
  );

  const handleAddtoCart = useCallback(
    (item: Cart) => {
      setCart((prevCart) => {
        const cartItems = prevCart ?? [];
        const itemExists = cartItems.find((cartItem) => cartItem.id === item.id);
        if (itemExists) {
          return cartItems.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 } : cartItem
          );
        }
        return [...cartItems, { ...item, quantity: 1 }];
      });
    },
    [setCart]
  );

  const handleAddtoWishList = useCallback(
    (item: WishList) => {
      setToggleHeartIcon(true);
      setWishList((prevWishList) => {
        const wishListItems = prevWishList ?? [];
        const itemExist = wishListItems.find((wishListItem) => wishListItem.id === item.id);
        if (itemExist) {
          return wishListItems;
        }
        return [...wishListItems, item];
      });
    },
    [setWishList]
  );

  const handleNewOrder = useCallback(
    (item: Order) => {
      setOrders((prevOrders) => {
        const orderItems = prevOrders ?? [];
        const orderExist = orderItems.find((orderItem) => orderItem.id === item.id);
        if (orderExist) {
          return orderItems;
        }
        return [...orderItems, item];
      });
    },
    [setOrders]
  );

  const handleDeleteItem = useCallback(
    (id: string) => {
      setCart((prevCart) => (prevCart ?? []).filter((cartItem) => cartItem.id !== id));
    },
    [setCart]
  );

  const handleDeleteFromWishList = useCallback(
    (id: string) => {
      setToggleHeartIcon(false);
      setWishList((prevWishList) => (prevWishList ?? []).filter((wishListItem) => wishListItem.id !== id));
    },
    [setWishList]
  );

  const handleUpdateQuantity = useCallback(
    (id: string, change: number) => {
      setCart((prevCart) =>
        (prevCart ?? []).map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: Math.max((cartItem.quantity || 1) + change, 1) }
            : cartItem
        )
      );
    },
    [setCart]
  );

  // ✅ Use NextAuth.js for Authentication
  const login = async () => {
    await signIn(); // Redirects to the NextAuth login page
  };

  const logout = async () => {
    await signOut();
    router.push("/login"); // Redirect to login page after logout
  };

  return (
   
      <CartContext.Provider value={{ cart: cartData, handleAddtoCart, handleDeleteItem, handleUpdateQuantity, total }}>
        <WishListContext.Provider value={{ wishList: wishListData, handleAddtoWishList, handleDeleteFromWishList }}>
          <OrderContext.Provider value={{ orders: orderData, handleNewOrder }}>{children}</OrderContext.Provider>
        </WishListContext.Provider>
      </CartContext.Provider>
  
  );
}
