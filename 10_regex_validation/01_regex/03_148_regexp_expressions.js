// 3. Extracting Substrings

let s = "The price is $100.";
let regex = new RegExp("\\$\\d+", "g");
console.log(s.match(regex));

