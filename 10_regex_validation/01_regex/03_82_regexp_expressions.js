// Example 1: Searches for the Null character in the string.  
let str = "GeeksforGeeks@_123_$";
let regex = /\0/;
let match = str.search(regex);
if (match == -1) {
    console.log("No Null characters present. ");
}
else {
    console.log("Index of Null character: " + match);
}
