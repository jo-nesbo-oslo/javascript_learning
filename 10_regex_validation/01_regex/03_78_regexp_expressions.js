// 3. Highlighting Non-Boundary Matches
let regex = /\Bis\B/g;
let str = "This island is beautiful.";
let matches = str.match(regex);
console.log(matches);
