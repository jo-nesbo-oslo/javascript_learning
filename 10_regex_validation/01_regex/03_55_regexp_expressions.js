// 5. Validating a String for Special Characters
let regex = /\W/;
let username = "User_123";
if (regex.test(username)) {
    console.log("Invalid username. Contains special characters.");
} else {
    console.log("Valid username.");
}
