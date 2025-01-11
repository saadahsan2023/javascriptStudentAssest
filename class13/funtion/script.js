const parentElem = document.querySelector("#userTable tbody");
let allProducts = [
  {
    name: "Aisha",
    email: "saad@gmail.com",
    password: "plokijuh",
  },
  {
    name: "Aisha",
    email: "saad@gmail.com",
    password: "plokijuh",
  },
];

function addNewUser() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
}

function displayProduct(Products) {
  Products.forEach((item) => {
    const tr = document.createElement("tr");
  });
}
displayProduct(allProducts);
