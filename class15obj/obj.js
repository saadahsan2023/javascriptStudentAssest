// JavaScript Objects

// 1. What is an Object?
const person = {
  name: "Ali",
  age: 30,
  greet() {
    console.log(`Hi, ${this.name}`);
  },
};

// 2. Create Objects
// a. Object Literal
const car = { brand: "Toyota", year: 2020 };
// b. Using Prototype
const obj = Object.create({
  greet() {
    console.log("Hi!");
  },
});
obj.greet(); // Hi!

// 3. Access Properties
console.log(person.name); // Dot Notation
console.log(person["age"]); // Bracket Notation

// 4. Add/Update/Delete
person.city = "NY"; // Add
delete person.age; // Delete
person.name = "Asad"  
