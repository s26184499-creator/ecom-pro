const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const cart = require("../controllers/cartController");


router.post("/add", auth, cart.addToCart);
router.get("/", auth, cart.getCart);
router.delete("/remove/:productId", auth, cart.removeFromCart);


module.exports = router;