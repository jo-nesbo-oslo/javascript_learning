// 

let str = "Geeksforh\nGeeks@_h";
let regex = /h$/gim;
let match = str.match(regex);

console.log("Found " + match.length + " matches: " + match);
