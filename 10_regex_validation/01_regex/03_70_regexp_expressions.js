// 2. Finding Words at the Start or End
let regexStart = /\bstart/;
let regexEnd = /end\b/;

console.log(regexStart.test("start of the sentence")); 
console.log(regexEnd.test("the sentence ends here")); 
