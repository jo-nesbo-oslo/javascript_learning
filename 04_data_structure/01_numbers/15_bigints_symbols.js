const symbolValue = Symbol('mySymbol');

const numFromSymbol = Number(symbolValue); // TypeError
console.log(numFromSymbol);
