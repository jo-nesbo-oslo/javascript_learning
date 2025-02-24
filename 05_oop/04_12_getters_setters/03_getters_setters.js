const user = { 
	_password: "", 
	get password() { 
		return this._password; 
	}, 
	set password(value) { 
		this._password = this.encrypt(value); 
	}, 
	encrypt(value) { 
		// Encrypt the password value 
		return value.split("").reverse().join(""); 
	}, 
	decrypt(value) { 
		// Decrypt the password value 
		return value.split("").reverse().join(""); 
	}, 
}; 

console.log(user.password); // "" 
user.password = "password123"; 
console.log(user.password); // "321drowssap" 
console.log(user.decrypt(user.password)); // "password123"
