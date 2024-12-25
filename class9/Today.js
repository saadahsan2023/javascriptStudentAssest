// const prices = [100, 200, 300];
// // Tumhare paas ek list hai items ki prices ki, aur tum chahte ho har price pe 20% discount lagana.
// prices.map((item) => {
//   const data = item - item * 0.2;
//   console.log(data);
// });

// 2. Students Ke Names Ko Capitalize Karna
// const students = ["ali", "saad", "maryam", "Hassan", "laiba"];
// const arr = students.map((item) => {
//   const value = item.charAt(0).toLocaleUpperCase() + item.slice(1);
//   console.log(value);
// });
// console.log(arr);
// Number Ko Double karna ha
// const numbers = [2, 5, 8];

// numbers.map((item) => {
//   console.log(item * item);
// });
// // Map Complete
// // Start Filter
// // 1.Filter Students with Passing Marks
// const marks = [45, 60, 33, 75, 50, 32, 40];
// const data = marks.filter((item) => {
//   return item > 33;
// });
// console.log(data);

// // 2.Filter Active Users in a Website
// const users = [
//   { name: "Ali", status: "active" },
//   { name: "Saad", status: "inactive" },
//   { name: "Maryam", status: "active" },
// ];

// const dal = users.filter((data) => {
//   return data.status === "active";
// });
// console.log(dal);

// // 3. Available Products in Stock
// const products = [
//   { name: "Laptop", available: true },
//   { name: "Smartphone", available: false },
//   { name: "Tablet", available: true },
// ];
// const data = products.filter((data) => {
//   return data.available == true;
// });

// console.log(data);

// array.reduce((accumulator, currentValue) => {
//   // Logic
// }, initialValue);

// let arr = [100, 200, 300, 400];
// const data = arr.reduce((item, value) => item + value, 10);
// console.log(data);
