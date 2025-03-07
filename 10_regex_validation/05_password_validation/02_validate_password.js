const levels = {
    1: "Very Weak",
    2: "Weak",
    3: "Medium",
    4: "Strong",
};

function checkPwd(pwd) {
    if (pwd.length > 15) {
        return console.log(pwd + " - Too lengthy");
    } else if (pwd.length < 8) {
        return console.log(pwd + " - Too short");
    }

    const checks = [
        /[a-z]/,     // Lowercase
        /[A-Z]/,     // Uppercase
        /\d/,        // Digit
        /[@.#$!%^&*.?]/ // Special character
    ];
    let score = checks.reduce((acc, rgx) => acc + rgx.test(pwd), 0);

    console.log(pwd + " - " + levels[score]);
}

let pwds = [
    "u4thdkslfheogica",
    "G!2ks",
    "GeeksforGeeks",
    "Geeks123",
    "GEEKS123",
    "Geeks@123#",
];

pwds.forEach(checkPwd);
