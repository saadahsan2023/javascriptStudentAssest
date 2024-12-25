//1. Total Price of Products in Cart
const cartPrices = [500, 1500, 700];
const totalPrice = cartPrices.reduce((total, price) => total + price, 0);
console.log(totalPrice); // Output: 2700

//2. Calculate Total Distance Traveled
const distances = [10, 20, 30, 40];
const totalDistance = distances.reduce(
  (total, distance) => total + distance,
  0
);
console.log(totalDistance); // Output: 100

// Calculate the Total Quantity of Items in Inventory
const inventory = [
  { product: "Shirt", quantity: 10 },
  { product: "Pants", quantity: 15 },
  { product: "Jacket", quantity: 5 },
];

const totalQuantity = inventory.reduce(
  (total, item) => total + item.quantity,
  0
);

console.log(totalQuantity); // Output: 30
