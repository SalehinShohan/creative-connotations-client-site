import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../Hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {

    const [cart] = useCart();
    const total = cart.reduce((sum, item) => item.price, 0);
    const price = parseFloat(total.toFixed(2))

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold text-center mb-16">
        Please First Complete Your Payment
      </h2>

      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
