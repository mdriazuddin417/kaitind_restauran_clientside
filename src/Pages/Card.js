import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L1CCDGNqDr1x0jXcYpwSFklaIzKeC9Pb0pOtHrkrrz8YpJ7GBWF0HxHpkG4XTLa03KLuTSe9dyrFu2sBzc6bpzl00RrPYFQYv",
);
const Card = ({ price }) => {
  const name = "Riaz uddin";
  const email = "mdriazuddin417@gmail.com";
  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-1" class="modal-toggle" />
      <div class="modal bg-[#ECF0F3]">
        <div class="modal-box my-modal relative space-y-5">
          <h3 className="text-center text-[#ff5200] text-3xl font-semibold">
            Welcome to Master Card
          </h3>
          <div>
            <p className="text-2xl font-semibold">{name}</p>
            <p className="text-xl font-semibold">{email}</p>
            <p className="text-xl font-bold">
              Total Price: <span className="text-[#ff5200]">$ {price}</span>
            </p>
          </div>
          <div className="my-modal p-5 rounded-xl">
            <Elements stripe={stripePromise}>
              <CheckoutForm price={price} name={name} email={email} />
            </Elements>
          </div>

          <div class="modal-action">
            <label for="my-modal-1" class="btn btn-sm bg-[#ff5200]">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
