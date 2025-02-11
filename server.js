const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.use(express.static("public"));
app.use(express.json());

// Insert your secret key here
const SECRET_KEY = "insert_your_secret_key_here";

app.post("/create-payment-sessions", async (_req, res) => {
  // Create a PaymentSession with 3D Secure Enabled
  const request = await fetch(
    "https://api.sandbox.checkout.com/payment-sessions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: 6540,
        currency: "GBP",
        reference: "ORD-123A",
        description: "Payment for Guitars and Amps",
        billing_descriptor: {
          name: "Jia Tsang",
          city: "London",
        },
        customer: {
          email: "jia.tsang@example.com",
          name: "Jia Tsang",
        },
        shipping: {
          address: {
            address_line1: "123 High St.",
            address_line2: "Flat 456",
            city: "London",
            zip: "SW1A 1AA",
            country: "GB",
          },
          phone: {
            number: "1234567890",
            country_code: "+44",
          },
        },
        billing: {
          address: {
            address_line1: "123 High St.",
            address_line2: "Flat 456",
            city: "London",
            zip: "SW1A 1AA",
            country: "GB",
          },
          phone: {
            number: "1234567890",
            country_code: "+44",
          },
        },
        risk: {
          enabled: true,
        },
        success_url: "http://localhost:3000/success.html",
        failure_url: "http://localhost:3000/failure.html",        
        metadata: {},
        items: [
          {
            name: "Guitar",
            quantity: 1,
            unit_price: 1635,
          },
          {
            name: "Amp",
            quantity: 3,
            unit_price: 1635,
          },
        ],
        processing_channel_id: "insert_processing_channel_id_here",
        
        // ✅ Enable 3D Secure Authentication
        "3ds": {
          "enabled": true
        }
      }),
    }
  );

  const parsedPayload = await request.json();

  res.status(request.status).send(parsedPayload);
});

app.listen(3000, () =>
  console.log("Node server listening on port 3000: http://localhost:3000/")
);
