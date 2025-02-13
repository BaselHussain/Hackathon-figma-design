import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY );

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { cartItems, email, firstName, lastName, address, city, zipcode, phone } = body;

  const line_items = cartItems.map((item: any) => ({
    price_data: {
      currency: "usd",
      product_data: {
         name: item.title,
        images:[item.src]
       },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: { allowed_countries: ["US", "CA", "GB"] },
      customer_email: email,
      line_items,
      mode: "payment",
      success_url: `${process.env.HOST}/success?session_id={{CHECKOUT_SESSION_ID}}`,
      cancel_url: `${process.env.HOST}/cart`,
      metadata: {
        images: JSON.stringify(cartItems.map((item: any) => item.src).slice(0, 3)), // ✅ Limit images
        cartItemIds: cartItems.map((item: any) => item.id).join(","), // ✅ Store only IDs
        firstName,
        lastName,
        address,
        city,
        zipcode,
        phone,
      },
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error("Stripe API error:", error);
  return NextResponse.json({ error: "Failed to create Stripe session" }, { status: 500 });
  }
}

export async function GET(req: Request) {
    try {
      const url = new URL(req.url);
      const sessionId = url.searchParams.get("session_id");
  
      if (!sessionId) {
        return NextResponse.json({ error: "Session ID is required" }, { status: 400 });
      }
  
      const session = await stripe.checkout.sessions.retrieve(sessionId);
  
      return NextResponse.json({
        session_id: session.id,
        payment_status: session.payment_status, // "paid", "unpaid", etc.
        status: session.status, // "complete", "open", etc.
      });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
