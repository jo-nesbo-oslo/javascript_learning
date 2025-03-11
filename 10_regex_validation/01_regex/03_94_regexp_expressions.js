// 4. Splitting Text by Form Feeds
let str = "Page1\fPage2\fPage3";
let pages = str.split(/\f/);
console.log(pages);
