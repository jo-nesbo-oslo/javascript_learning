function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            console.log(`Hello, my name is ${this.name}`);
        }
    };
}

const person1 = createPerson("Pranjal", 30);
const person2 = createPerson("Vivekam", 25);

person1.greet(); 
person2.greet(); 
