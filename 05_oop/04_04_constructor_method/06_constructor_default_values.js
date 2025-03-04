function Person(name = "Unknown", age = 0) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("Pranjal", 30);
const person2 = new Person("Amar");  
const person3 = new Person();  

console.log(person1);  
console.log(person2); 
console.log(person3);  
