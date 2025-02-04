import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"


export async function middleware(request:NextRequest) {
    const cookiesStore=await cookies()
   const isLogin= cookiesStore.get('isLogin')?.value
   console.log(isLogin)
   if(isLogin==="0" && request.nextUrl.pathname==="/"){
    return NextResponse.redirect(new URL('/login', request.url))
   }
   if(isLogin==="1" && request.nextUrl.pathname==="/login"){
    return NextResponse.redirect(new URL('/', request.url))
   }
}
export const config = {
    matcher: ['/','/login'],
  }