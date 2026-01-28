const mongoose = require("mongoose");
const Product = require("../models/Product");

// 🔗 CONNECT DB
mongoose.connect("mongodb://localhost:27017/ecom");

// 🔹 PRODUCT DATA
const products = [
  //  ELECTRONICS
  {
    name: "Wireless Headphones",
    price: 1999,
    category: "Electronics",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041373.png",
    description: "Bluetooth headphones with noise cancellation"
  },
  {
    name: "Smart Watch",
    price: 2999,
    category: "Electronics",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041370.png",
    description: "Smart watch with heart rate monitor"
  },
  {
    name: "Bluetooth Speaker",
    price: 1599,
    category: "Electronics",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041369.png",
    description: "Portable speaker with deep bass"
  },
  {
    name: "Power Bank 20000mAh",
    price: 1799,
    category: "Electronics",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041366.png",
    description: "Fast charging power bank"
  },
  {
    name: "USB-C Fast Charger",
    price: 899,
    category: "Electronics",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041364.png",
    description: "Fast charger with USB-C support"
  },
  {
    name: "Wireless Earbuds",
    price: 2499,
    category: "Electronics",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041372.png",
    description: "True wireless earbuds with mic"
  },

  //  ACCESSORIES
  {
    name: "Gaming Mouse",
    price: 799,
    category: "Accessories",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041368.png",
    description: "RGB gaming mouse with adjustable DPI"
  },
  {
    name: "Mechanical Keyboard",
    price: 2499,
    category: "Accessories",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041371.png",
    description: "RGB mechanical keyboard"
  },
  {
    name: "Laptop Cooling Pad",
    price: 1299,
    category: "Accessories",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041365.png",
    description: "Cooling pad with dual fans"
  },
  {
    name: "Webcam HD",
    price: 1899,
    category: "Accessories",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041367.png",
    description: "HD webcam for video calls"
  },
  {
    name: "Mouse Pad XL",
    price: 499,
    category: "Accessories",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041363.png",
    description: "Large mouse pad for gaming"
  },
  {
    name: "USB Hub",
    price: 699,
    category: "Accessories",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041362.png",
    description: "4-port USB hub"
  },

  //  MOBILE ACCESSORIES
  {
    name: "Mobile Back Cover",
    price: 299,
    category: "Accessories",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041361.png",
    description: "Shockproof mobile cover"
  },
  {
    name: "Screen Protector",
    price: 199,
    category: "Accessories",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041360.png",
    description: "Tempered glass screen protector"
  },
  {
    name: "Car Mobile Holder",
    price: 499,
    category: "Accessories",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041359.png",
    description: "Dashboard car mobile holder"
  },

  //  HOME & OFFICE
  {
    name: "LED Desk Lamp",
    price: 999,
    category: "Home",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041358.png",
    description: "Adjustable LED desk lamp"
  },
  {
    name: "Office Chair",
    price: 7999,
    category: "Home",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041357.png",
    description: "Ergonomic office chair"
  },
  {
    name: "Laptop Stand",
    price: 1299,
    category: "Home",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041356.png",
    description: "Aluminum adjustable laptop stand"
  },
  {
    name: "Study Table",
    price: 5999,
    category: "Home",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041355.png",
    description: "Wooden study table"
  },

  //  MORE TECH
  {
    name: "VR Headset",
    price: 3499,
    category: "Electronics",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041354.png",
    description: "Virtual reality headset"
  },
  {
    name: "Game Controller",
    price: 1599,
    category: "Electronics",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041353.png",
    description: "Wireless game controller"
  },
  {
    name: "External Hard Drive 1TB",
    price: 4499,
    category: "Electronics",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041352.png",
    description: "Portable external hard disk"
  },
  {
    name: "Pendrive 64GB",
    price: 699,
    category: "Electronics",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041351.png",
    description: "USB 3.0 flash drive"
  },

  //  EXTRA
  {
    name: "Soundbar",
    price: 8999,
    category: "Electronics",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041350.png",
    description: "Home theater soundbar"
  },
  {
    name: "Smart LED Bulb",
    price: 599,
    category: "Home",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041349.png",
    description: "WiFi smart LED bulb"
  }
];

// 🚀 INSERT INTO DB
async function seedProducts() {
  try {
    await Product.deleteMany(); // optional: clear old data
    await Product.insertMany(products);
    console.log("✅ Products added to MongoDB");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding failed", err);
    process.exit(1);
  }
}

seedProducts();
