// 5. Normalizing Line Endings
let regex = /\r/g;
let str = "Hello\r\nWorld\r";
let normalized = str.replace(regex, "");
console.log(normalized); 
