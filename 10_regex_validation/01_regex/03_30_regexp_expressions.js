// 2. Extracting Numbers
let regex = /[0-9]+/g;
// Matches one or more digits
let str = "The order IDs are 123, 456, and 789.";
let matches = str.match(regex);
console.log(matches);
