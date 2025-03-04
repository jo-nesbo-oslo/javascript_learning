const person = {
    name: "GeeksforGeeks",
    greet() {
        return `Welcome To, ${this.name}`;
    }
};
console.log(person.greet()); 
