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
interface CartContextType {
    cart: Cart[];
   handleAddtoCart: (item: Cart) => void;
   handleDeleteItem: (id: string) => void;
   handleUpdateQuantity:(id:string,change:number)=>void
   total:number
}

export const CartContext=createContext({} as CartContextType)