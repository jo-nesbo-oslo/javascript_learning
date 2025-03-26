// Example 1: Matches the presence of the word ‘123’ at the end of the string. 

let str = "Geeksfor123\nGeeks@_123";
let regex = /123$/gim;
let match = str.match(regex);

console.log("Found " + match.length+ " matches: " + match);


