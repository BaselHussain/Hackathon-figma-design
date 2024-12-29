import { NextResponse } from 'next/server';
import products from '@/products.json';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const url = request.nextUrl;
  const apiKey = url.searchParams.get('apiKey');
  const validApiKey = process.env.NEXT_PUBLIC_API_KEY;

  
  if (apiKey !== validApiKey) {
    return NextResponse.json({ error: 'Forbidden: Invalid API key' }, { status: 403 });
  }

  const { id } = params; // Extract the productId from the URL
  console.log('Received productId:', id)
  const product = products.find((p) => p.id == Number(id)); // Find the product by ID

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product); // Return the product data
}
