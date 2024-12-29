"use client";
import { createContext } from "react";

export interface Cart{
    id: number;
    title: string;
    description: string;
    price: number;
    src:string
}
interface CartContextType {
    cart: Cart[];
   handleAddtoCart: (item: Cart) => void;
   handleDeleteItem: (id: number) => void;
   total:number
}

export const CartContext=createContext({} as CartContextType)