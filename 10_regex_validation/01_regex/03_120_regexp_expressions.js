// 3. Matching Optional Digits

let regex = /\d{3}-?\d{4}/;
console.log(regex.test("123-4567")); 
console.log(regex.test("1234567")); 
console.log(regex.test("123--4567")); 


