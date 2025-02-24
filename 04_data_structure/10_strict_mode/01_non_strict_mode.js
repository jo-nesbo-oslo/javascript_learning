// 1 Variable Declaration: Variables can be used without being declared. For example:
myVariable = 10; // This will create a global variable.

// 2.this Keyword: In non-strict mode, the value of this in functions depends on how the function is called. If a function is called as a global function, this refers to the global object (window in browsers).
function showThis() {
    console.log(this); // in non-strict mode, this will log the global object
  }
  
  showThis();

// 3.  Silent Failures: Some errors that should be thrown are suppressed. For example, assigning a value to a non-writable property doesn’t throw an error.
var obj = {};
Object.defineProperty(obj, "prop", { value: 42, writable: false });

obj.prop = 17;  // no error is thrown, and assignment fails silently !