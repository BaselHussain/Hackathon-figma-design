"use client";
import { createContext } from "react";

export interface Cart{
    id: number;
    title: string;
    description: string;
    price: number;
    quantity?:number;
    src:string
}
interface CartContextType {
    cart: Cart[];
   handleAddtoCart: (item: Cart) => void;
   handleDeleteItem: (id: number) => void;
   handleUpdateQuantity:(id:number,change:number)=>void
   total:number
}

export const CartContext=createContext({} as CartContextType)