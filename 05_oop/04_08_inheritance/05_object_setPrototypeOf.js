const one = {
    speak() {
        return `${this.name} speaks`
    }
}
const two = {
    name: 'Pranjal'
}
Object.setPrototypeOf(one, two)
console.log(one.speak())
