// 5. Validating Postal Codes

let regex = /\d{5}(-\d{4})?/;
console.log(regex.test("12345"));    
console.log(regex.test("12345-6789")); 
console.log(regex.test("123456789"));  


