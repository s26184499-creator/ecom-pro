const API = "http://localhost:5000/api/auth";

// ================= LOGIN STATE =================
function isLoggedIn() {
  return sessionStorage.getItem("isLoggedIn") === "true";
}

function getUserName() {
  return sessionStorage.getItem("userName");
}

// ================= SIGNUP =================
async function signupUser(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    alert("All fields are required");
    return;
  }

  try {
    const res = await fetch(`${API}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();

    if (res.ok) {
      alert("Signup successful");
      window.location.href = "login.html";
    } else {
      alert(data.message || "Signup failed");
    }
  } catch {
    alert("Server not reachable");
  }
}

// ================= LOGIN =================
async function loginUser(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Email and password required");
    return;
  }

  try {
    const res = await fetch(`${API}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      // ✅ SET LOGIN STATE
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("userName", data.name || "User");

      window.location.href = "index.html";
    } else {
      alert(data.message || "Login failed");
    }
  } catch {
    alert("Server error");
  }
}
function toggleDropdown() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// ================= LOGOUT =================
function logout() {
  sessionStorage.setItem("isLoggedIn", "false");
  sessionStorage.removeItem("userName");

  window.location.href = "login.html";
}
