// 3-digits not followed by any numbers
const str = "123Geeks12345@";
const regex = /\d{3}(?!\d)/g;

const match = str.match(regex);
console.log(match); 
