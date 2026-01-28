// ================= CONFIG =================
const WISHLIST_API = "http://localhost:5000/api/wishlist";
const userId = localStorage.getItem("userId");
const wishlistBox = document.getElementById("wishlistItems");

// ================= SAFETY CHECK =================
if (!userId) {
  alert("Please login first");
  window.location.href = "login.html";
}

// ================= FETCH WISHLIST =================
function fetchWishlist() {
  fetch(`${WISHLIST_API}/${userId}`)
    .then(res => res.json())
    .then(data => renderWishlist(data.products))
    .catch(err => console.error(err));
}

// ================= RENDER WISHLIST =================
function renderWishlist(products) {
  wishlistBox.innerHTML = "";

  if (!products || products.length === 0) {
    wishlistBox.innerHTML = "<p>Your wishlist is empty ❤️</p>";
    return;
  }

  products.forEach(item => {
    wishlistBox.innerHTML += `
      <div class="wishlist-item">
        <h4>${item.name}</h4>
        <p>Price: ₹${item.price}</p>
        <button onclick="removeFromWishlist('${item._id}')">Remove</button>
      </div>
    `;
  });
}

// ================= REMOVE ITEM =================
function removeFromWishlist(productId) {
  fetch(`${WISHLIST_API}/remove`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, productId })
  })
  .then(() => fetchWishlist())
  .catch(err => console.error(err));
}

// ================= INIT =================
fetchWishlist();