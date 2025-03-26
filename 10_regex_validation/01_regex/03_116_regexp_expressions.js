// Example 2: Replaces the occurrence of 128* with the word “Geeky”. 

let str = "GEEK@128";
let regex = new RegExp("128*", "gi");
let replace = "Geeky";
console.log(str.replace(regex, replace));


