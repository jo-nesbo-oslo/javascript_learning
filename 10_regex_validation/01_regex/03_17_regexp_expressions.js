// 4. Validating Multiline Input
let regex = /^(error|info):/m;
let str = "error: this is an error\ninfo: this is information";
if (regex.test(str)) {
    console.log("Valid log format.");
} else {
    console.log("Invalid log format.");
}
