import React from 'react'
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from './ui/button';
export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
        <CheckCircle className="text-green-500 w-16 h-16 mx-auto" />
        <h1 className="text-2xl font-bold mt-4 text-gray-800">Payment Successful!</h1>
        <p className="text-gray-600 mt-2">Thank you for your purchase. Your order has been confirmed.</p>

        <div className="mt-6">
          <Link
            href="/shop"
          >
            <Button className='text-lg'>
           Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
