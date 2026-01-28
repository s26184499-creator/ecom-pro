const express = require("express");
const router = express.Router();

// ✅ auth middleware
const auth = require("../middleware/auth");

// ✅ CORRECT function names
const {
  addToWishlist,
  getWishlist,
  removeFromWishlist
} = require("../controllers/wishlistController");

// ✅ ROUTES
router.post("/add", auth, addToWishlist);
router.get("/", auth, getWishlist);
router.delete("/:productId", auth, removeFromWishlist);

module.exports = router;
