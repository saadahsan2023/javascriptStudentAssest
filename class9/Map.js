// // Real-Life Examples
// // 1. Discount Lagana
// // Tumhare paas ek list hai items ki prices ki, aur tum chahte ho har price pe 20% discount lagana.

// const prices = [100, 200, 300];
// const discountedPrices = prices.map((price) => price - price * 0.2);
// console.log(discountedPrices); // Output: [80, 160, 240]

// //2. Students Ke Names Ko Capitalize Karna
// const students = ["ali", "saad", "maryam"];
// const capitalizedNames = students.map(
//   (name) => name.charAt(0).toUpperCase() + name.slice(1)
// );
// console.log(capitalizedNames); // Output: ['Ali', 'Saad', 'Maryam']

// //3. Number List Ka Double Banana

// const numbers = [2, 5, 8];
// const doubledNumbers = numbers.map((num) => num * 2);
// console.log(doubledNumbers); // Output: [4, 10, 16]

// // //4. Social Media: Username Generate Karna
// // const users = ["Ali Khan", "Saad Ahmed", "Maryam Bibi"];
// // const usernames = users.map((user) => user.toLowerCase().replace(" ", "_"));

// // console.log(usernames);
// // // Output: ['ali_khan', 'saad_ahmed', 'maryam_bibi']
// // // Customer Order Summary
// // const orders = [
// //   { quantity: 2, price: 500 },
// //   { quantity: 3, price: 200 },
// //   { quantity: 1, price: 1000 },
// // ];
// // const orderTotals = orders.map((order) => order.quantity * order.price);

// // console.log(orderTotals); // Output: [1000, 600, 1000]

// const prices = [200, 400, 700, 1200, 1300];

// prices.map((items) => {
//   console.log((items * 20) / 100 - items);
//   //   DMAS;
// });
// // console.log(data);
