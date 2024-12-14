_JavaScript Control Structures_

1. Control structures programming mein is liye hoti hain taki hum apne code ke flow ko control kar saken.
2. Agar kisi condition ke mutabiq kaam karwana ho, to hum if-else aur switch-case use karte hain.



_Step 1: What is if-else ?_

if-else ek aisi control structure hai jo kisi condition ke mutabiq code execute karti hai.

if(condition) {
// Jab condition true ho to yeh code chalega
}
else {
// Jab condition false ho to yeh code chalega
}

let age = 18;
if (age >= 18) {
console.log("Aap vote dene ke liye eligible hain.")
} else {
console.log("Aap vote dene ke liye eligible nahi hain.")
}

_Step 2: Adding More Conditions with if-else if-else_

Agar ek se zyada conditions check karni ho, to hum if-else if-else use karte hain.

if (condition1) {

} else if (condition2) {

} else {
// Jab koi bhi condition true na ho
}

let marks = 85;

if (marks >= 90) {
console.log("Grade: A"); // Jab marks 90 ya us se zyada hon
} else if (marks >= 75) {
console.log("Grade: B"); // Jab marks 75 ya us se zyada hon
} else if (marks >= 50) {
console.log("Grade: C"); // Jab marks 50 ya us se zyada hon
} else {
console.log("Grade: F"); // Jab marks 50 se kam hon
}

_Step 3: Nested if_
Jab ek if ke andar doosri if lagani ho, to nested if ka use hota hai.

if (condition1) {
if (condition2) {
// Jab dono conditions true hon
}
}

let number = 10;

if (number > 0) {
if (number % 2 === 0) {
console.log("Yeh number positive aur even hai."); // Dono conditions true hain
}
}

_Step 4: What is switch-case?_

switch-case ka use tab hota hai jab ek variable ke mutabiq multiple options handle karne hon.

switch (expression) {
case value1:
// Jab expression value1 ke equal ho
break;
case value2:
// Jab expression value2 ke equal ho
break;
default:
// Jab koi bhi case match na kare
}

let day = 3;

switch (day) {
case 1:
console.log("Monday");
break;
case 2:
console.log("Tuesday");
break;
case 3:
console.log("Wednesday");
break;
default:
console.log("Invalid day");
}

_Step 5: Comparing if-else and switch-case_

_Feature if-else switch-case_
Condition Handles logical conditions; Handles fixed values
Best Use Case For complex logic For discrete options
Fall-through No Yes, unless you use break
