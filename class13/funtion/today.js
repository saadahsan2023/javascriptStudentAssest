// console.log(mathematics(2, 4));
// function mathematics(num1, num2) {
//   return num1 + num2;
// }
// Hoisted;
// // hosting
// // hoisting

// console.log(x);

// var x = 20;

// Funtion Expretion
// const cart = function () {
//     console.log("Hellow World ");
// };
// cart();

// cart();
// const cart = () => {
//       console.log("Hellow World ");
// };

// Arrow Funtion
// const add = (a, b) => a + b;

// console.log(add(2,4));

// function multiply(a, b) {
//   a * b;
// }
// multiply();

// local scope
// global scope

// var name = "laiba";

// if (true) {
//   let name1 = "hassan";
//   console.log(name);
// }
// console.log(name1);

// var name = "laiba"

// {
//   const name = "laiba";
//   console.log(name);
// }

// console.log(name);

// Anonymous Funtion

// setTimeout(function(){
//     console.log();

// })

function greet(name = "Guest") {
  console.log("Welcome, " + name + "!");
}
greet("Laiba")
