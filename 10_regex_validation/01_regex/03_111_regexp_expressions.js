// 
let str = "GeeksforGeeks@_123_$";
let regex = /G+/gi;
let match = str.match(regex);

console.log("Found " + match.length + " matches: " + match);

