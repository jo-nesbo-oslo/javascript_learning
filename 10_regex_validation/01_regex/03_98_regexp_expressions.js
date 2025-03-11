// 2. Replacing Carriage Returns
let regex = /\r/g;
let str = "Hello\rWorld";
let result = str.replace(regex, "");
console.log(result); 
