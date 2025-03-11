// 4. Splitting Text with Carriage Returns
let regex = /\r/;
let str = "Line1\rLine2\rLine3";
let parts = str.split(regex);
console.log(parts); 
