// Dynamic Pattern Updates

let regex = /test/i;
console.log(regex.test("Test case"));

let inp = "hello";
regex.compile(inp, "gi");
console.log(regex.test("Hello hello world"));

