// 
let str = "123456790";
let regex = /[^0-4]/g;
let match = str.match(regex);

console.log("Found " + match.length
    + " matches: " + match);
