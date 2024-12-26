const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mobile", price: 20000 },
  { name: "Headphones", price: 5000 },
  { name: "Keyboard", price: 3000 },
  { name: "Monitor", price: 15000 },
  { name: "Monitor", price: 15000 },
  { name: "CPU", price: "34000" },
  { name: "Printer", price: "23000" },
];

// Funtion Jo Product Ko display kary ga

function displayProduct(getProduscts) {
  const productContainer = document.getElementById("product-list");
    productContainer.innerHTML = ``;
  getProduscts.forEach((element) => {
    const createElem = document.createElement("div");
    createElem.className = "product";
    createElem.innerHTML = `
     <p><strong>${element.name}</strong></p>
            <p>Price:${element.price}</p>
            `;

    productContainer.appendChild(createElem);
  });
}
displayProduct(products);

const filterButton = document.getElementById("filterButton");
filterButton.addEventListener("click", () => {
  const priceFilter = document.getElementById("priceFilter").value;
  if (!isNaN(priceFilter)) {
    const filterProdust = products.filter((item) => {
      return item.price <= priceFilter;
    });
    displayProduct(filterProdust);
  } else {
    alert("Erro");
  }
});
