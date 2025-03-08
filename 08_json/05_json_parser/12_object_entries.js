const obj = { name: 'Alice', age: 25, city: 'New York' };
const transformed = Object.entries(obj).map(([key, value]) => [key.toUpperCase(), value]);
console.log(transformed);
