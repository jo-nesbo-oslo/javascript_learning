// Example 1: Matches the non-whitespace characters. 
let str = "GeeksforGeeks @ _123_ $";
let regex = /\S/g;
let match = str.match(regex);

console.log(match);
