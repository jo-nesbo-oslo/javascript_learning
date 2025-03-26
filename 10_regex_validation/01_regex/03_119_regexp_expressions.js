// 2. Optional Groups

let regex = /(?:https?:\/\/)?www\.\w+\.\w+/;
console.log(regex.test("https://www.example.com")); 
console.log(regex.test("www.example.com"));         
console.log(regex.test("example.com")); 


