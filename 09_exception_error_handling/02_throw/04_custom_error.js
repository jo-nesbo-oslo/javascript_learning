class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateInput(input) {
    if (input < 0) {
        throw new ValidationError("Input must be a positive number");
    }
    return "Valid input";
}

try {
    validateInput(-5); // Throws ValidationError
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}
