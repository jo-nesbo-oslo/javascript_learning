class one{
    constructor(name)
    {
        this.name=name
    }
    greet()
    {
        return `Hello ${this.name}`
    }
}
class two extends one{
    constructor(name,age)
    {
        super(name)
        this.age=age
    }
    greet1(){
        return `Your age is ${this.age}`
    }
}
const person1=new one('Pranjal')
const person2=new two('Pranav',21)
console.log(person2.greet())
