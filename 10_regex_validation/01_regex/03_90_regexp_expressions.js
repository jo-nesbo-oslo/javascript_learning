//
let regex = /\f/;
let str1 = "Hello\fWorld";
let str2 = "Hello World";
console.log(regex.test(str1)); 
console.log(regex.test(str2)); 
