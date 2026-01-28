// ================= CONFIG =================
const CART_API = "http://localhost:5000/api/cart";
const userEmail = sessionStorage.getItem("userEmail");
const cartBox = document.getElementById("cartBox");

// ================= SAFETY CHECK =================
if (!userEmail) {
  alert("Please login first");
  window.location.href = "login.html";
}

// ================= FETCH CART =================
function fetchCart() {
  fetch(`${CART_API}/${userEmail}`)
    .then(res => res.json())
    .then(data => renderCart(data.cart))
    .catch(err => console.error(err));
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
        <h4>${item.title}</h4>
        <p>Price: ₹${item.price}</p>
        <button onclick="removeFromCart('${item._id}')">Remove</button>
      </div>
    `;
  });

  cartBox.innerHTML += `
    <hr>
    <h3>Total Amount: ₹${total}</h3>
  `;
}

// ================= REMOVE ITEM =================
function removeFromCart(id) {
  fetch(`${CART_API}/${id}`, {
    method: "DELETE"
  })
  .then(() => fetchCart())
  .catch(err => console.error(err));
}

// ================= INIT =================
fetchCart();
