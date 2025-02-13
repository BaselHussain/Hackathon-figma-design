"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CheckCircle } from "lucide-react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { Button } from "./ui/button";
import { useSearchParams } from "next/navigation";

const Montserratfont = Montserrat({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
});


export default function Success() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (sessionId) {
      fetch(`/api/checkout-sessions?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          setStatus(data.payment_status);

          // ✅ If payment is successful, clear the cart
          if (data.payment_status === "paid") {
            localStorage.removeItem("cart");
            
          }
        })
        .catch((err) => console.error("Error fetching session=>", err));
    }
  }, [sessionId])

  

  return (
    <div className={`${Montserratfont.className} flex flex-col items-center  mt-24 h-screen bg-card `}>
      <CheckCircle className="text-green-500 w-16 h-16" />
      <h1 className="text-2xl">Payment Successful!</h1>
      <p className="text-xl">Thank you, your order has been placed.</p>
      <Link href="/shop"><Button className="mt-12">Continue Shopping</Button></Link>
    </div>
  );
}
