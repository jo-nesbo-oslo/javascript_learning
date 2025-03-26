// 2. Email Validation

let mail = "user@domain.com";
let pat = new RegExp("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}", "i");
console.log(pat.test(mail));

