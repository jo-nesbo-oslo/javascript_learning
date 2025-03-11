//1. Detecting Carriage Return
let regex = /\r/;
let str = "Line1\rLine2";
if (regex.test(str)) {
    console.log("Carriage return found.");
} else {
    console.log("No carriage return found.");
}
