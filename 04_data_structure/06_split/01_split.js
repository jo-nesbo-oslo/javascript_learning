let str = "Hello and Welcome to GeeksforGeeks";
let words = str.split(" ");
/*
Syntax
str.split( separator, limit );

Parameters
separator: It is used to specify the character, or the regular expression, to use for splitting the string. 
If the separator is unspecified then the entire string becomes one single array element. 
The same also happens when the separator is not present in the string. 
If the separator is an empty string ('') then every character of the string is separated.

limit: Defines the upper limit on the number of splits to be found in the given string. 
If the string remains unchecked after the limit is reached then it is not reported in the array.
*/
console.log(words);
