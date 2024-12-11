// DataType In Javascript
// Primitive :> immutable
// (cannot be altered after creation)

// Non-primitive :>These are mutable,
// meaning their values can be changed.

// let x = 10;
// let z = x;
// z = 20;
// console.log(x);

// console.log(z);

let name = { name: "Ahsan" };
let anotherName = name;
anotherName.name = "ALi"

console.log(anotherName);
console.log(name);

