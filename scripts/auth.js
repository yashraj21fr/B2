// Signup Function
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!localStorage.getItem(username)) {
    localStorage.setItem(username, JSON.stringify({ password, expenses: [] }));
    alert("Account created! You can now login.");
    window.location.href = "login.html";
  } else {
    alert("Username already exists.");
  }
});

// Login Function
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const user = JSON.parse(localStorage.getItem(username));

  if (user && user.password === password) {
    sessionStorage.setItem("loggedInUser", username);
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password.");
  }
});

// Logout
function logout() {
  sessionStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}
