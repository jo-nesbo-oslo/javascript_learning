const nested = '{"person": {"name": "Ravi", "address": {"city": "Delhi", "pin": 110001}}}';
const obj = JSON.parse(nested);
console.log(obj.person.address.city);

