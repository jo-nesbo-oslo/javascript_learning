const buffer = new ArrayBuffer(8); 

// Initiating using the constructor 
const uint8 = new Uint8Array(buffer); 

// Output is 8 as we initiated the length with 8 
console.log(uint8.length);
