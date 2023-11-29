import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import Checkout from "./Checkout";


const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHER_KEY);
const Pay = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="my-12">
      <div className="max-w-4xl mx-auto">
        <Elements stripe={stripePromise}>
          <Checkout id={id}></Checkout>
        </Elements>
      </div>
    </div>
  );
};

export default Pay;