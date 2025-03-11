// 3. Using Alternation with Complex Patterns
let regex = /(Mr\.|Mrs\.|Ms\.)\s[A-Z][a-z]+/g;
let str = "Mr. Smith and Mrs. Johnson are here.";
let matches = str.match(regex);
console.log(matches); 
