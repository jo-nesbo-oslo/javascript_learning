// 2. Retrieving Matches from Multi-Line Text

let s = "error: 404\nsuccess: 200\nerror: 500";
let regex = /^error: \d+$/gm;

let matches = s.match(regex);
console.log(matches);


