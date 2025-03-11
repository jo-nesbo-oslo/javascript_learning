// 4. Validating Input with Multiple Options
let regex = /^(yes|no|maybe)$/;
let input = "yes";
if (regex.test(input)) {
    console.log("Valid input.");
} else {
    console.log("Invalid input.");
}
