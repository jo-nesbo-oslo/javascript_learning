// Example 1: Searches for the vertical tab character in the string. 
let str = "GeeksforGeeks@_123_$";
let regex = /\v/;
let match = str.search(regex);
if (match == -1) {
    console.log("No vertical tab character present. ");
} else {
    console.log("Index of vertical tab character: " + match);
}
