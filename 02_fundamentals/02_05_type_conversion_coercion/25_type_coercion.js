// 1. String + Number
let n = 5;
let s = "5";
let res = n + s;  // JavaScript converts num to string
console.log(res); 
console.log(typeof(res))

// 2. Boolean + Number
let bool = true;
let n = 10;
let res = bool + n;  // JavaScript converts boolean to number
console.log(res);  

// 3. Comparison of Different Types
let s = "10";
let n = 10;
console.log(s == n);  // true, JavaScript converts str to number

// 4. Boolean Context
let s = "";
if (s) {
    console.log("This won't print");  // Empty string is falsy
} else {
    console.log("This will print");  // Empty string is coerced to false
}
