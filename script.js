// Registration
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
    const message = document.getElementById("message");

    message.textContent = "";
    message.className = "";

    if (!username || !email || !password || !confirm) {
      message.textContent = "All fields are required!";
      message.className = "error";
      return;
    }

    if (password !== confirm) {
      message.textContent = "Passwords do not match!";
      message.className = "error";
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find(
      (user) => user.username === username || user.email === email
    );
    if (exists) {
      message.textContent = "User already exists!";
      message.className = "error";
      return;
    }

    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    message.textContent = "Registration successful!";
    message.className = "success";

    registerForm.reset();
  });
}

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;
    const message = document.getElementById("loginMessage");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(
      (u) =>
        (u.username === username || u.email === username) &&
        u.password === password
    );

    message.textContent = "";
    message.className = "";

    if (validUser) {
      message.textContent = "Login successful!";
      message.className = "success";
      setTimeout(() => {
        window.location.href = "welcome.html";
      }, 1000);
    } else {
      message.textContent = "Invalid credentials!";
      message.className = "error";
    }
  });
}
