// Reusing Regular Expressions

let regex = /abc/i;
console.log(regex.test("ABC"));

regex.compile("xyz", "g");
console.log(regex.test("xyz xyz"));

