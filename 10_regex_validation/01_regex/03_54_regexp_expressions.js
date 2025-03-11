// 4. Splitting on Non-Word Characters
let regex = /\W+/;
let str = "split,this.string!by?punctuation";
let parts = str.split(regex);
console.log(parts); 
