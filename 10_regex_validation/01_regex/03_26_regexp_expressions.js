// 4. Validating Input
let regex = /[^a-zA-Z0-9]/;
let username = "User_123";
if (regex.test(username)) {
    console.log("Invalid username. Contains special characters.");
} else {
    console.log("Valid username.");
}
