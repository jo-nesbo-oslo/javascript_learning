// 1. Matching Whole Words
let regex = /\bcats\b/;
let str1 = "cats are cute";
let str2 = "concatsenate";
console.log(regex.test(str1)); 
console.log(regex.test(str2)); 
