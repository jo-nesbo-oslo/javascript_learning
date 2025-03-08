const obj = { name: 'Alice', age: 25, city: 'New York' };
Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
