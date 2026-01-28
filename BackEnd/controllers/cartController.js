const Cart = require("../models/Cart");


exports.addToCart = async (req, res) => {
  const { productId, name, price, image } = req.body;
  const userId = req.userId;


  let cart = await Cart.findOne({ userId });


  if (!cart) {
    cart = new Cart({ userId, items: [] });
  }


  const itemIndex = cart.items.findIndex(
    item => item.productId.toString() === productId
  );


  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += 1;
  } else {
    cart.items.push({ productId, name, price, image, quantity: 1 });
  }


  await cart.save();
  res.json(cart);
};


exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.userId });
  res.json(cart || { items: [] });
};


exports.removeFromCart = async (req, res) => {
  const { productId } = req.params;


  const cart = await Cart.findOne({ userId: req.userId });
  cart.items = cart.items.filter(
    item => item.productId.toString() !== productId
  );


  await cart.save();
  res.json(cart);
};