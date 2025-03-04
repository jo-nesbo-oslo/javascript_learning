let A = 'Geeks for Geeks';
b = A.slice(0, 5);
c = A.slice(6, 9);
d = A.slice(10);
/*
The slice() method in JavaScript is used to extract a portion of a string and 
create a new string without modifying the original string.

Syntax:
string.slice(startingIndex, endingIndex);
Parameters:
This method uses two parameters. This method does not change the original string.

startingIndex: It is the start position and it is required(The first character is 0).
endingIndex: (Optional)It is the end position (up to, but not including). The default is string length.
*/

console.log(b);
console.log(c);
console.log(d); 
