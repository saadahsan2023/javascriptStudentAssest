// Example 1
// let student = {
//   name: "aisha",
//   age: "20",
//   class: "10",
// };
// for(const [key,value] of Object.entries(student)) {
//   console.log(key,value);
// }
// Funtion;
// Method;
// Properties;

// Example 2

// let products = ["Laptop", "Mobail", "Tablet"];
// for (const product of products) {
//   document.write(`<li>${product}</li>`);
// }
// Example 3

// let userData = [
//   {
//     name: "laiba",
//     age: 25,
//   },
//   {
//     name: "hassan",
//     age: 20,
//   },
//   {
//     name: "Asad",
//     age: 17,
//   },
// ];
// for (const UserData of userData) {
//   document.write(
//     `User Name Is:${UserData.name} and Age Is:${UserData.age}</br>`
//   );

//   console.log(UserData);
// }
// --------------------------------------------------------------------End-----------------
// Example 1

// let student = {
//   name: "aisha",
//   age: "20",
//   class: "10",
// };

// console.log(student);

// for (const key in student) {
//   console.log(key, student[key]);
// }
// Example 2

// let user = {
//   name: "",
//   email: "saad@gmail.com",
//   age: 23,
// };

// for (const key in user) {
//   if (!user[key]) {
//     console.log(`${key} is missing or invalid.`);
//   }
// }

// Example 3
// const cart = {
//   item1: { name: "Laptop", price: 500 },
//   item2: { name: "Headphones", price: 50 },
//   item3: { name: "Mouse", price: 25 },
// };

// for (const key in cart) {
//   const data = `${cart[key].name}, ${cart[key].price} </br>`;
//   document.write(data);
// }
