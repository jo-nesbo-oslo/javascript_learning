// Example 1: Matches the presence of the word ‘ee’ in the whole string. 

let str = "GeeksforGeeks@_123_$";
let regex = /e{2}/gi;
let match = str.match(regex);

console.log("Found " + match.length + " matches: " + match);


