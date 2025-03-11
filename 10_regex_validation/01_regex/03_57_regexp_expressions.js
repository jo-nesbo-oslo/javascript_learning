// 
let str = "GeeksforGeeks@_123_$";
let regex = /\D/g;
let match = str.match(regex);

console.log("Found " + match.length + " matches: " + match);
