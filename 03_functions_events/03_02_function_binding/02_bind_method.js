const person = {
    name: 'GFG',
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};
const greet = person.greet;
const boundGreet = greet.bind(person);
boundGreet(); 
