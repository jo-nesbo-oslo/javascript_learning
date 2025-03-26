// Example 1: Matching the words ‘Geeks’ not followed by 123 in the whole string. 

let str = "Geeks for 123 Geeks@";
let regex = /Geeks(?!123)/g;
let match = str.match(regex);

console.log("Found " + match.length
    + " matches: " + match);


