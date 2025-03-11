// 2. Restricting Prefix or Suffix Matches
let regex = /\Bing/;
let str1 = "running";
let str2 = "ing";
console.log(regex.test(str1)); 
console.log(regex.test(str2)); 
