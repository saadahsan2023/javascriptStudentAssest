_Introduction to Loops_

In programming, loops are used to repeat a block of code multiple times. This is useful when you want to perform the same task without writing the same code repeatedly.

_In JavaScript, we have different types of loops:_

1)for loop
2)while loop
3)do-while loop
4)for...in loop
5)for...of loop

_Step 1: What is a Loop ?_
A loop repeats a block of code as long as a specified condition is true.

_------------------------------START-FOR-LOOP--------------------------------------_
_Step 2: The for Loop_
The for loop is the most commonly used loop. It repeats a block of code a specific number of times.

for (initialization; condition; increment/decrement) {
// Code to be repeated
}
Initialization: This runs once before the loop starts (e.g., let i = 0).
Condition: The loop runs as long as this condition is true.
Increment/Decrement: This updates the loop variable after every iteration.

for (let i = 1; i <= 5; i++) {
console.log("This is iteration number " + i);
}
_------------------------------END-FOR-LOOP--------------------------------------_

_------------------------------START-WHILE-LOOP--------------------------------------_

Step 3: The while Loop
The while loop repeats a block of code as long as the condition is true.

while (condition) {
// Code to be repeated
}
_EXAMPLE_

let i = 1;
while (i <= 5) {
console.log("This is iteration number " + i);
i++; // Increment the variable to avoid an infinite loop
}
_------------------------------END-WHILE-LOOP--------------------------------------_

_------------------------------START-D0-WHILE-LOOP--------------------------------------_

Step 4: The do-while Loop
The do-while loop is similar to the while loop, but it always executes the block of code at least once, even if the condition is false.

do {
// Code to be repeated
} while (condition);

_EXAMPLE_
let i = 1;
do {
console.log("This is iteration number " + i);
i++;
} while (i <= 5);
_------------------------------END-D0-WHILE-LOOP--------------------------------------_
_------------------------------START-FOR-IN-LOOP--------------------------------------_

Step 5: The for...in Loop
The for...in loop is used to iterate over the properties of an object.

for (key in object) {
// Code to be executed for each property
}

_EXAMPLE_
let student = { name: "Ali", age: 16, grade: "A" };

for (let key in student) {
console.log(key + ": " + student[key]);
}

<!-- name: Ali
age: 16
grade: A
 -->

_------------------------------END-FOR-IN-LOOP--------------------------------------_
_------------------------------START-FOR-OF-LOOP--------------------------------------_
Step 6: The for...of Loop
The for...of loop is used to iterate over iterable objects like arrays or strings.
for (element of iterable) {
// Code to be executed for each element
}
_EXAMPLE_
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
console.log(fruit);
}

_------------------------------START-FOR-IN-LOOP--------------------------------------_

Step 7: Break and Continue in Loops
break: Exits the loop immediately.
continue: Skips the current iteration and moves to the next one.
EXAMPLE OF BREAK:
for (let i = 1; i <= 5; i++) {
if (i === 3) {
break; // Exit the loop when i equals 3
}
console.log(i);
}
EXAMPLE OF CONTINUE
for (let i = 1; i <= 5; i++) {
if (i === 3) {
continue; // Skip the iteration when i equals 3
}
console.log(i);
}

_Practice Problems_
Problem 1: Print Numbers from 1 to 10 (Using for Loop)
Problem 2: Print Multiplication Table of 5 (Using while Loop)
Problem 3: Calculate Sum of an Array (Using for...of Loop)

Step 9: Zoom Class Activities With Student
Activity 1: Write a program to print even numbers between 1 and 20 using a for loop.
Activity 2: Write a program to calculate the factorial of a number using a while loop.
Activity 3: Create an object with properties (e.g., name, class, roll number) and use a for...in loop to display all the properties.
