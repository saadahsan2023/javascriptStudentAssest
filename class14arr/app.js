// Array
// Array is a way to store multiple values in a single variable

// let students = []
// let arr = new Array(1,2,3,4,5)
// console.log(students);

// let arr = [[2, 3], [4, 3], [[2, 4]]];
// Index start 0 sy
//  let x  = arr.flat(Infinity)
//  console.log(x);

// let x = ["laiba", "ali", "hassan"];
// let y = [23, 45, 65, 65, 34];

// let Z = x.concat(y);
// console.log(Z);
// let x = [1, 2, 3, 4, 5];
// let y = [6, 7, 8, 9];

// let z = [...x, ...y];

// console.log(z.toString());

// 1. Search for a Product
// let products = ["Laptop", "Phone", "Tablet", "Headphones"];
// let searchProduct = "Phone";
// // 1 = true  = yes
// // -1 = false = no
// let response = products.indexOf(searchProduct);
// console.log(response);

// Key        Value
// products[0] = "Mobail";

// let students = [
//   { name: "Ali", marks: 40 },
//   { name: "Ayesha", marks: 60 },
//   { name: "hassan", marks: 30 },
//   { name: "saad", marks: 20 },
//   { name: "laiba", marks: 49 },
//   { name: "Sarah", marks: 70 },
//   { name: "Sarah", marks: 70 },
//   { name: "Sarah", marks: 70 },
//   { name: "Sarah", marks: 70 },
//   { name: "Sarah", marks: 70 },
//   { name: "Sarah", marks: 70 },
// ];
// let result = students.filter((item) => {
//   return item.marks > 50;
// });

// console.log(result);

// let arr = [2, 3, 4, 5, 1, 6];
// console.log(arr.sort());

// Server  (Req) (Res)
// Express .js
// DNS Domain Name System

// API
// Methods Of Array

// 1. Push
// let fruits = ["apple", "banana"];
// fruits.push("orange");
// console.log(fruits)

// 2. Pop
// let fruits = ["apple", "banana", "orange"];
// let removed = fruits.pop();
// console.log(fruits)
// console.log(removed)

// 3. Unshift
// let fruits = ["banana", "orange"];
// fruits.unshift("apple","apple")
// console.log(fruits)

// 4. Shift
// let fruits = ["apple", "banana", "orange"];
// let removed = fruits.shift();
// console.log(fruits)
// console.log(removed)
// 5. Concat
// let fruits = ["apple", "banana"];
// let vegetables = ["carrot", "potato"];
// let food = fruits.concat(vegetables);
// console.log(food)

// 6. Slice
// let fruits = ["apple", "banana", "orange", "kiwi"];
// let fruits = ["apple", "banana", "orange", "kiwi"];
// // let sliced = fruits.slice(start, end);
// let sliced = fruits.slice(1, 3);
// console.log(sliced);
// console.log(fruits);

// 7. Splice

// let array = ["apple", "banana", "orange", "kiwi"];
// array.splice(index, count(RemoveItem), addItem,...)
// let fruits = ["apple", "banana", "orange"];
// fruits.splice(1, 1, "kiwi","kiwi","kiwi");
// console.log(fruits);

// 8. Includes
// let fruits = ["apple", "banana", "orange"];
// console.log(fruits.includes("banana")); // true
// console.log(fruits.includes("grape"));  // false

// 9. IndexOf
// let fruits = ["apple", "banana", "orange"];
// console.log(fruits.indexOf("orange"))
// console.log(fruits.indexOf("grape"))

// 10. Join
// let fruits = ["apple", "banana", "orange"];
// let joined = fruits.join(" and ");
// console.log(joined)
// "Always returns an array as a string"

// 11. Reverse
// let fruits = ["apple", "banana", "orange"];
// fruits.reverse()

// console.log(fruits); // ["orange", "banana", "apple"]

// // 12. Sort
// let fruits = ["orange", "apple", "banana"];
// fruits.sort()
// console.log(fruits)
