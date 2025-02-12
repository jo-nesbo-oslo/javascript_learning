const person = {
    name: 'GFG',
    greet: function(city) {
        console.log('Hello, ' + this.name + ' from ' + city);
    }
};
person.greet('Delhi');
const greet = person.greet;
greet.call(person, 'Noida'); 
