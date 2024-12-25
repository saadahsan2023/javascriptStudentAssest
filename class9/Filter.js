// 1.Filter Students with Passing Marks
// const marks = [45, 60, 33, 75, 50];
// const passedStudents = marks.filter((mark) => mark >= 50);
// console.log(passedStudents); // Output: [60, 75, 50]

// 2.Filter Active Users in a Website
// const users = [
//   { name: "Ali", status: "active" },
//   { name: "Saad", status: "inactive" },
//   { name: "Maryam", status: "active" },
// ];
// const activeUsers = users.filter((user) => user.status === "active");
// console.log(activeUsers);
// Output: [{ name: 'Ali', status: 'active' }, { name: 'Maryam', status: 'active' }]

//3. Available Products in Stock
// const products = [
//   { name: "Laptop", available: true },
//   { name: "Smartphone", available: false },
//   { name: "Tablet", available: true },
// ];
// const availableProducts = products.filter((product) => product.available);
// console.log(availableProducts);
// Output: [{ name: 'Laptop', available: true }, { name: 'Tablet', available: true }]
// const products = [
//   { name: "Laptop", price: 50000, brand: "Dell" },
//   { name: "Mobile", price: 20000, brand: "Samsung" },
//   { name: "Tablet", price: 30000, brand: "Apple" },
//   { name: "Smartwatch", price: 10000, brand: "Xiaomi" },
//   { name: "Headphones", price: 5000, brand: "Sony" },
//   { name: "Camera", price: 45000, brand: "Canon" },
//   { name: "Monitor", price: 15000, brand: "LG" },
//   { name: "Keyboard", price: 3000, brand: "Logitech" },
//   { name: "Mouse", price: 1500, brand: "HP" },
//   { name: "Printer", price: 12000, brand: "Epson" },
// ];

// const affordable = products.filter((items) => {
//   return items.price <= 20000;
// });
// console.log(affordable);
