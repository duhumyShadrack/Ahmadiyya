// supabase/functions/create-checkout-session.ts
import Stripe from 'stripe';

export async function handler(req: Request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2022-11-15',
  });

  const { cart } = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: cart.map((item: any) => ({
      price_data: {
        currency: 'usd',
        product_data: { name: item.name },
        unit_amount: item.price * 100,
      },
      quantity: 1,
    })),
    mode: 'payment',
    success_url: process.env.SUCCESS_URL!,
    cancel_url: process.env.CANCEL_URL!,
  });

  return new Response(JSON.stringify({ sessionId: session.id }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
