// 3. Matching Specific Lines (Multiline Mode)

let regex = /^hello/m;
let str = `hello world
world hello`;
console.log(str.match(regex));


