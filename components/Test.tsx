"use client";
import React from 'react'

import { useEffect, useState } from 'react';
interface Product {
    id: number;
    title: string;
    description: string;
    oldPrice: number;
    newPrice: number;
    src: string;
  }

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products?apiKey=123`);
  
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
  
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Old Price: ${product.oldPrice}</p>
          <p>New Price: ${product.newPrice}</p>
          <img src={product.src} alt={product.title} />
        </div>
      ))}
    </div>
  );
}
