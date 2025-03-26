// 5. Resetting on No Match

let regex = /abc/g;
let str = "abc def";

regex.lastIndex = 4;
 // Start at index 4
console.log(regex.exec(str)); 
console.log(regex.lastIndex);


