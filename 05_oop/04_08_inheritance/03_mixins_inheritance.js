const one = {
    speak() {
        return `${this.name} talks`
    }
}
const two = {
    walks() {
        return `${this.name} walks`
    }
}
function Person(name) {
    this.name = name
}
Object.assign(Person.prototype, one, two)
const person1 = new Person('Pranjal')
console.log(person1.speak())
console.log(person1.walks())
