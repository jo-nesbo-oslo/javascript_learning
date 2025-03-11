// 2. Matching Case-Insensitive Substrings
let regex = /error/i;

console.log("Error found!".match(regex));
console.log("no ERROR here".match(regex));
