let para = document.querySelector("p");
function getData() {
  let value1 = +prompt("Enter Value 1");
  let value2 = +prompt("Enter Value 2");
  let total = value1 + value2;
  para.innerText = total;
 
}
