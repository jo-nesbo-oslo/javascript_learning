const person = { 
	_name: "", 
	_age: 0, 
	get age() { 
		return this._age; 
	}, 
	set age(value) { 
		if (typeof value !== "number" || value < 0) { 
			throw new Error("Age must be a positive number"); 
		} 
		this._age = value; 
	}, 
}; 

person.age = 25; 
console.log(person.age); // 25 
// person.age = -10; // throws an error: 
//"Age must be a positive number"
