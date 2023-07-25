const express = require("express");
const ProductController = require("../controllers/product.controller");

function SetupProductRoute() {
  const router = express.Router();
  const productController = new ProductController();
  router.get("/", productController.getProducts.bind(productController));

  return router;
}

module.exports = SetupProductRoute;
