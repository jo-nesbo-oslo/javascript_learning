// Example 1: Matches the presence of the word ‘e’ in the whole string. 

let str = "GeeksforGeeks@_123_$";
let regex = /e+/gi;
let match = str.match(regex);

console.log("Found " + match.length + " matches: " + match);

