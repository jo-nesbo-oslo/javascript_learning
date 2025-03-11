// 3. Replacing All Matches
let str = "foo bar foo baz foo";
let regex = /foo/g;
let result = str.replace(regex, "qux");
console.log(result); 
