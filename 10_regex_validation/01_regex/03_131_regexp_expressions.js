// Example 1: Matches the presence of the character ‘e’ at least 1 times in the whole string. 

let str = "GeeksforGeeeks e@_123_$";
let regex = /e{1,}/gi;
let match = str.match(regex);

console.log("Found " + match.length
    + " matches: " + match);


