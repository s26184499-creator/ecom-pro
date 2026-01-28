const API = "http://localhost:5000/api/auth";


function isLoggedIn() {
  return sessionStorage.getItem("userEmail") !== null;
}


// SIGNUP
async function signupUser(e) {
  e.preventDefault(); // stop page refresh


  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();


  // basic validation
  if (!name || !email || !password) {
    alert("All fields are required");
    return;
  }


  try {
    const response = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });


    const data = await response.json();
    console.log("Backend response:", data); 


    if (response.ok) {
      alert("Signup successful");
    } else {
      alert(data.message || "Signup failed");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    alert("Server not reachable");
  }
}




// LOGIN
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
    console.log("Login response:", data);

    if (res.ok) {
      alert("Login successful");
      sessionStorage.setItem("userEmail", email);
      sessionStorage.setItem("userName", data.user?.name || "");
      window.location.href = "index.html";
    } else {
      alert(data.message || "Login failed");
    }

  } catch (error) {
    console.error(error);
    alert("Server error");
  }
}

// LOGOUT
function logout() {
  sessionStorage.clear();
  alert("Logged out successfully");
  window.location.href = "login.html";
}