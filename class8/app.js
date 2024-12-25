let arr = ["red", "green", "blue"];

// function name(){

// }
// const name = ()=>{

// }

// arr.forEach((item, index, array) => {

//   console.log(item, index, array);
// });
const cartItems = [
  { id: 1, name: "Apple", price: 60 },
  { id: 2, name: "Banana", price: 20 },
  { id: 3, name: "Orange", price: 40 },
  { id: 3, name: "Orange", price: 40 },
  { id: 3, name: "Orange", price: 40 },
  { id: 3, name: "Orange", price: 40 },
];

const discountCartItems = cartItems.map((item) => {
  //  spread ope
  const data = { ...item, price: item.price - item.price * 0.00002 };
  return data;
});

discountCartItems.forEach((item) => {
  console.log(`${item.name}:${item.price.toFixed()}`);
});

// BOM
// DOM

// student {}
// education  {}

// user1 = {...student,...education}

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let total = [...arr1, ...arr2];
console.log(total);
