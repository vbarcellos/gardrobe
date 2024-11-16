const express = require("express");
const generateProducts = require("../dataGenerator");

const router = express.Router();

router.get("/", (req, res) => {
  const products = generateProducts(50);
  res.json(products);
});

module.exports = router;
