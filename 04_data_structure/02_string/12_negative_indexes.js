let s = "Hello, World!";
let res = s.substring(-5, -1);
/*
Unlike some other methods, substring() treats negative indices as 0. 
It does not count from the end of the string. 
Instead, it converts negative values to 0, meaning the method starts from the beginning of the string.
*/
console.log(res);
