import { NextResponse } from 'next/server';
import products from '@/products.json';
import { NextRequest } from "next/server";

export async function GET(request:NextRequest) {
  // Check for the API key query parameter
  const url=request.nextUrl
  const apiKey = url.searchParams.get('apiKey');
  const validApiKey = process.env.NEXT_PUBLIC_API_KEY;

  if (apiKey !== validApiKey) {
    return NextResponse.json({ error: 'Forbidden: Invalid API key' }, { status: 403 });
  }

  return NextResponse.json(products);
}