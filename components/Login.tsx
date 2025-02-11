"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white flex-col items-center justify-center p-10">
        <h1 className="text-5xl font-bold">Welcome to Bandage</h1>
        <p className="mt-4 text-lg">Discover the best deals and latest trends!</p>
      </div>

      {/* Right Section */}
      <div className="flex w-full lg:w-1/2 justify-center items-center p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold text-center">Login</h2>
          <p className="text-center text-gray-600 mt-2">
            Use coupon <span className="font-bold text-blue-500">BANDAGE50</span> to get a $50 discount on your next order!
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-2"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4"
            />
            
            <button
  className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
  onClick={() => signIn("github", { callbackUrl: "/" })} // ✅ Redirects to homepage after login
>
  Sign in with GitHub
</button>

<button
  className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
  onClick={() => signIn("google", { callbackUrl: "/" })} // ✅ Redirects to homepage after login
>
  Sign in with Google
</button>
          </div>

          <p className="text-center mt-4 text-gray-600">
            New here? <a href="#" className="text-blue-500 font-bold hover:underline">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
}