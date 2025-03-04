// Strict Mode
// Strict mode was introduced in ECMAScript 5 (ES5) to address some of the 
// pitfalls of JavaScript and to make it easier 
// to write “secure” JavaScript. To enable strict mode, you can add t
// he following declaration at the top of your 
// script or function:

// "use strict";

// Strict mode 
"use strict"; 
// 1. Variable Declaration: Variables must be declared before use. Attempting to use undeclared variables will throw an error.
myVariable = 10; // ReferenceError: myVariable is not defined

// 2. this Keyword: In strict mode, this is undefined in functions that are called as global functions. 
// It doesn't default to the global object.
"use strict";

function showThis() {
  console.log(this); // in strict mode, this will be undefined
}

showThis();

// 3. Silent Failures: Assignments to non-writable properties, attempts to delete undeletable properties, 
// and other violations will throw errors instead of failing silently.
"use strict";

var obj = {};
Object.defineProperty(obj, "prop", { value: 42, writable: false });

obj.prop = 17; // TypeError: Cannot assign to read-only property 'prop'

// 4. Octal Syntax: Octal literals are not allowed in strict mode.
"use strict";

var x = 010; // SyntaxError: Octal literals are not allowed in strict mode.

// 5. Duplicate Property Names: In strict mode, 
// having duplicate property names in an object literal is not allowed.
"use strict"; 
var obj = { prop: 1, prop: 2 }; // SyntaxError: Duplicate data property in object literal not allowed in strict mode.
function bar(y, y) { // Throws a syntax error 
	return y + y; 
}


// 6. Reserved Keywords: Some keywords are reserved for future use in strict mode, 
// and using them as variable names will cause a syntax error.
"use strict"; 
var let = 10; // SyntaxError: Unexpected strict mode reserved word

// 7. How to Use Strict Mode
// You can enable strict mode globally for an entire script or locally within a function.

// Globally:

"use strict";

var x = 3.14; // strict mode is enabled for the entire script
// Locally:

function myFunction() {
    "use strict";
    var y = 3.14; // Strict mode is enabled only within this function .
}