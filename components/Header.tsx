"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Montserrat } from "next/font/google";
import { IoCallOutline } from "react-icons/io5";
import { BsEnvelope, BsCart, BsSearch } from "react-icons/bs";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaRegUser } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import Link from "next/link";
import { SheetSide } from "./SheetBar";
import { CartContext, WishListContext } from "@/context";
import { useSession, signOut } from "next-auth/react"; // ✅ Import NextAuth functions

const Montserratfont = Montserrat({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
});

export default function Header() {
  const router = useRouter();
  const cartItems = React.useContext(CartContext);
  const wishListItems = React.useContext(WishListContext);
  const { data: session } = useSession(); // ✅ Get user session

  // Handle cart restriction
  const handleCartClick = (e: React.MouseEvent) => {
    if (!session) {
      e.preventDefault();
      alert("You must be logged in to access the cart!");
    }
  };

  return (
    <header className="max-w-[2000px] w-full box-border sticky top-0 z-40">
      {/* First Header */}
      <div
        className={`${Montserratfont.className} hidden first-header bg-[#252b42] text-white w-full xl:flex items-center justify-between md:px-5 lg:px-7 py-4`}
        style={{ fontWeight: 700 }}
      >
        <div className="flex items-center space-x-7">
          <span className="flex items-center space-x-2">
            <IoCallOutline className="mr-2" />
            (225) 555-0118
          </span>
          <span className="flex items-center space-x-2">
            <BsEnvelope className="mr-2" />
            michelle.rivera@example.com
          </span>
        </div>

        <div>
          <p>Follow Us and get a chance to win 80% off</p>
        </div>

        <div className="flex items-center space-x-3">
          <p>Follow Us :</p>
          <FaInstagram />
          <FaYoutube />
          <FaFacebook />
          <FaTwitter />
        </div>
      </div>

      {/* Second Header */}
      <div
        className={`${Montserratfont.className} w-full second-header bg-white text-black flex items-center justify-between h-[78px] md:px-3 lg:px-4`}
      >
        <div className="flex items-center space-x-3 md:space-x-5 lg:space-x-24 xl:ml-6">
          <h1 className="text-xl md:text-2xl ml-4 md:ml-0 font-bold">Bandage</h1>
          <ul className="hidden md:flex items-center space-x-2 lg:space-x-6 font-bold text-[#737373]">
            <Link href={"/"}><li>Home</li></Link>
            <Link href={"/shop"}><li>Shop</li></Link>
            <Link href={"/about-us"}><li>About</li></Link>
            <Link href={"/blog"}><li>Blog</li></Link>
            <Link href={"/contact-us"}><li>Contact</li></Link>
            <Link href={"/pages"}><li>Pages</li></Link>
          </ul>
        </div>

        {/* Right Side - User Controls */}
        <div className="flex items-center ml-5 lg:ml-0 space-x-1 lg:space-x-7 md:text-[#23A6F0]">
          {/* User Authentication */}
          {session ? (
  <div className='hidden md:flex items-center space-x-1 lg:space-x-2'>
    <img 
      src={session.user?.image || "/default-avatar.png"} 
      alt="User" 
      className="w-8 h-8 rounded-full"
    />
    <span>{session.user?.name}</span>
    <button onClick={() => signOut()} className="font-bold">
      Logout
    </button>
  </div>
) : (
  <button
    onClick={() => router.push("/login")} // 🔥 Push user to login page
    className="hidden md:flex items-center space-x-1 lg:space-x-2 font-bold"
  >
    <FaRegUser/><span className='font-bold'>Login/Register</span>
  </button>
)}


          <div className="flex items-center space-x-3 lg:space-x-5 xl:space-x-7">
            <BsSearch className="w-4 h-4" />

            {/* Cart - Restricted if Not Logged In */}
            <span className='flex items-center space-x-1 relative'><Link href={'/cart'} onClick={handleCartClick}><BsCart className='w-4 h-4 ' /></Link><div className=' rounded-full md:rounded-none bg-black md:bg-white text-white md:text-[#23a6f0] absolute md:static bottom-1 md:bottom-0 left-1 md:left-0 text-xs md:text-base w-4 md:w-auto h-4 md:h-auto text-center content-center  -translate-y-1/2 md:-translate-y-0'>{cartItems?.cart?.length??0}</div></span>

            {/* Wishlist */}
            <span className='flex items-center space-x-1 relative'><Link href={'/wishlist'}><IoIosHeartEmpty className='w-4 h-4 ' /></Link><div className=' rounded-full md:rounded-none bg-black md:bg-white text-white md:text-[#23a6f0] absolute md:static bottom-1 md:bottom-0 left-1 md:left-0 text-xs md:text-base w-4 md:w-auto h-4 md:h-auto text-center content-center  -translate-y-1/2 md:-translate-y-0'>{wishListItems.wishList.length??0}</div></span>

            {/* Mobile Menu */}
            <SheetSide />
          </div>
        </div>
      </div>
    </header>
  );
}
