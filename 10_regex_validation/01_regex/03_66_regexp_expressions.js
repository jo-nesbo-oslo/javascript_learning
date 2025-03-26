// Example 1: Matches the non-whitespace characters. 
let str = "GeeksforGeeks @ _\n\t123_\r $";
let regex = /\S/g;
let match = str.match(regex);

console.log(match);
