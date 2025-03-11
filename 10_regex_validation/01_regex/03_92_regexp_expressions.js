// 2. Removing Form Feeds
let str = "Text with form feed\fcharacter.";
let cleanedStr = str.replace(/\f/g, "");
console.log(cleanedStr);
