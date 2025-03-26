// Handling Dynamic Content

let regex = /\d+/;
let inp = "123abc";

regex.compile(inp, "i");
console.log(regex.test("123abc"));

