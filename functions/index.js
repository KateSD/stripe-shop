const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("stripe-secret-key");

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("hello world"));
app.post("/payments/create", async (req, res) => {
    const total = req.query.total;

    const paymentIntents = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });
    res.status(201).send({
        clientSecret: paymentIntents.client_secret,
    })
})

exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/challenge-e2b6e/us-central1/api

