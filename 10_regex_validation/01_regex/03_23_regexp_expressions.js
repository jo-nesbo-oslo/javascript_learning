// 1. Matching Non-Specified Characters
let regex = /[^aeiou]/g; 
// Matches all non-vowel characters
let str = "hello world";
let matches = str.match(regex);
console.log(matches); 
