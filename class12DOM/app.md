Window(
DOM(Document Object Model)
BOM(Browser Object Model )
)

1. DOM Kya Hai ?
2. DOM Ki Importance
3. DOM Ka Structure

Document Node: Sabse upar root node hoti hai.
Element Nodes: HTML tags jaise <div>, <h1>.
Attribute Nodes: Attributes jaise id, class.
Text Nodes: HTML tags ke andar ka text content

DOM Selectors

document.getElementById()

HTML DOM Vs JS DOM

const heading = document.getElementById('heading'); Static (html DOM)
heading.textContent = "Hello, Students!" Dynamic ((JS DOM))

document.querySelector(.) id Class selector

const paragraph = document.querySelector('.intro');
paragraph.style.color = "blue";

document.querySelectorAll()

const allParagraphs = document.querySelectorAll('p');
allParagraphs.forEach(p => p.style.fontSize = "18px");

DOM Manipulation
Inner Content Change

const div = document.querySelector('#myDiv');
div.textContent = "New Text!";
div.innerHTML = "<strong>Bold Text!</strong>";
Style Change

const box = document.querySelector('.box');
box.style.backgroundColor = "yellow";
box.style.border = "2px solid black";

Attributes Manipulation

const link = document.querySelector('a');
link.setAttribute('href', 'https://google.com');

link.removeAttribute('target');

{/_ Event Listeners Next _/}

{/_ DOM Navigation _/}

Find Parent Node
const child = document.querySelector('#child');
const parent = child.parentNode;

Find Children Nodes
const parent = document.querySelector('#parent');
const children = parent.children; // HTMLCollection
Siblings
const item = document.querySelector('.item');
const nextItem = item.nextElementSibling;



DOM Properties 

Properties woh hoti hain jo kisi element ka current state ya value ko define karti hain. Inhe directly access aur set kiya ja sakta hai.
Examples of Properties:


innerHTML
outerHTML
textContent
innerText
id
className
classList
style
attributes
childNodes
firstChild
lastChild
parentNode
nextSibling
previousSibling
nodeName
nodeType
tagName

DOM Methods
Methods woh hote hain jo DOM ke elements ke saath koi action ya manipulation karte hain. Yeh ek function ki tarah kaam karte hain.

Examples of Methods:

getElementById()
querySelector()
querySelectorAll()
createElement()
appendChild()
removeChild()
replaceChild()
cloneNode()
insertBefore()
addEventListener()
removeEventListener()
getAttribute()
setAttribute()
removeAttribute()

{/_ For Example _/}



{/_ Properties _/}
const element = document.getElementById('demo');
console.log(element.textContent); // Property








{/_ Methods _/}
const element = document.createElement('div'); // Method
document.body.appendChild(element); // Method
