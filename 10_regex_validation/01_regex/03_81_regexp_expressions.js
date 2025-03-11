// 
let str = "Geeksfo\0rGeeks@_123_$";
let regex = /\0/;
let match = str.search(regex);
if (match == -1) {
    console.log("No Null characters present. ");
}
else {
    console.log("Index of Null character: " + match);
}
