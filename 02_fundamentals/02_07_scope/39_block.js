if (true) {
    var x = 10;   // Function-scoped (not block-scoped)
    let y = 20;   // Block-scoped
    const z = 30; // Block-scoped
}

console.log(x); // Output: 10 (accessible outside the block)
console.log(y); // Error: y is not defined (block-scoped)
console.log(z); // Error: z is not defined (block-scoped)
