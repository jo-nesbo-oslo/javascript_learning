// 
let str = "Geeky@128";
let regex = new RegExp("\\S", "g");

let match = str.match(regex);

console.log(match);
