// 

// Matches between 2 and 4 digits
const regex = /\d{2,4}/;
console.log(regex.test("123"));
console.log(regex.test("12345"));
console.log(regex.test("12"));
