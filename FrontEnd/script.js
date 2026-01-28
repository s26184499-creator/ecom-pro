function requireLoginPopup() {
  if (!localStorage.getItem("currentUser")) {
    if (typeof openModal === "function") {
      openModal();
    }
    return false;
  }
  return true;
}

function addToCart(name, price) {
  if (!requireLoginPopup()) return;

  let qtyInput = document.getElementById("qty");
  let qty = qtyInput ? parseInt(qtyInput.value) : 1;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price, qty });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart 🛒");
}

function openProduct(id) {
  window.location.href = "singleProduct.html?id=" + id;
}

function searchProducts() {
  let value = document.getElementById("searchInput").value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(value)
      ? "block"
      : "none";
  });
}

function filterCategory(cat) {
  document.querySelectorAll(".card").forEach(card => {
    card.style.display =
      cat === "all" || card.dataset.category === cat
        ? "block"
        : "none";
  });
}

function addToWishlist(product) {
  let list = JSON.parse(localStorage.getItem("wishlist")) || [];
  list.push(product);
  localStorage.setItem("wishlist", JSON.stringify(list));
  alert("Added to wishlist ❤️");
}
