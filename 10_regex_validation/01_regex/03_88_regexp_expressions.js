// 4. Counting Newlines in a String
let str = "Line 1\nLine 2\nLine 3";
let regex = /\n/g;
let count = (str.match(regex) || []).length;
console.log(count);
