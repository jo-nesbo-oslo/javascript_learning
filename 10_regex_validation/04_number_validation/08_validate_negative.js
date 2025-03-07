const isNeg = n => 
    typeof n === 'number' && n < 0;

console.log(isNeg(-42));
console.log(isNeg(42));
console.log(isNeg(0));
