// 

let str = "GeeksforGeeeks e@_123_$";
let regex = /k{1,}/gi;
let match = str.match(regex);

console.log("Found " + match.length
    + " matches: " + match);
