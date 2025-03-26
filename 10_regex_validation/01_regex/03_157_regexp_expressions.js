// 2. Using lastIndex with Sticky Regex

let regex = /\d+/y; 
// Sticky regex
let str = "123 456";
regex.lastIndex = 4; 
// Start search from index 4
console.log(regex.exec(str));
console.log(regex.lastIndex);


