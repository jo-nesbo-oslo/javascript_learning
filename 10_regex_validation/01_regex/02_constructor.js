let pattern = "hello";  // Pattern to match
let flags = "i";  // Case-insensitive flag
let regex = new RegExp(pattern, flags);

let s = "Hello world";

console.log(regex.test(s));
