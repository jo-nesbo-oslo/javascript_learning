const isPos = n => 
    typeof n === 'number' && n > 0;

console.log(isPos(42));
console.log(isPos(-42));
console.log(isPos(0));
