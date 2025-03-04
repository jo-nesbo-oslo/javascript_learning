class Validator {
    static check(input) {
        return Array.isArray(input);
    }
}
console.log(Validator.check([1, 2, 3]));
console.log(Validator.check('hello'));
