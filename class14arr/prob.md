1. Search for a Product
   You are building an e-commerce website. Given an array of product names, write a function to search for a specific product. If the product exists, return its index; otherwise, return -1.

let products = ["Laptop", "Phone", "Tablet", "Headphones"];
let searchProduct = "Phone";

###function searchForProduct(products, searchProduct) {
let index = products.indexOf(searchProduct);
return index; // Returns the index if found, otherwise -1
}

let products = ["Laptop", "Phone", "Tablet", "Headphones"];
let searchProduct = "Phone";

let result = searchForProduct(products, searchProduct);
console.log(result); // Output: 1###

2. Filter Students by Marks
   You have an array of student objects with names and marks. Write a function to filter out students who scored more than 50 marks.

let students = [
{ name: "Ali", marks: 40 },
{ name: "Ayesha", marks: 60 },
{ name: "Bilal", marks: 30 },
{ name: "Sarah", marks: 70 },
];

const result = students.filter((marks) => {
return marks.marks > 50;
});

console.log(result);

3. NOT Find the Most Frequent Item
   Given an array of items, find the item that occurs most frequently. If there is a tie, return any one of them.
   let items = ["apple", "banana", "apple", "orange", "banana", "apple"];

function findMostFrequentItem(items) {
let frequencyMap = {};
let maxFrequency = 0;
let mostFrequentItem = null;

    // Count the frequency of each item
    for (let item of items) {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;

        // Update most frequent item if necessary
        if (frequencyMap[item] > maxFrequency) {
            maxFrequency = frequencyMap[item];
            mostFrequentItem = item;
        }
    }

    return mostFrequentItem;

}

let items = ["apple", "banana", "apple", "orange", "banana", "apple"];
let result = findMostFrequentItem(items);
console.log(result); // Output: "apple"

4. Flatten a Nested Array
   Write a function to flatten a nested array into a single array.
   let nestedArray = [[1, 2], [3, 4], [5, [6, 7]]];

   function flattenArray(nestedArray) {
   return nestedArray.flat(Infinity);
   }

let nestedArray = [[1, 2], [3, 4], [5, [6, 7]]];
let flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7]

5. Generate a Leaderboard
   Given an array of player scores, write a function to sort the players by their scores in descending order and return the leaderboard.
   let players = [
   { name: "Ali", score: 50 },
   { name: "Ayesha", score: 70 },
   { name: "Bilal", score: 30 },
   { name: "Sarah", score: 60 }
   ];

function generateLeaderboard(players) {
// Sort the players by score in descending order
players.sort((a, b) => b.score - a.score);

    // Return the sorted array
    return players;

}

let players = [
{ name: "Ali", score: 50 },
{ name: "Ayesha", score: 70 },
{ name: "Bilal", score: 30 },
{ name: "Sarah", score: 60 }
];

let leaderboard = generateLeaderboard(players);
console.log(leaderboard);

// Output:
// [
// { name: 'Ayesha', score: 70 },
// { name: 'Sarah', score: 60 },
// { name: 'Ali', score: 50 },
// { name: 'Bilal', score: 30 }
// ]

sort() JavaScript ki built-in method hai jo ek array ko in-place, ascending ya descending order mein sort karne ke liye use hoti hai. Iska default behavior array ko lexicographical order (alphabetically or numerically) mein sort karna hota hai.

let numbers = [10, 1, 5, 30, 3];
numbers.sort();
console.log(numbers); // Output: [1, 10, 03, 30, 5] (yeh string ke hisaab se sorted hota hai)
