// 5. Highlighting Form Feeds in Text
let str = "First\fSecond\fThird";
let highlighted = str.replace(/\f/g, "[FORM FEED]");
console.log(highlighted);
