import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51MecBXAL9wHc4TQkOeMDffZxKyvI9e0sBXJdcsZw7lIymcd3mJrYDOdzZXYeL6excvu68wokxNhita3CDsmGsgSf00WM1tBUSo"
);

export default function Stripe() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
}
