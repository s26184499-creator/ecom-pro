// const products = [
//   {
//     id: 1,
//     name: "Wireless Headphones",
//     category: "Electronics",
//     price: 1999,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041373.png",
//     specs: ["Bluetooth 5.0", "Noise Cancellation", "20h Battery", "1 Year Warranty"]
//   },
//   {
//     id: 2,
//     name: "Smart Watch",
//     category: "Electronics",
//     price: 2999,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041370.png",
//     specs: ["Heart Rate Monitor", "Touch Screen", "Water Resistant", "7 Days Battery"]
//   },
//   {
//     id: 3,
//     name: "Bluetooth Speaker",
//     category: "Electronics",
//     price: 1599,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041369.png",
//     specs: ["High Bass", "Portable", "10h Playtime", "Fast Charging"]
//   },
//   {
//     id: 4,
//     name: "Gaming Mouse",
//     category: "Accessories",
//     price: 799,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041368.png",
//     specs: ["RGB Lights", "Adjustable DPI", "Ergonomic", "USB Wired"]
//   },
//   {
//     id: 5,
//     name: "Mechanical Keyboard",
//     category: "Accessories",
//     price: 2499,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041371.png",
//     specs: ["Mechanical Keys", "RGB Backlight", "Anti-Ghosting", "USB Connection"]
//   },
//   {
//     id: 6,
//     name: "Laptop Bag",
//     category: "Accessories",
//     price: 999,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041367.png",
//     specs: ["Water Resistant", "15.6 inch", "Lightweight", "Durable Zip"]
//   },
//   {
//     id: 7,
//     name: "Power Bank",
//     category: "Electronics",
//     price: 1499,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041372.png",
//     specs: ["10000mAh", "Fast Charging", "Dual USB", "LED Indicator"]
//   },
//   {
//     id: 8,
//     name: "USB Flash Drive",
//     category: "Accessories",
//     price: 699,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041383.png",
//     specs: ["64GB Storage", "High Speed", "Compact", "Plug & Play"]
//   },
//   {
//     id: 9,
//     name: "External Hard Drive",
//     category: "Electronics",
//     price: 4999,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041382.png",
//     specs: ["1TB Storage", "USB 3.0", "Shock Resistant", "Portable"]
//   },
//   {
//     id: 10,
//     name: "SSD Drive",
//     category: "Electronics",
//     price: 6999,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041384.png",
//     specs: ["512GB SSD", "Ultra Fast", "Low Power", "Durable"]
//   },

//   {
//     id: 11,
//     name: "Webcam",
//     category: "Electronics",
//     price: 1999,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041380.png",
//     specs: ["HD Video", "Built-in Mic", "USB Plug", "Auto Focus"]
//   },
//   {
//     id: 12,
//     name: "WiFi Router",
//     category: "Electronics",
//     price: 2499,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041381.png",
//     specs: ["Dual Band", "High Speed", "Wide Coverage", "Secure Network"]
//   },
//   {
//     id: 13,
//     name: "Monitor",
//     category: "Electronics",
//     price: 11999,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041378.png",
//     specs: ["24 inch", "Full HD", "IPS Panel", "Eye Care"]
//   },
//   {
//     id: 14,
//     name: "Printer",
//     category: "Electronics",
//     price: 8999,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041379.png",
//     specs: ["All-in-One", "Wireless", "Fast Printing", "Low Ink Cost"]
//   },
//   {
//     id: 15,
//     name: "Graphics Card",
//     category: "Electronics",
//     price: 25999,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041385.png",
//     specs: ["4GB VRAM", "High Performance", "Gaming Ready", "HDMI Support"]
//   },

//   {
//     id: 16,
//     name: "CPU Cooler",
//     category: "Accessories",
//     price: 3499,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041386.png",
//     specs: ["Silent Cooling", "RGB Fan", "High Airflow", "Easy Install"]
//   },
//   {
//     id: 17,
//     name: "Laptop Stand",
//     category: "Accessories",
//     price: 899,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041375.png",
//     specs: ["Adjustable Height", "Aluminium", "Cooling Design", "Portable"]
//   },
//   {
//     id: 18,
//     name: "Mobile Holder",
//     category: "Accessories",
//     price: 399,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041374.png",
//     specs: ["360° Rotation", "Anti Slip", "Compact", "Universal Fit"]
//   },
//   {
//     id: 19,
//     name: "Earbuds",
//     category: "Electronics",
//     price: 2499,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041376.png",
//     specs: ["True Wireless", "Noise Isolation", "Fast Charge", "Touch Control"]
//   },
//   {
//     id: 20,
//     name: "Tablet",
//     category: "Electronics",
//     price: 15999,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041377.png",
//     specs: ["10 inch Display", "Android", "Long Battery", "Slim Design"]
//   },

