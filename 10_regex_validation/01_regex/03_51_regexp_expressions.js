// 1. Matching Non-Word Characters
let regex = /\W/g;
let str = "hello_world!123";
let matches = str.match(regex);
console.log(matches); 
