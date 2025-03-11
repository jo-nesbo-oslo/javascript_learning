// 4. Validating Input Without Whitespace
let regex = /\s/;
let username = "NoSpacesAllowed";

if (regex.test(username)) {
    console.log("Invalid username. It contains spaces.");
} else {
    console.log("Valid username.");
}
