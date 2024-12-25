<!-- // Example 1: Simple Function

// function sayHello() {
//   console.log("Hello, JavaScript!");
// }

// sayHello(); // Calling the function

// Example 2: Function with Parameters

// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }

// greet("Ali");

// Example 3: Function with Return Value

// function add(a, b) {
//   return a + b;
// }

// const result = add(5, 3);
// console.log(result); // Output: 8

// Example 4: Arrow Function

// const multiply = (a, b) => a * b;
// console.log(multiply(2, 3));

// 3. Real-Life Project: To-Do List App (30 Minutes)
// 4. Class Activity (20 Minutes)

// Task 1: Write a Function to Calculate Age

// Create a function calculateAge that takes the birth year as input and returns the current age.

// Task 2: Write a Function to Find Even or Odd Numbers

// Create a function isEven that takes a number as input and returns true if the number is even and false if it is odd.

// Function to add two numbers
// function add() {
//   const num1 = parseFloat(document.getElementById("num1").value);
//   const num2 = parseFloat(document.getElementById("num2").value);
//   const result = num1 + num2;
//   document.getElementById("result").textContent = `Result: ${result}`;
// }

// // Function to subtract two numbers
// function subtract() {
//   const num1 = parseFloat(document.getElementById("num1").value);
//   const num2 = parseFloat(document.getElementById("num2").value);
//   const result = num1 - num2;
//   document.getElementById("result").textContent = `Result: ${result}`;
// }

// // Function to multiply two numbers
// function multiply() {
//   const num1 = parseFloat(document.getElementById("num1").value);
//   const num2 = parseFloat(document.getElementById("num2").value);
//   const result = num1 * num2;
//   document.getElementById("result").textContent = `Result: ${result}`;
// }

// // Function to divide two numbers
// function divide() {
//   const num1 = parseFloat(document.getElementById("num1").value);
//   const num2 = parseFloat(document.getElementById("num2").value);

//   if (num2 === 0) {
//     document.getElementById("result").textContent =
//       "Error: Division by zero is not allowed!";
//   } else {
//     const result = num1 / num2;
//     document.getElementById("result").textContent = `Result: ${result}`;
//   }
// } -->


// function add() {
//   const val1 = +document.getElementById("num1").value;
//   const val2 = +document.getElementById("num2").value;
//   const result = document.getElementById("result");
//   const results = val1 + val2;
//   result.textContent = `Result is ${results}`;
//   document.getElementById("num1").value = ``;
//   document.getElementById("num2").value = ``;

// }
// function subtract() {
//   const val1 = +document.getElementById("num1").value;
//   const val2 = +document.getElementById("num2").value;
//   const result = document.getElementById("result");
//   const results = val1 - val2;
//   result.textContent = `Result is ${results}`;
//   document.getElementById("num1").value = ``;
//   document.getElementById("num2").value = ``;
// }
// function multiply() {
//   const val1 = +document.getElementById("num1").value;
//   const val2 = +document.getElementById("num2").value;
//   const result = document.getElementById("result");
//   const results = val1 * val2;
//   result.textContent = `Result is ${results}`;
//   document.getElementById("num1").value = ``;
//   document.getElementById("num2").value = ``;
// }
// function divide() {
//   const val1 = +document.getElementById("num1").value;
//   const val2 = +document.getElementById("num2").value;
//   const result = document.getElementById("result");
//   if (val2 === 0) {
//     result.textContent = `Error`;
//   } else {
//     const results = val1 / val2;
//     result.textContent = `Result is ${results}`;
//   }
//   document.getElementById("num1").value = ``;
//   document.getElementById("num2").value = ``;
// }

// function Remove() {
//   document.getElementById("num1").value = ``;
//   document.getElementById("num2").value = ``;
//   const result = document.getElementById("result");
//   result.textContent = `Zero Result`;
// }

// Function to save data to local storage

// function saveToLocalStorage() {
//     const num1 = document.getElementById('num1').value;
//     const num2 = document.getElementById('num2').value;
//     const result = document.getElementById('result').textContent;

//     localStorage.setItem('num1', num1);
//     localStorage.setItem('num2', num2);
//     localStorage.setItem('result', result);
//   }

//   // Function to load data from local storage
//   function loadFromLocalStorage() {
//     const num1 = localStorage.getItem('num1') || '';
//     const num2 = localStorage.getItem('num2') || '';
//     const result = localStorage.getItem('result') || 'Result:';

//     document.getElementById('num1').value = num1;
//     document.getElementById('num2').value = num2;
//     document.getElementById('result').textContent = result;
//   }

//   // Function to add two numbers
//   function add() {
//     const num1 = parseFloat(document.getElementById('num1').value);
//     const num2 = parseFloat(document.getElementById('num2').value);
//     const result = num1 + num2;
//     document.getElementById('result').textContent = `Result: ${result}`;
//     saveToLocalStorage();
//   }

//   // Function to subtract two numbers
//   function subtract() {
//     const num1 = parseFloat(document.getElementById('num1').value);
//     const num2 = parseFloat(document.getElementById('num2').value);
//     const result = num1 - num2;
//     document.getElementById('result').textContent = `Result: ${result}`;
//     saveToLocalStorage();
//   }

//   // Function to multiply two numbers
//   function multiply() {
//     const num1 = parseFloat(document.getElementById('num1').value);
//     const num2 = parseFloat(document.getElementById('num2').value);
//     const result = num1 * num2;
//     document.getElementById('result').textContent = `Result: ${result}`;
//     saveToLocalStorage();
//   }

//   // Function to divide two numbers
//   function divide() {
//     const num1 = parseFloat(document.getElementById('num1').value);
//     const num2 = parseFloat(document.getElementById('num2').value);

//     if (num2 === 0) {
//       document.getElementById('result').textContent = 'Error: Division by zero is not allowed!';
//     } else {
//       const result = num1 / num2;
//       document.getElementById('result').textContent = `Result: ${result}`;
//     }
//     saveToLocalStorage();
//   }

//   // Load data from local storage when the page loads
//   loadFromLocalStorage();
