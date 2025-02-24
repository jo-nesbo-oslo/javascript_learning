const temperature = { 
	_celsius: 0, 
	get fahrenheit() { 
		return this._celsius * 1.8 + 32; 
	}, 
	set fahrenheit(value) { 
		this._celsius = (value - 32) / 1.8; 
	}, 
}; 

console.log(temperature.fahrenheit); // 32 
temperature.fahrenheit = 68; 
console.log(temperature._celsius); // 20
