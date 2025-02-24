let ws = new WeakSet();
let obj = {};

// add(value)
ws.add(obj);

// has(value)
console.log("WeakSet has Obj : " + ws.has(obj));
