// 5. Case-Insensitive Global Search
let regex = /hello/gi;
let str = "Hello, HELLO, hello";
let matches = str.match(regex);
console.log(matches); 
