function greet() {
    console.log('Hello, my name is ' + this.name);
}

const person = {
    name: 'Amit',
    sayHello: greet
};
const anotherPerson = {
    name: 'Jatin'
};

greet(); 
person.sayHello(); 
greet.call(anotherPerson); 
