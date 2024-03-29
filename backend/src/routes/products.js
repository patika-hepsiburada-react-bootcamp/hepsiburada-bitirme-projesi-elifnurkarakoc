const express = require("express");
const { nanoid } = require("nanoid");
const router = express.Router();

const { cache } = require("./redis-service");

var products;

/* Set products with redis*/
const setProducts = async function redisProducts() {
  var value = await cache();
  products = JSON.parse(JSON.stringify(value));
};
setProducts();

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    return next({ message: "product not found" });
  }

  res.json(product);
});

router.post("/", (req, res) => {
  const data = req.body;
  const product = { id: nanoid(), ...data };

  products.push(product);
  res.json(product);
});

router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  const index = products.findIndex((item) => item.id === id);

  if (index < 0) {
    return next({ message: "Product not found!" });
  }

  const data = req.body;
  const product = products[index];
  const updated_data = { ...product, ...data };
  products[index] = updated_data;

  res.json(products[index]);
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  const index = products.findIndex((item) => item.id === id);

  if (index < 0) {
    return next({ message: "Product not found!" });
  }

  const deleted_product = products[index];
  products.splice(index, 1);

  res.json(deleted_product);
});

module.exports = router;
