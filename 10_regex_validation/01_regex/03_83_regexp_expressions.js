// Example 2: Searches the position of the NULL character in the string. 
let str = "123ge\0eky456";
let regex = new RegExp("\\0");
let match = str.search(regex);
console.log(" Index of NULL character: " + match);