//   /* ---------- 21 to 50 ---------- */
//   {
//     id: 21, name: "Phone Charger", category: "Accessories", price: 499,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041374.png",
//     specs: ["Fast Charge", "USB Type C", "Safe Charging", "Compact"]
//   },
//   {
//     id: 22, name: "HDMI Cable", category: "Accessories", price: 399,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041375.png",
//     specs: ["4K Support", "High Speed", "Durable", "1.5 Meter"]
//   },
//   {
//     id: 23, name: "Wireless Mouse", category: "Accessories", price: 699,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041368.png",
//     specs: ["Wireless", "Silent Click", "Long Battery", "Ergonomic"]
//   },
//   {
//     id: 24, name: "Laptop Cooling Pad", category: "Accessories", price: 1299,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041386.png",
//     specs: ["Dual Fan", "USB Powered", "Adjustable Angle", "Silent"]
//   },
//   {
//     id: 25, name: "Smart Light Bulb", category: "Electronics", price: 999,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041369.png",
//     specs: ["WiFi Enabled", "Voice Control", "Energy Saving", "RGB Colors"]
//   },

//   /* 26–50 similar realistic items */
//   {
//     id: 26, name: "Fitness Band", category: "Electronics", price: 1999,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041370.png",
//     specs: ["Step Counter", "Sleep Monitor", "Water Resistant", "OLED Display"]
//   },
//   {
//     id: 27, name: "Desk Lamp", category: "Accessories", price: 1199,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041367.png",
//     specs: ["LED", "Adjustable", "Eye Care", "Energy Efficient"]
//   },
//   {
//     id: 28, name: "Wireless Charger", category: "Electronics", price: 1499,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041372.png",
//     specs: ["Fast Wireless", "Qi Certified", "Slim Design", "Safe Charging"]
//   },
//   {
//     id: 29, name: "Security Camera", category: "Electronics", price: 3999,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041380.png",
//     specs: ["HD Recording", "Night Vision", "Motion Detection", "WiFi"]
//   },
//   {
//     id: 30, name: "VR Headset", category: "Electronics", price: 5999,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041373.png",
//     specs: ["360° View", "Comfort Fit", "High Resolution", "Adjustable Lens"]
//   },

//   /* 31–50 */
//   {
//     id: 31, name: "Microphone", category: "Electronics", price: 2499,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041380.png",
//     specs: ["Clear Voice", "USB Plug", "Noise Reduction", "Podcast Ready"]
//   },
//   {
//     id: 32, name: "Sound Card", category: "Electronics", price: 1999,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041369.png",
//     specs: ["HD Audio", "USB Interface", "Low Latency", "Portable"]
//   },
//   {
//     id: 33, name: "Network Switch", category: "Electronics", price: 2299,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041381.png",
//     specs: ["8 Port", "High Speed", "Plug & Play", "Durable"]
//   },
//   {
//     id: 34, name: "Digital Alarm Clock", category: "Accessories", price: 899,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041367.png",
//     specs: ["LED Display", "Snooze", "USB Power", "Compact"]
//   },
//   {
//     id: 35, name: "Car Phone Holder", category: "Accessories", price: 499,
//     img: "https://cdn-icons-png.flaticon.com/512/1041/1041375.png",
//     specs: ["Strong Grip", "360° Rotation", "Dashboard Mount", "Universal"]
//   },

// ];
const API = "http://localhost:5000/api/products";
const WISHLIST_API = "http://localhost:5000/api/wishlist/add";

const productBox = document.getElementById("productList");

// ================= FETCH PRODUCTS =================
async function loadProducts() {
  try {
    const res = await fetch(API);
    const products = await res.json();

    productBox.innerHTML = "";

    products.forEach(p => {
      productBox.innerHTML += `
        <div class="card">
          <img src="${p.image || 'logo.png'}">
          <h3>${p.name}</h3>
          <p>₹${p.price}</p>

          <button onclick="openProduct('${p._id}')">View</button>

          ${
            localStorage.getItem("token")
              ? `
                <button onclick="editProduct('${p._id}')">✏️ Edit</button>
                <button onclick='addToWishlist(${JSON.stringify(p)})'>
                  ❤️ Wishlist
                </button>
              `
              : `
                <button onclick="alert('Please login to use wishlist')">
                  ❤️ Wishlist
                </button>
              `
          }
        </div>
      `;
    });
  } catch (err) {
    console.error("Failed to load products", err);
  }
}

// ================= OPEN PRODUCT =================
function openProduct(id) {
  window.location.href = `singleproduct.html?id=${id}`;
}

// ================= EDIT PRODUCT =================
function editProduct(id) {
  window.location.href = `singleproduct.html?id=${id}&edit=true`;
}

// ================= ADD TO WISHLIST =================
function addToWishlist(product) {
  if (!localStorage.getItem("token")) {
    alert("Please login first");
    return;
  }

  fetch(WISHLIST_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify({
      productId: product._id,
      name: product.name,
      price: product.price,
      image: product.image
    })
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        alert("❤️ Added to wishlist");
      } else {
        alert(data.message || "Wishlist failed");
      }
    })
    .catch(err => {
      console.error("Wishlist error:", err);
      alert("Error adding to wishlist");
    });
}

// ================= INIT =================
loadProducts();
