// 2. Matching the End of Any Line
let regex = /fine$/m;
let str = "info: everything is fine\nerror: something went wrong";
let match = str.match(regex);
console.log(match); 
