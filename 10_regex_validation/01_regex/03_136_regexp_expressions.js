// 

let regex = /^hello/;
let str1 = "hello world";
let str2 = "world hello";
console.log(regex.test(str1)); 
console.log(regex.test(str1.toUpperCase())); 
console.log(regex.test(str2)); 
