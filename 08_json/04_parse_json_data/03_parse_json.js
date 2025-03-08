const nested = '{"person": {"name": "Ravi", "address": {"city": "Delhi", "pin": 110001}}}';
const obj = JSON.parse(nested);
console.log('Objeto JSON con notación de punto');
console.log(obj.person.address.city);
console.log(obj.person.address);
console.log('Objeto JSON con notación de corchetes');
console.log(obj['person']['address']['city']);
console.log(obj['person']['address']);

