// 5. Excluding Ranges
let regex = /[^0-9]/g; 
// Matches all non-digit characters
let str = "abc123xyz";
let matches = str.match(regex);
console.log(matches); 
