// Example 2: This example replaces the word ‘K’ with ‘@’. 

let str = "@128GeeeeK";
let regex = new RegExp("K$", "gi");
let replace = "@";
let match = str.replace(regex, replace);
console.log(" New string: " + match);


