// 3. Manually Resetting lastIndex

let regex = /hello/g;
let str = "hello world hello";

regex.lastIndex = 6; 
// Start searching from index 6
console.log(regex.exec(str)); 
console.log(regex.lastIndex); 


