class Calc {
    static getMax(...numbers) {
        return Math.max(...numbers);
    }
}
console.log(Calc.getMax(1, 5, 3, 9));
