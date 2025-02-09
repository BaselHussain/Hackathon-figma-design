"use client";
import { createContext } from "react";

export interface Cart{
    id: string;
    title: string;
    description: string;
    price: number;
    quantity?:number;
    src:string
}

export interface WishList{
id:string;
title:string;
description: string;
price:number;
src:string
}

export interface Order{
    id:number;
    name:string;
    email: string;
    address:string;
    }


interface WishListContextType{
    wishList:WishList[];
    handleAddtoWishList:(item:WishList)=>void;
    handleDeleteFromWishList:(id:string)=>void;
}

interface CartContextType {
    cart: Cart[];
   handleAddtoCart: (item: Cart) => void;
   handleDeleteItem: (id: string) => void;
   handleUpdateQuantity:(id:string,change:number)=>void
   total:number
}

interface OrderContextType {
    orders: Order[];
   handleNewOrder: (item: Order) => void;
}

export const CartContext=createContext({} as CartContextType)
export const WishListContext=createContext({} as WishListContextType)
export const OrderContext=createContext({} as OrderContextType)