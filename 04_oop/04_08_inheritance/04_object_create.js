let obj = {
    name: 'Pranjal',
    age: 21,
    prints() {
        return `my name is ${this.name}`
    }
}
let obj1 = Object.create(obj)
obj1.name = 'Hello'
console.log(obj1.age)
console.log(obj1.prints())
