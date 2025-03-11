// 3. Finding All Matches Across Lines
let regex = /^\w+/gm;
let str = "line1\nline2\nline3";
let matches = str.match(regex);
console.log(matches); 
