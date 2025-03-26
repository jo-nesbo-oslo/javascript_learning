// Note: Since compile() is deprecated, you should replace it by creating a new RegExp object 
// when you need to modify the pattern or flags.

let regex = /hello/i;
console.log(regex.test("Hello World!"));

regex.compile("world", "g"); 
console.log(regex.test("Hello World!"));
console.log(regex.test("world world!"));

// The modern way
let regexModern = /hello/i;
console.log(regexModern.test("Hello World!"));

// Instead of using the deprecated `compile()` method:
regexModern = new RegExp("world", "g"); 
console.log(regexModern.test("Hello World!"));
console.log(regexModern.test("world world!"));


