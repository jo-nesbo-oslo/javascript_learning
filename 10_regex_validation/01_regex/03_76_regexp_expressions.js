// 1. Matching Inside Words
let regex = /\Bcat\B/;
let str1 = "concatenate";
let str2 = "catapult";
console.log(regex.test(str1)); 
console.log(regex.test(str2)); 
