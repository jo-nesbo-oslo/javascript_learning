// Example 2: This example replaces the word ‘ee’ or ‘eee’ with ‘$’. 

let str = "ee@128GeeeeK";
let regex = new RegExp("e{2,3}", "gi");
let replace = "$";
let match = str.replace(regex, replace);
console.log(" New string: " + match);


