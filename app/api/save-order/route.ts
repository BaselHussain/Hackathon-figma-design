import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
  dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
  useCdn: false,
  apiVersion: '2025-01-13',
  token: `${process.env.SANITY_API_TOKEN}`,
});

export async function POST(req: Request) {
  try {
    const { email, firstName, lastName, address, city, zipcode, phone, cartItems, total, status } = await req.json();

    const order = await client.create({
      _type: "order",
      email,
      firstName,
      lastName,
      address,
      city,
      zipcode,
      phone,
      cartItems,
      total,
      status, // "paid"
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ message: "Order saved", order });
  } catch (error) {
    console.error("Error saving order:", error);
    return NextResponse.json({ message: "Error saving order" }, { status: 500 });
  }
}
