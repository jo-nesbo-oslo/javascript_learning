// 5. Case-Sensitive Matching
let regex = /\bhello\b/i;
console.log(regex.test("Hello world")); 
console.log(regex.test("hello-world")); 
console.log(regex.test("helloworld")); 
