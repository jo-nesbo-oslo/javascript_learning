const isOdd = n => 
    typeof n === 'number' && n % 2 !== 0;

console.log(isOdd(7));
console.log(isOdd(4));
console.log(isOdd(-3));
