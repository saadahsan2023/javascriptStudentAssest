// const userDatas = [
//   {
//     name: "saad",
//     email: "saad@gmail.com",
//     pass: "plokijuhyg",
//   },
//   {
//     name: "Ali",
//     email: "ali@gmail.com",
//     pass: "pakistanzindabd",
//   },
//   {
//     name: "Ali",
//     email: "ali@gmail.com",
//     pass: "pakistanzindabd",
//   },
//   {
//     name: "Ali",
//     email: "ali@gmail.com",
//     pass: "pakistanzindabd",
//   },
// ];

// function userData(...data) {
//   data.forEach((user) => {
//     const userInfo = `Name:${user.name},Email:${user.email},Pass:${user.pass}`;
//     console.log(userInfo);
//   });
// }
// userData(...userDatas);
// Project
// const userDatas = [
//   { name: "saad", email: "saad@gmail.com", pass: "plokijuhyg" },
//   { name: "Ali", email: "ali@gmail.com", pass: "pakistanzindabd" },
// ];

// const tableBody = document.querySelector("#userTable tbody");

// // Function to populate the table
// function populateTable(users) {
//   tableBody.innerHTML = ""; // Clear existing rows
//   users.forEach((user) => {
//     const row = document.createElement("tr");
//     row.innerHTML = `
//   <td>${user.name}</td>
//   <td>${user.email}</td>
//   <td>${user.pass}</td>
// `;
//     tableBody.appendChild(row);
//   });
// }

// // Function to add a new user (for demonstration)
// function addNewUser() {

//   const newUser = {
//     name: "Ali",
//     email: "Hassan",
//     pass: "plokimjuyhtg",
//   };
//   userDatas.push(newUser);
//   populateTable(userDatas);
// }

// // Initial population of the table
// populateTable(userDatas);
// Projects 
const userDatas = [
  { name: "saad", email: "saad@gmail.com", password: "plokijuhyg" },
  { name: "Ali", email: "ali@gmail.com", password: "pakistanzindabd" },
];

const tableBody = document.querySelector("#userTable tbody");

// Function to populate the table
function populateTable(users) {
  tableBody.innerHTML = ""; // Clear existing rows
  users.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
      `;
    tableBody.appendChild(row);
  });
}

// Function to add a new user from the form
function addNewUser() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    alert("Please fill in all fields!");
    return;
  }

  const newUser = { name, email, password };
  userDatas.push(newUser); // Add new user to the array
  populateTable(userDatas); // Refresh the table

  // Clear the form fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";

  alert("User added successfully!");
}

// Initial population of the table
populateTable(userDatas);
