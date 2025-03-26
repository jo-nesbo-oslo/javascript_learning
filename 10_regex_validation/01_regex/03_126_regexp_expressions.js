// Example 2: Replaces the word ‘ee’ with the character ‘E’. 

let str = "ee@128GeeeeK";
let regex = new RegExp("e{2}", "gi");
let replace = "E";
let match = str.replace(regex, replace);
console.log(" New string: " + match);


