//2. Counting Word Occurrences
let str = "apple orange apple banana apple";
let regex = /apple/g;
let count = (str.match(regex) || []).length;
console.log(count); 
