// Add a New Property:
// Is object mein ek nayi property contactNumber add karo jiski value "0321-1234567" ho.
// Update a Value:
// age ko 23 kar do.
// Access and Modify a Nested Value:
// grades ke andar Physics ka grade update karke 85 kar do.
// Add a New Course:
// courses array mein "Biology" add karo.
// Delete a Property:
// isGraduated property ko delete kar do.
// Check for a Property:
// Check karo ke object mein address property hai ya nahi (true/false return karo).
// Iterate and Print:
// Saare grades print karo, format mein:
// Subject: Grade (e.g., Math: 80).
// const student = {
//   name: "Ali",
//   age: 22,
//   courses: ["Math", "Physics", "Chemistry"],
//   grades: {
//     Math: 80,
//     Physics: 75,
//     Chemistry: 90,
//   },
//   isGraduated: false,
// };
// student.contactNumber = "0321-1234567";
// student.age = "23";
// student.grades.Physics = "85";
// student.courses.push("biology");
// delete student.isGraduated;
// console.log("address" in student); // or
// console.log(student.hasOwnProperty("address"));

// for (const subject in student.grades) {
//   console.log(`${subject}: ${student.grades[subject]}`);
// }

// console.log(student);
// // Problem: 2;
// const library = {
//   name: "City Library",
//   location: "Downtown",
//   books: [
//     { title: "JavaScript Basics", author: "John Doe", available: true },
//     { title: "Learn React", author: "Jane Smith", available: false },
//     { title: "CSS Mastery", author: "Emily Johnson", available: true },
//   ],
//   librarian: {
//     name: "Mr. Ahmed",
//     age: 45,
//   },
//   membershipFee: 500,
// };
// //   Add a New Book:
// // Library mein ek nayi kitaab add karo:

// // Title: "Node.js Essentials"
// // Author: "Alice Brown"
// // Available: true
// library.books.push({
//   title: "Node.js Essentials",
//   author: "Alice Brown",
//   available: true,
// });
// // Update Membership Fee:

// // Membership fee ko 600 kar do.
// library.membershipFee = 600;

// // Check Book Availability:

// // Library mein check karo agar "Learn React" available hai ya nahi. Agar hai, true print karo, warna false.
// // library.books.title.hasOwnProperty("Learn Reack");

// // Remove a Book:

// // "CSS Mastery" title wali book ko library se delete kar do.

// // delete library.books.title["CSS Mastery"];

// // Iterate and Print Books:

// // Library mein har book ka title aur author print karo, format mein:
// // "Title: [Book Title], Author: [Author]"

// for (const key in library.books) {
//   if (Object.prototype.hasOwnProperty.call(library, key)) {
//     const element = library[key];
//     console.log(`Title ${key} Author:${element}`);
//   }
// }

// console.log(library);

// // Membership Fee: 600
// // Is "Learn React" available? false
// // Books in Library:
// //   Title: JavaScript Basics, Author: John Doe
// //   Title: Learn React, Author: Jane Smith
// //   Title: Node.js Essentials, Author: Alice Brown

let qoute_auth = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "-Nelson Mandela",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "-Oscar Wilde",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: " -Walt Disney",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "-Eleanor Roosevelt",
  },
  {
    quote: "Do one thing every day that scares you.",
    author: "-Eleanor Roosevelt",
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "-James Cameron",
  },
];

let body_1 = document.getElementsByTagName("body");
console.log(body_1);
console.log(typeof body_1);
let element_1 = document.createElement("div");
element_1.textContent = "zohaib";
body_1[0].appendChild(element_1);

function randomQuoteGenerator() {
  element_1.replaceWith(element_1);
  let randNum = Math.floor(Math.random() * qoute_auth.length);
  console.log(qoute_auth[randNum]);
  element_1.innerHTML =
    qoute_auth[randNum].quote + <p>${qoute_auth[randNum].author}</p>;
}

randomQuoteGenerator();
