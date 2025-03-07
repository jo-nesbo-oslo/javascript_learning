// The /i flag makes the pattern case-insensitive
const patt = /Geeks/i; 
const s1 = "geeksforgeeks";
const s2 = "forgeeks";

console.log(patt.test(s1));
console.log(patt.test(s2));
