// Example 1: Matching the presence of the word between [a-g] of length 3 to 4 in the whole string. 

let str = "GeeksforGeeeeks@_123_$";
let regex = /[a-g]{3,4}/gi;
let match = str.match(regex);

console.log("Found " + match.length
    + " matches: " + match);


