const isNumStr = s => 
    !isNaN(s) && isFinite(s);

console.log(isNumStr('123'));
console.log(isNumStr('123abc')); 
console.log(isNumStr('1.23')); 
