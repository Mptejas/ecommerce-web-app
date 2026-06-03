const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 }
];

let cart = [];

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/cart", (req, res) => {
  cart.push(req.body);
  res.json({ message: "Added to cart" });
});

app.get("/cart", (req, res) => {
  res.json(cart);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
