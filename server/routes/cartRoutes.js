const express = require("express");

const router = express.Router();

const {
  addToCart,
  getCart,
  updateCartQuantity,
  removeFromCart,
} = require("../controllers/cartController");

// Add product to cart
router.post("/", addToCart);

// Get cart
router.get("/", getCart);

// Update cart quantity
router.put("/:id", updateCartQuantity);

// Remove cart item
router.delete("/:id", removeFromCart);

module.exports = router;