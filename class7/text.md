_For...in Loop (Object Iteration)_ 

for...in loop ka use hum objects ki properties ko iterate karne ke liye karte hain. Yeh loop object ke keys (properties) ko traverse karta hai.

for (let key in object) {
  // Access key and value
  console.log(key, object[key]);
}

Real-life Example 

const cart = {
  item1: { name: "Laptop", price: 500 },
  item2: { name: "Headphones", price: 50 },
  item3: { name: "Mouse", price: 25 }
};

for (let item in cart) {
  console.log(`${cart[item].name} costs $${cart[item].price}`);
}

*2. For...of Loop (Array Iteration)*

for...of loop ka use hum arrays ko iterate karne ke liye karte hain. Yeh loop directly array ke elements ko traverse karta hai, na ki indices ko.

for (let element of array) {
  // Access element
  console.log(element);
}

*Real-life Example*

const students = ["Ali", "Sara", "Usman", "Ayesha"];

for (let student of students) {
  console.log(student);
}

*Map Method (Array Iteration with Transformation)*

map() method ka use hum array ke har element ko transform karne ke liye karte hain. Yeh method ek nayi array return karta hai jo original array ke elements ki transformation ko represent karta hai. 

let newArray = array.map(function(element) {
  // Return transformed value
  return element * 2;
});

Real-life Example:
Agar aapke paas ek array ho of numbers aur aapko un sab numbers ka square chahiye ho, toh aap map() method ka use kar sakte hain. 

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(number => number * number);

console.log(squaredNumbers); // [1, 4, 9, 16, 25]
