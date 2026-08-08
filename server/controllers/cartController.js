const Cart = require("../models/Cart");

// ADD TO CART
const addToCart = async (req, res) => {
  try {
    const { user, product, quantity } = req.body;

    const cart = await Cart.create({
      user: user || undefined,
      product,
      quantity: quantity || 1,
    });

    const populatedCart = await Cart.findById(cart._id)
      .populate("product");

    res.status(201).json({
      success: true,
      message: "Product added to cart",
      cart: populatedCart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET CART
const getCart = async (req, res) => {
  try {
    const { user } = req.query;

    let query = {};

    if (user) {
      query.user = user;
    }

    const cart = await Cart.find(query).populate("product");

    res.status(200).json({
      success: true,
      cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE CART QUANTITY
const updateCartQuantity = async (req, res) => {
  try {
    const { quantity } = req.body;

    const cart = await Cart.findByIdAndUpdate(
      req.params.id,
      { quantity },
      {
        new: true,
        runValidators: true,
      }
    ).populate("product");

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart item not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Cart updated successfully",
      cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// REMOVE FROM CART
const removeFromCart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart item not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product removed from cart",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addToCart,
  getCart,
  updateCartQuantity,
  removeFromCart,
};