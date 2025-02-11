"use client";
import { createContext } from "react";


// 🛒 Cart Interface
export interface Cart {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity?: number;
  src: string;
}

// ❤️ Wishlist Interface
export interface WishList {
  id: string;
  title: string;
  description: string;
  price: number;
  src: string;
}

// 📦 Order Interface
export interface Order {
  id: number;
  name: string;
  email: string;
  address: string;
}

// 🛡️ Auth Context Type (Using NextAuth)


// 🛒 Cart Context Interface
interface CartContextType {
  cart: Cart[];
  handleAddtoCart: (item: Cart) => void;
  handleDeleteItem: (id: string) => void;
  handleUpdateQuantity: (id: string, change: number) => void;
  total: number;
}

// ❤️ Wishlist Context Interface
interface WishListContextType {
  wishList: WishList[];
  handleAddtoWishList: (item: WishList) => void;
  handleDeleteFromWishList: (id: string) => void;
}

// 📦 Order Context Interface
interface OrderContextType {
  orders: Order[];
  handleNewOrder: (item: Order) => void;
}

// 🛡️ Auth Context (Uses NextAuth)


// 🛒 Creating Contexts (No Logic Here)
export const CartContext = createContext({} as CartContextType);
export const WishListContext = createContext({} as WishListContextType);
export const OrderContext = createContext({} as OrderContextType);
