// 1. Matching at the Start of a String

let regex = /^abc/;
console.log(regex.test("abc123"));
console.log(regex.test("abc123".toUpperCase()));
console.log(regex.test("123abc"));


