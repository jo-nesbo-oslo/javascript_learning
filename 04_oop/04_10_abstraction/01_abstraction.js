class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getData() {
        return `${this.name} is ${this.age} years old.`;
    }
}
const p1 = new Person("Anuj", 30);
console.log(p1.getData()); 
