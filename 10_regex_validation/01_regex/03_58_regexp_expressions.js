// 
let str = "Geeky@128";
let regex = new RegExp("\\D", "g");
let match = str.match(regex);

console.log("Found " + match.length
    + " matches: " + match);
