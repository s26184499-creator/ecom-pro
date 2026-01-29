// ================= CONFIG =================
const WISHLIST_API = "http://localhost:5000/api/wishlist";
const wishlistBox = document.getElementById("wishlistItems");

// ================= LOGIN CHECK =================
if (sessionStorage.getItem("isLoggedIn") !== "true") {
  alert("Please login first");
  window.location.href = "login.html";
}

// ================= FETCH WISHLIST =================
async function fetchWishlist() {
  try {
    const res = await fetch(WISHLIST_API, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });

    const data = await res.json();
    renderWishlist(data.products || data);
  } catch (err) {
    console.error("Wishlist fetch failed", err);
  }
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
        <button onclick="removeFromWishlist('${item._id}')">
          Remove
        </button>
      </div>
    `;
  });
}

// ================= REMOVE ITEM =================
async function removeFromWishlist(productId) {
  try {
    await fetch(`${WISHLIST_API}/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });

    fetchWishlist();
  } catch (err) {
    console.error("Remove failed", err);
  }
}

// ================= INIT =================
fetchWishlist();
