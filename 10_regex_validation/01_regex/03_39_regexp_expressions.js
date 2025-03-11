// 2. Matching Single Characters
let regex = /(a|e|i|o|u)/g;
// Matches any vowel
let str = "hello world";
let matches = str.match(regex);
console.log(matches); 
