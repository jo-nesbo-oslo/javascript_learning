// 
let str = "GeeksforGeeks@_123_G$";
let regex = /ke*/gi;
let match = str.match(regex);

console.log("Found " + match.length
    + " matches: " + match);

