// 3. Counting Non-Word Characters
let regex = /\W/g;
let str = "Goodbye, cruel world!";
let count = (str.match(regex) || []).length;
console.log(count); 
