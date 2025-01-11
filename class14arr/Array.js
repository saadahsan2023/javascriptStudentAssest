let quotes = [
  "We cannot solve problems with the kind of thinking we employed when we came up with them1.",
  "We cannot solve problems with the kind of thinking we employed when we came up with them2.",
  "We cannot solve problems with the kind of thinking we employed when we came up with them3.",
  "We cannot solve problems with the kind of thinking we employed when we came up with them4.",
  "We cannot solve problems with the kind of thinking we employed when we came up with them5.",
  "We cannot solve problems with the kind of thinking we employed when we came up with them6",
  "We cannot solve problems with the kind of thinking we employed when we came up with them.7",
];

function randomquotes() {
  let randomNum = Math.floor(Math.random() * quotes.length);

  console.log(`My Quote ${quotes[randomNum]}`);
}
randomquotes();
