//  Example 2: Replaces the word ‘ee’ with ‘EE’. 

let str = "GeeKY@128";
let regex = new RegExp("e+", "gi");
let replace = "EE";
let match = str.replace(regex, replace);
console.log(" New string: " + match);

