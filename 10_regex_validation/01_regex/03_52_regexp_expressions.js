// 2. Removing Non-Word Characters
let regex = /\W/g;
let str = "Hello, World! 123";
let result = str.replace(regex, "");
console.log(result); 
