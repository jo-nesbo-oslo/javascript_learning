// 3. Validating Case-Insensitive Email Domains
let email = "user@Gmail.com";
let regex = /@gmail\.com/i;

console.log(regex.test(email));
