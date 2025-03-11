// 3. Validating Numeric Input
let regex = /^[0-9]+$/;
let input = "123456";
if (regex.test(input)) {
    console.log("Valid numeric input.");
} else {
    console.log("Invalid input.");
}
