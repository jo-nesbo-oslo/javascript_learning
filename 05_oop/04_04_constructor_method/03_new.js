//Object from a function
function prints(name, age) {
    this.name = name
    this.age = age
}
const result = new prints('Pranjal', 21)
console.log(result)
//Object from a class
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
const result1 = new Person('Saurabh', 30)
console.log(result1)
