"use strict";

const express = require("express");
const stripe = require("stripe")(
  "sk_test_51IHhaDHD6xD6m28ATPfDVPh4KuOiaKJGI0RLM8QLeyMrKpiDAKiGIOucvyrfVEB3MSvuxPeO1Yi6MtEuNcIRVQWH005KE4eVQx"
);
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static("./public"));

app.get("/stripeSecret", function (req, res, next) {
  const amount = 2 * 100;
  const currency = "usd";

  stripe.paymentIntents
    .create({ amount, currency })
    .then((intent) => res.json({ secret: intent["client_secret"] }))
    .catch(next);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ message: err.message });
});

app.listen(8080);
