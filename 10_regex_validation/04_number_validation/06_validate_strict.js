const isStrict = s => /^-?\d+(\.\d+)?$/.test(s);

console.log(isStrict('123'));
console.log(isStrict('-123.45'));
console.log(isStrict('abc123')); 
