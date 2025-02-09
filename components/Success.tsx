import React, { useEffect, useState } from 'react'
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from './ui/button';
import { useSearchParams } from 'next/navigation';
export default function Success() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (sessionId) {
      fetch(`/api/payment?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          setStatus(data.payment_status);

          // ✅ If payment is successful, clear the cart
          if (data.payment_status === "paid") {
            localStorage.removeItem("cart");
          
          }
        })
        .catch((err) => console.error("Error fetching session:", err));
    }
  }, [sessionId]);

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
