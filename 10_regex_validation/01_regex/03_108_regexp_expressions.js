// Example 2: Searches the position of the vertical tab character in the string. 
let str = "123ge\veky456";
let regex = new RegExp("\\v");
let match = str.search(regex);
console.log(" Index of vertical tab character: "+ match);
