// Example 2: Replacing the word ‘128’ with ‘#’ symbol.

let str = "@128Geek128";
let regex = new RegExp("128(?!ee)", "gi");
let replace = "#";
let match = str.replace(regex, replace);
console.log("New string: " + match);


