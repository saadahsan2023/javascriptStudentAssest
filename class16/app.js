// JavaScript Events

// Common Types of Events
// Mouse Events:
// Keyboard Events:
// Form Events:
// Window/Document Events:

// Event Handling in JavaScript

// 1. Inline Event Handler
{/* <button onclick="alert('Button clicked!')">Click Me</button> */ }



// let btn = document.getElementById("btn")
// btn.onclick = function () {
//     console.log("data");


// }
// btn.onclick = function () {
//     console.log("Again data");
// }



// Always Use Event listner

// btn.addEventListener("click", () => {
//     btn.remove()
//     console.log("dekho me nhi aon ga ab");
// })




// Event Object
// Jab koi event fire hota hai, to ek object(event object) browser create karta hai jo event ke baare mein details rakhta hai.



// let inputdata = document.getElementById('inputdata')
// let heading = document.getElementById("heading")




// inputdata.addEventListener("input", (event) => {
//     heading.innerText = event.target.value
// })





// let parent = document.getElementById('parent')
// let child = document.getElementById('child')
// let grandchild = document.getElementById('grandchild')

// parent.addEventListener('click', function () {



//     console.log("i am parent");
// }, true)


// child.addEventListener('click', function () {
//     console.log("i am child");
// }, true)


// grandchild.addEventListener('click',function(laiba){
//     // event.stopPropagation()
//     console.log(laiba.target.value);

//     // console.log("i am grandchild");

// })





// let nameData = document.getElementById('name')
// let heading = document.getElementById('heading')
// nameData.addEventListener('input', (event) => {
// heading.innerText =  event.target.value



// })








// Bubbling false (default)
// child to parent
// capturing true
// parent to child












