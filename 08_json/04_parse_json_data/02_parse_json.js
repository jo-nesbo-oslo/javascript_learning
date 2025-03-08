const jsonA = '[{"name": "Anjali", "country": "India"}, {"name": "Vikas", "country":"Pakistan"}]';
const objA = JSON.parse(jsonA);
objA.forEach(person =>{
	console.log(`${person.name}, ${person.country}`);
	console.log();
}); 

