function createPerson(name) {
    return {
        name: name,
        greet() {
            return `Hello my name is ${this.name}`
        }
    }
}
const one = createPerson('Pranjal')
const two = createPerson('Pranav')
console.log(one.greet())
console.log(two.greet())
