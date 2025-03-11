// 3. Filtering Out Specific Characters
let regex = /[^a-zA-Z]/g; 
// Matches all non-alphabetic characters
let str = "Code123!";
let result = str.replace(regex, "");
console.log(result); 
