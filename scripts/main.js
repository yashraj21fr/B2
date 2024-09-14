// Main.js - Shared functions for the Expense Management Website

// Check if the user is logged in, and redirect to login page if not
function checkAuthentication() {
  const loggedInUser = sessionStorage.getItem("loggedInUser");
  if (!loggedInUser) {
    alert("You need to login first!");
    window.location.href = "login.html";
  }
}

// Logout function
function logout() {
  sessionStorage.removeItem("loggedInUser"); // Clear session storage
  alert("You have successfully logged out!");
  window.location.href = "login.html"; // Redirect to login page
}

// Call this function on pages that require authentication
checkAuthentication();
