// 1. Matching the Start of Any Line
let regex = /^error/m;
let str = "info: everything is fine\nerror: something went wrong\ninfo: all good";
let matches = str.match(regex);
console.log(matches); 
