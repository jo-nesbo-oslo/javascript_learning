// 1. Extracting Email Components

let regex = /@([a-zA-Z0-9.-]+)/;
let mail = "user@example.com";

let res = regex.exec(mail);

if (res) {
    console.log("Domain:", res[1]);
} else {
    console.log("No domain found.");
}

