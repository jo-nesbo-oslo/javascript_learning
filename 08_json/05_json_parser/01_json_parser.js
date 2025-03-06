// Creating a JavaScript object 
const jsonString = 
	'{"name": "Geek", "age": 22, "city": "Delhi"}'; 

// Creting JSON object 
const obj = JSON.parse(jsonString); 
console.log(obj.name); // Output: Geek 
console.log(obj.age);	 // Output: 22 
console.log(obj.city);	 // Output: Delhi
