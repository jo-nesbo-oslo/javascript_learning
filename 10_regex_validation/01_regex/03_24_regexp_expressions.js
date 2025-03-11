// 2. Excluding Specific Digits
let regex = /[^123]/g;
let str = "123456789";
let matches = str.match(regex);
console.log(matches); 
