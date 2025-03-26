// 3. Case-Insensitive Replacements

let s = "Hello, hello, HELLO!";
let regex = /hello/gi;

let result = s.replace(regex, "hi");
console.log(result); 

