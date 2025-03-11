// 3. Handling Windows-Style Newlines
let regex = /\r\n/g;
let str = "Line1\r\nLine2";
let result = str.replace(regex, "\n");
console.log(result); 
