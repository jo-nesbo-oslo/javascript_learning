// Example 2: Replaces the word containing at least 2 ‘e’ with ‘$’ character. 

let str = "ee@128GeeeeK";
let regex = new RegExp("e{2,}", "gi");
let replace = "$";
let match = str.replace(regex, replace);
console.log(" New string: " + match);


