import { NextRequest,NextResponse } from "next/server";

const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY)
interface Cart {
    id: string;
    title: string;
    description: string;
    price: number;
    quantity?: number;
    src: string;
  }

export async function POST(request:NextRequest){
const body=await request.json();
const {items}=body

 const arrangedItems=items.map((item:Cart)=>({
price_data:{
    currency:'usd',
    product_data:{
        name:item.title,
        images:[item.src]
    },
    unit_amount:item.price * 100
},
quantity:item.quantity
 }))


const session=await stripe.checkout.sessions.create({
    payment_method_types:['card'],
    shipping_address_collection:{
        allowed_countries:['GB','US','CA']
    },
    line_items:arrangedItems,
    mode:'payment',
    success_url:`${process.env.HOST}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url:`${process.env.HOST}/cart`,
    metadata:{
        images:JSON.stringify(items.map((item:Cart)=>item.src))
    }
})


return NextResponse.json({
    id:session.id
})
}