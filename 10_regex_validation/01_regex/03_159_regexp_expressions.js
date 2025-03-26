// 4. Testing Without Resetting

let regex = /foo/g;
let str = "foo bar foo";

regex.test(str);
 // Finds the first "foo"
console.log(regex.lastIndex);

regex.test(str);
 // Finds the second "foo"
console.log(regex.lastIndex); 


