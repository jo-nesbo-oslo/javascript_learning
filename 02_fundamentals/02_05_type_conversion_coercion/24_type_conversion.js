// 1. String to Number
let s = "123";
let n = Number(s);  // Converts string to number
console.log(n);  
n = parseInt(s);
console.log(n);  
n = parseFloat(s);
console.log(n);  

// 2. Number to String
let n = 123;
let s = String(n);  //Converts number to string
console.log(s);  
s = n + '';
console.log(s);

// 3. Boolean to Number
let bool = true;
let n = Number(bool);  //Converts boolean to number
console.log(n);
n = Number(!bool);
console.log(n);

// 4. Boolean to String
let bool = true;
let s = String(bool);  //Converts boolean to string
console.log(s);  

