const jsonA = '[{"name": "Anjali"}, {"name": "Vikas"}]';
const a = JSON.parse(jsonA);
a.forEach(person =>
	console.log(person.name)); 

