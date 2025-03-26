// Validating a Mexico RFC

const rfcRegex = /^[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{3}$/;

// Example usage
const testRFC = (rfc) => rfcRegex.test(rfc);

// Test examples
console.log(testRFC("ABC123456HM0")); // true
console.log(testRFC("XEXX010101000")); // true
console.log(testRFC("INVALIDRFC1234")); // false


