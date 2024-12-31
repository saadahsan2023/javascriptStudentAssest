// DOM
// let container = document.getElementById("container");
// let btn = document.querySelectorAll("button");

// let body = document.querySelector("body");
// Node List location zaror batao (Address)
// HTML Collection
// convert into Array you can apply easily applay map filter etc

// Array[]

// btn[0].onclick = function () {
//   document.body.style.backgroundColor = "red";
//   document.body.style.transition = "1s";
// };

// btn[0].addEventListener("mouseover", () => {
//   document.body.style.backgroundColor = "red";
//   document.body.style.transition = "1s";
// });

// btn[0].addEventListener("mouseleave", () => {
//   body.style.backgroundColor = "black";
//   document.body.style.transition = "1s";
// });

// btn[1].addEventListener("mouseover", () => {
//   document.body.style.backgroundColor = "green";
//   document.body.style.transition = "1s";
// });

// btn[1].addEventListener("mouseleave", () => {
//   body.style.backgroundColor = "#ffff";
//   document.body.style.transition = "1s";
// });

// btn[2].addEventListener("mouseover", () => {
//   document.body.style.backgroundColor = "blue";
//   document.body.style.transition = "1s";
// });
// btn[3].addEventListener("mouseover", () => {
//   document.body.style.backgroundColor = "orange";
//   document.body.style.transition = "1s";
// });

const ul = document.createElement("ul");

for (let i = 1; i <= 30; i++) {
  const li = document.createElement("li");
  li.textContent = `Item${i}`;

  li.addEventListener("click", () => {
    alert(li.textContent);
  });



  ul.appendChild(li);
}

document.body.appendChild(ul);
