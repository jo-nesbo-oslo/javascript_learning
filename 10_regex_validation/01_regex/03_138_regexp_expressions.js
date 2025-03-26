// 2. Validating Input

let regex = /^[A-Za-z0-9_]+$/;
console.log(regex.test("Valid123")); 
console.log(regex.test("123Valid"));  
console.log(regex.test("Invalid@")); 


