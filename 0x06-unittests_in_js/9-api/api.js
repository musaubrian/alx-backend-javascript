const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the payment system");
});

app.get("/cart/:id([0-9]+)", (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

const port = 7865;
app.listen(port, () => {
  console.log("API available on localhost port 7865");
});
