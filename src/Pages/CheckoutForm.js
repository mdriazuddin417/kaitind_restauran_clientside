import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckoutForm = ({ price, email, name }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [id, setId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://kaitind-server.vercel.app/create-payment-intent ", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          console.log(data.clientSecret);
          setClientSecret(data.clientSecret);
        } else {
          toast.error("Payment get way problem. Please check");
        }
      });
  }, [price]);

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      setLoading(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setLoading(false);
      // setCardErrors(error);
      toast.error(error?.message);
    } else {
      setLoading(false);
      console.log("[PaymentMethod]", paymentMethod);
      //confirm card payment
    }

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (intentError) {
      setLoading(false);
      toast.error(intentError.message);
    } else {
      setLoading(false);
      toast.success("Congrats,Your payment successfully.");
      setId(paymentIntent.id);
      await axios
        .delete(`https://kaitind-server.vercel.app/order?email=${email}`)
        .then((res) => {
          setLoading(false);
          if (res.data) {
            setTimeout(() => {
              navigate("/home");
            }, 1000);
          }
        });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe}
          style={{
            boxShadow: " 5px 5px 11px #bebebe,-5px -5px 11px #ffffff",
          }}
          className="p-1 bg-[#ff5200] cursor-pointer px-8 py-2 shadow-xl text-white rounded-full mt-5 "
        >
          {loading ? (
            <div class="w-5 h-5 border-b-2 border-white rounded-full animate-spin"></div>
          ) : (
            <span>Pay</span>
          )}
        </button>
      </form>
      {id && (
        <p className="text-green-500 text-sm font-semibold mt-2 text-center">
          Transition Id: {id}
        </p>
      )}
    </div>
  );
};

export default CheckoutForm;
