// 1. Finding Digits in a String
let regex = /[0-9]/g;
let str = "Contact: 555-123-4567";
let matches = str.match(regex);
console.log(matches);
