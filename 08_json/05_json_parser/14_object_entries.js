const obj = { name: 'Alice' };
Object.defineProperty(obj, 'age', {
    value: 25,
    enumerable: false
});

console.log(Object.entries(obj)); 
