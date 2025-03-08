const jsonS = '{"name": "Rahul", "age": 25, "city": "Mumbai"}';
const obj = JSON.parse(jsonS);
console.log('Objeto JSON con notación de punto')
console.log(obj.name);
console.log(obj.age);
console.log(obj.city);
console.log('Objeto JSON con notación de corchetes')
console.log(obj['name']);
console.log(obj['age']);
console.log(obj['city']);
