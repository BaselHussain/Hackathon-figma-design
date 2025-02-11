import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    pages: {
      signIn: "/login", // Redirect to login if not authenticated
    },
  }
);

export const config = {
  matcher: ["/cart"], // Protect the cart route
};
