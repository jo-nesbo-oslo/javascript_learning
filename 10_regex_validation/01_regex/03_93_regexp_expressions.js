// 3. Counting Form Feeds
let str = "Line 1\fLine 2\fLine 3";
let regex = /\f/g;
let count = (str.match(regex) || []).length;
console.log(count);
