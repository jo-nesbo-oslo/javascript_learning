// 1. Detecting a Newline
let regex = /\n/;
let str = "Line 1\nLine 2";
if (regex.test(str)) {
    console.log("Newline detected!");
} else {
    console.log("No newline found.");
}
