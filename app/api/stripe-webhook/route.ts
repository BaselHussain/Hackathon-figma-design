import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from '@sanity/client';
import { client } from "@/sanity/lib/client";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature")!;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;

  try {
    const body = await req.text();
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err: any) {
    console.error("Webhook Error:", err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    
    const orderData = {
      _type: "order",
      stripeId: session.id,
      customerEmail: session.customer_email,
      totalAmount: session.amount_total! / 100, // Convert cents to dollars
      currency: session.currency,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await client.create(orderData);
      console.log("✅ Order saved to Sanity:", response);
    } catch (error) {
      console.error("Sanity Error:", error);
    }
  }

  return new NextResponse("Webhook received!", { status: 200 });
}
