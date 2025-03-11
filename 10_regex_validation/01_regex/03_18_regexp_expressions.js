// 5. Removing Blank Lines
let regex = /^\s*$/gm;
let str = "line1\n\nline2\n\n";
let cleaned = str.replace(regex, "");
console.log(cleaned); 
