// 4. Removing Characters Within Words
let str = "hello1world2";
let regex = /\B\d\B/g;
let result = str.replace(regex, "");
console.log(result);
