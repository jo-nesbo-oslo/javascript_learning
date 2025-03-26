// 4. Making a Case-Insensitive Match

let regex = /[A-Z]?pple/i;
console.log(regex.test("Apple"));
console.log(regex.test("pple"));   
console.log(regex.test("aPple"));


