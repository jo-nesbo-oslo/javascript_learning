// Inheritance in static members
class Automobile {
    static staticMethod() {
        return 'Automobile static method';
    }
}

class car extends Automobile {
    static staticMethod() {
        return 'Car static method';
    }
}

console.log(Automobile.staticMethod());
console.log(car.staticMethod());
