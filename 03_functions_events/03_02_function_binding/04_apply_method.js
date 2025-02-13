const person = {
    name: 'GFG',
    greet: function(city, country) {
        console.log('Hello, ' + this.name + ' from ' + city + ', ' + country);
    }
};
person.greet('Delhi', 'India'); 
const greet = person.greet;
greet.apply(person, ['San Miguel Allende', 'México']); 
