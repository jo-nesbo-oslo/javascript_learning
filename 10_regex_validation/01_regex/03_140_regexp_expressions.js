// 4. Validating Email Addresses

let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(regex.test("user@example.com"));
console.log(regex.test("user.1@example.com"));
console.log(regex.test("user_1@example.com"));
console.log(regex.test("user.1.2@example.com"));
console.log(regex.test("user+1@example.com"));
console.log(regex.test("user%1@example.com"));
console.log(regex.test("user-1@example.com"));
console.log(regex.test("user.1@example.co.za"));

console.log(regex.test("user.1@example.c"));
console.log(regex.test("invalid_email@"));   


