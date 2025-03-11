// 
let str = "128@$%";
let replacement = "#";
let regex = new RegExp("[^0-9]", "g");
let match = str.replace(regex, replacement);

console.log("Found " + match.length
    + " matches: " + match);
