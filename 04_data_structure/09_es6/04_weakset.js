let ws = new WeakSet();
let obj1 = {};
let obj2 = {};

// add(value)
ws.add(obj1);
ws.add(obj2);

// has(value)
console.log(ws.has(obj2));

// delete(value)
ws.delete(obj2);
console.log(ws.has(obj2));
