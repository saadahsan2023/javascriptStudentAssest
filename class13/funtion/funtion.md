## 1. Understanding Functions

### What is a Function?

A function is a block of reusable code that performs a specific task.
Functions make your code more modular, readable, and reusable.

### Defining Functions

Functions can be defined in multiple ways in JavaScript:

#### Function Declaration

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}
```

#### Calling a Function

```javascript
greet("Saad"); Output: Hello, Saad!

```

#### Function Expression

```javascript
const greet = function (name) {
  console.log("Hello, " + name + "!");
};
greet("Ahsan");
```

#### Arrow Functions

```javascript
const greet = (name) => {
  console.log("Hello, " + name + "!");
};
greet("Khan");
```

---

## 2. Function Parameters and Return Values

### Parameters

Parameters are placeholders used to pass data into a function.

```javascript
function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 3)); // Output: 6
```

### Default Parameters

```javascript
function greet(name = "Guest") {
  console.log("Welcome, " + name + "!");
}
greet(); // Output: Welcome, Guest!
```

### Return Values

```javascript
function add(a, b) {
  return a + b;
}
let sum = add(5, 10);
console.log(sum); // Output: 15
```

---

## 3. Scope in JavaScript

### Global Scope

```javascript
let globalVar = "I am global";
function showGlobal() {
  console.log(globalVar);
}
showGlobal(); // Output: I am global
```

### Local Scope

```javascript
function localScopeExample() {
  let localVar = "I am local";
  console.log(localVar);
}
// console.log(localVar); // Error: localVar is not defined
```

### Block Scope

```javascript
if (true) {
  let blockScoped = "I exist within this block";
  console.log(blockScoped);
}
// console.log(blockScoped); // Error: blockScoped is not defined
```

---

## 4. Closures

### Example of Closure

```javascript
function outer() {
  let outerVar = "I am from outer";

  function inner() {
    console.log(outerVar);
  }
  return inner;
}
let innerFunc = outer();
innerFunc(); // Output: I am from outer
```

---

## 5. Hoisting

### Function Hoisting

```javascript
greet(); // Output: Hello!

function greet() {
  console.log("Hello!");
}
```

---
