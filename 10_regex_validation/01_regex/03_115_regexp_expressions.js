// Example 1: Matches the zero or more occurrences of the word ‘e’ in the whole string. 

let str = "GeeksforGeeks@_123_G$";
let regex = /Ge*/gi;
let match = str.match(regex);

console.log("Found " + match.length
    + " matches: " + match);

