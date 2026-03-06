// packages/checkout/index.tsx
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { supabase } from '../auth/supabaseClient';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export default function Checkout() {
  const [cart, setCart] = useState([{ name: 'Fleet Service', price: 200 }]);

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const { data, error } = await supabase.functions.invoke('create-checkout-session', {
      body: { cart }
    });
    if (data?.sessionId) {
      stripe?.redirectToCheckout({ sessionId: data.sessionId });
    }
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Customer Checkout</h1>
      <ul className="mt-4">
        {cart.map((item, i) => (
          <li key={i} className="border-b py-2">
            {item.name} — ${item.price}
          </li>
        ))}
      </ul>
      <button
        onClick={handleCheckout}
        className="mt-6 bg-green-600 text-white px-4 py-2 rounded"
      >
        Pay with Stripe
      </button>
    </main>
  );
}
