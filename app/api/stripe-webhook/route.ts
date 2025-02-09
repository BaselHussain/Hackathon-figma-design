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
    const session = event.data.object as Stripe.Checkout.Session;

    // Check if payment was successful
    if (session.payment_status !== 'paid') {
      return new NextResponse('Payment not successful', { status: 400 });
    }

    // Get customer email from session
    const customerEmail = session.customer_details?.email || session.customer_email;

    if (!customerEmail) {
      return new NextResponse('Customer email not found', { status: 400 });
    }

    const order = {
      _type: "order",
      stripeId: session.id,
      customerEmail: customerEmail,
      totalAmount: session.amount_total! / 100, // Convert cents to dollars
      currency: session.currency?.toUpperCase(),
      status: "completed", // Set to completed since payment succeeded
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await client.create(order);
      console.log("✅ Order saved to Sanity:", response);
    } catch (error) {
      console.error("Sanity Error:", error);
      return new NextResponse('Failed to save order to Sanity', { status: 500 });
    }
  }

  return new NextResponse("Webhook received!", { status: 200 });
}