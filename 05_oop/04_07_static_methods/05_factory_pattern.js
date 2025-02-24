class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static create(name, age) {
        return new User(name, age);
    }
}
const user = User.create('Ajay', 30);
console.log(user);
