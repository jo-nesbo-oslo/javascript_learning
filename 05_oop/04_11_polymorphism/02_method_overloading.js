class Calculator {
    add(a, b, c = 0) {
      return a + b + c;
    }
}

const calc = new Calculator();
console.log(calc.add(2, 3));
console.log(calc.add(2, 3, 4));
