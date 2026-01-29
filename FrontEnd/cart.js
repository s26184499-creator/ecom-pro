// ================= CONFIG =================
const CART_API = "http://localhost:5000/api/cart";
const cartBox = document.getElementById("cartBox");

// ================= LOGIN CHECK =================
if (sessionStorage.getItem("isLoggedIn") !== "true") {
  alert("Please login first");
  window.location.href = "login.html";
}

// ================= FETCH CART =================
async function fetchCart() {
  try {
    const res = await fetch(CART_API, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });

    const data = await res.json();
    renderCart(data.cart || data);
  } catch (err) {
    console.error("Failed to fetch cart", err);
  }
}

// ================= RENDER CART =================
function renderCart(cart) {
  cartBox.innerHTML = "";

  if (!cart || cart.length === 0) {
    cartBox.innerHTML = "<p>Your cart is empty 🛒</p>";
    return;
  }

  let total = 0;

  cart.forEach(item => {
    total += Number(item.price);

    cartBox.innerHTML += `
      <div class="cart-item">
        <h4>${item.name}</h4>
        <p>Price: ₹${item.price}</p>
        <button onclick="removeFromCart('${item._id}')">
          Remove
        </button>
      </div>
    `;
  });

  cartBox.innerHTML += `
    <hr>
    <h3>Total Amount: ₹${total}</h3>
  `;
}

// ================= REMOVE ITEM =================
async function removeFromCart(productId) {
  try {
    await fetch(`${CART_API}/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });

    fetchCart();
  } catch (err) {
    console.error("Remove from cart failed", err);
  }
}

// ================= INIT =================
fetchCart();
