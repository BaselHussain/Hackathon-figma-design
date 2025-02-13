import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const session_id = searchParams.get("session_id");

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);

    return NextResponse.json({
      payment_status: session.payment_status,
      email: session.customer_email,
      firstName: session.metadata.firstName,
      lastName: session.metadata.lastName,
      address: session.metadata.address,
      city: session.metadata.city,
      zipcode: session.metadata.zipcode,
      phone: session.metadata.phone,
      cartItems: JSON.parse(session.metadata.cartItems),
    });
  } catch (error) {
    console.error("Error fetching session:", error);
    return NextResponse.json({ error: "Failed to fetch session" }, { status: 500 });
  }
}
