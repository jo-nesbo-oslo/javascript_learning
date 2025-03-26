// 

let pat = "hello";
let regex = new RegExp(pat, "i");
let res = regex.test("Hello, world!");

console.log(res);
