// 4. Handling Optional Characters
let regex = /a.b/;
let str = "a_b, acb, aab";
let matches = str.match(regex);
console.log(matches);
