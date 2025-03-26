// 

let regex = /test/g;
// Regular expression with 'g' flag
let str = "test test";
regex.exec(str); 
console.log(regex.lastIndex); 
regex.exec(str); 
console.log(regex.lastIndex); 
