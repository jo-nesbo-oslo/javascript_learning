class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    g() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let p1 = new Person("Pranjal", 20);
p1.g();
