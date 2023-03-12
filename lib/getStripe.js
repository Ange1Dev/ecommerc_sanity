import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    
    
    console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  
  console.log(stripePromise);
  return stripePromise;
};

export default getStripe;
