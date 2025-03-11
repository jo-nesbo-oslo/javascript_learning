// Example 2: Matches the non-whitespace strings. 
const regex = /\S+/g;
const str = "Hello World!   This is JavaScript";
const matches = str.match(regex);
console.log(matches);
