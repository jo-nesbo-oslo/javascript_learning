// 3. Removing Extra Whitespace
let str = "   Remove   extra   spaces   ";
let regex = /\s+/g;
console.log(str.trim().replace(regex, " ")); 
