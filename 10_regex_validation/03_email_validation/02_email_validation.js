let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let mail = "user@domain.com";
let isValid = mail.match(regex);
if (isValid) {
    console.log("Valid email address");
} else {
    console.log("Invalid email address");
}

