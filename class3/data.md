  <!-- CLass 3 DataType -->

In JavaScript, data types refer to the types of values that variables can hold. JavaScript is a dynamically typed language, meaning you don’t need to declare the type of a variable when defining it

Primitive (or basic) data types in JavaScript  (Stack)
Non-primitive (or complex) data types           (Heap)

Primitive Data Types
Primitive data types represent single values and are immutable (cannot be altered after creation).   

1. Number
Numbers (integers or decimals) ke liye.
Example:
let age = 25; 
let price = 99.99;
2. String
Text ya characters ke liye.
Example:
let name = "Ali"; 
let greeting = 'Hello!';
3. Boolean
True ya False values ke liye.
Example:
let isStudent = true; 
let isGraduated = false;
4. Null
"Intentional absence of value."
Example:
let result = null;
5. Undefined
Variable declare hua hai, par koi value assign nahi ki gayi.
Example:
let score;
console.log(score); // undefined
6. Symbol
Unique identifiers create karne ke liye.
Example:
let id = Symbol("unique");
console.log(id); // Symbol(unique)
7. BigInt
Bohat bade integers ke liye (jo Number se bade hote hain).
Example:
let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber); // 123456789012345678901234567890n
Key Points:
Primitive types stack memory me store hote hain.
Immutable hote hain, yaani ek variable ki value directly change nahi hoti.

Non-Primitive Data Types in JavaScript 
Non-primitive data types are used to store complex or multiple values. These are reference-based and mutable, meaning their values can be changed.

Object
Used to store key-value pairs.
Example:
let person = {
  name: "Ali",
  age: 25
};
console.log(person.name); // Output: Ali
2. Array
Used to store multiple values in a single variable.
Example:
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[1]); // Output: Banana
3. Function
A block of reusable code.
Example:
function greet() {
  return "Hello!";
}
console.log(greet()); // Output: Hello! 


Prove  

// Primitive Data

