const Wishlist = require("../models/Wishlist");

// Add to wishlist
const addToWishlist = async (req, res) => {
  try {
    const { user, product } = req.body;

    const existing = await Wishlist.findOne({
      user: user || null,
      product,
    });

    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Product already in wishlist",
      });
    }

    const wishlist = await Wishlist.create({
      user: user || null,
      product,
    });

    res.status(201).json({
      success: true,
      message: "Added to wishlist",
      wishlist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get wishlist
const getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.find()
      .populate("product");

    res.status(200).json({
      success: true,
      wishlist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Remove from wishlist
const removeFromWishlist = async (req, res) => {
  try {
    await Wishlist.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Removed from wishlist",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
};