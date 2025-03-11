// 
let str = "a1234g5g5";
let regex = /\D/g;
let match = str.match(regex);

console.log("Found " + match.length + " matches: " + match);
