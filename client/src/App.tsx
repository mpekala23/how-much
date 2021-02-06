import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import Router from "router";

const stripePromise = loadStripe(
  "pk_test_51IHhaDHD6xD6m28ANZDlYiQsLcBcFhUSxh0Eo49yiHSI4sjgbjVYTZHDxIL3o7engasG7HqUOhfocRJC3LQYOqLh00XM9oCc9N"
);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <div style={{ backgroundColor: "red" }}>
        <Router />
      </div>
    </Elements>
  );
}

export default App;
