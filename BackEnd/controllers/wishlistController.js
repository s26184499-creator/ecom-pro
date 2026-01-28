const Wishlist = require("../models/Wishlist");

// ADD TO WISHLIST
exports.addToWishlist = async (req, res) => {
  try {
    const { productId, name, price, image } = req.body;
    const userId = req.user.id;

    let wishlist = await Wishlist.findOne({ user: userId });

    if (!wishlist) {
      wishlist = new Wishlist({
        user: userId,
        products: [{ productId, name, price, image }]
      });
    } else {
      const exists = wishlist.products.find(
        p => p.productId.toString() === productId
      );

      if (!exists) {
        wishlist.products.push({ productId, name, price, image });
      }
    }

    await wishlist.save();

    res.status(200).json({
      success: true,
      message: "Added to wishlist",
      wishlist
    });
  } catch (error) {
    console.error("Wishlist error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET WISHLIST
exports.getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user.id });
    res.json(wishlist || { products: [] });
  } catch (error) {
    res.status(500).json({ message: "Fetch error" });
  }
};

// REMOVE FROM WISHLIST
exports.removeFromWishlist = async (req, res) => {
  try {
    const { productId } = req.params;

    const wishlist = await Wishlist.findOne({ user: req.user.id });

    wishlist.products = wishlist.products.filter(
      p => p.productId.toString() !== productId
    );

    await wishlist.save();
    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: "Remove error" });
  }
};
