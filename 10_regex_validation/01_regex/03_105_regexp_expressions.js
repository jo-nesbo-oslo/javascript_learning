//  Example 2: Searches the position of the tab character in the string. 
let str = "123ge\teky456";
let regex= new RegExp("\\t");
let match = str.search(regex);

console.log(" Index of tab character: " + match);
