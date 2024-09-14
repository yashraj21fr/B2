let expenses = [];

// Get logged-in user
const loggedInUser = sessionStorage.getItem("loggedInUser");
if (!loggedInUser) {
  window.location.href = "login.html";
}

// Load user's expenses from localStorage
function loadExpenses() {
  const user = JSON.parse(localStorage.getItem(loggedInUser));
  expenses = user.expenses || [];
  displayExpenses();
}

function addExpense() {
  const expense = document.getElementById("expense").value;
  const category = document.getElementById("category").value;
  const amount = document.getElementById("amount").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!expense || !category || !amount || !date || !time) {
    alert("Please fill in all fields.");
    return;
  }

  expenses.push({ expense, category, amount, date, time });
  updateExpenses();
  alert("Expense added!");
}

function updateExpenses() {
  const user = JSON.parse(localStorage.getItem(loggedInUser));
  user.expenses = expenses;
  localStorage.setItem(loggedInUser, JSON.stringify(user));
  displayExpenses();
}

function displayExpenses() {
  const tableBody = document.querySelector("#expense-table tbody");
  tableBody.innerHTML = ""; // Clear previous rows

  expenses.forEach((exp) => {
    const row = `<tr>
            <td>${exp.expense}</td>
            <td>${exp.category}</td>
            <td>${exp.amount}</td>
            <td>${exp.date}</td>
            <td>${exp.time}</td>
        </tr>`;
    tableBody.insertAdjacentHTML("beforeend", row);
  });
}

function exportExpenses() {
  let csvContent =
    "data:text/csv;charset=utf-8,Expense,Category,Amount,Date,Time\n";

  expenses.forEach((exp) => {
    csvContent += `${exp.expense},${exp.category},${exp.amount},${exp.date},${exp.time}\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "expenses.csv");
  document.body.appendChild(link);
  link.click();
}

// Load expenses when viewing the expense page
if (document.querySelector("#expense-table")) {
  loadExpenses();
}
