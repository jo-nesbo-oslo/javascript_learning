const jsonS = '{"name": "Amit", "age": "30"}';
const obj = JSON.parse(jsonS, (key, value) => {
    if (key === "age") return parseInt(value);
    return value;
});
console.log(obj.age);
