"use client"


import Link from "next/link"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const SHEET_SIDES = ["top"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {

  const router=useRouter()
   const { data: session } = useSession(); // ✅ Get user session
  const handleCartClick = (e: React.MouseEvent) => {
      if (!session) {
        e.preventDefault();
        alert("You must be logged in to access the cart!");
      }
    };
  
  return (
    <div className="grid grid-cols-2 gap-2 md:hidden">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
           <GiHamburgerMenu className=" w-4 h-4"/>
          </SheetTrigger>
          <SheetContent side={side}>
            <div className="flex flex-col items-center justify-center mt-9 space-y-4">
                <ul className="flex flex-col space-y-3">
                   <Link href={'/'}> <li>Home</li></Link>
                   <Link href={''}> <li>Product</li></Link>
                   <Link href={'/about-us'}><li>About</li></Link>
                   <Link href={'/shop'}><li>Shop</li></Link>
                   <Link href={'/pages'}><li>Pages</li></Link>
                   <Link href={'/contact-us'}> <li>Contact</li></Link>
                    </ul>
                    <div className="flex flex-col space-y-3 justify-center items-center">
                    {session ? (
                      <div className='flex items-center space-x-1 lg:space-x-2'>
                        <img 
                          src={session.user?.image || "/default-avatar.png"} 
                          alt="User" 
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-[#23a6f0]">{session.user?.name}</span>
                        <button onClick={() => signOut()} className="font-bold text-[#23a6f0]">
                          Logout
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => router.push("/login")} // 🔥 Push user to login page
                        className="text-[#23a6f0] flex items-center space-x-1 lg:space-x-2 font-bold"
                      >
                        <FaRegUser/><span className='font-bold'>Login/Register</span>
                      </button>
                    )}
                    <p className="text-[#23a6f0] text-center"><BsSearch/></p>
                   <Link href={'/cart'} onClick={handleCartClick}> <p className="text-[#23a6f0] text-center "><BsCart/></p></Link>
                    <Link href={'/wishlist'}><p className="text-[#23a6f0] text-center"><IoIosHeartEmpty/></p></Link>
                    </div>
                
            </div>
           
            <SheetFooter>
              <SheetClose asChild>
                
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
