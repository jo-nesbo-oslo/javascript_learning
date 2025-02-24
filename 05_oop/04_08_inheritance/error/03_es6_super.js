// Inheritance using super keyword in JS
class Automobile {
    constructor(name) {
        this.name = name;
    }

    engine() {
        console.log(this.name,
            'has ', this.cc, 'cc engine');
    }
}

class Car extends Automobile {
    constructor(name, cc) {
        super(name);

        // Additional properties for
        // the Car class
        this.cc = cc;
    }

    engine() {
        // the 'engine' method of the parent
        // class using 'super'
        super.engine();

        console.log(this.name,
            'has ', this.cc, 'cc engine');
    }
}

let carz = new Car('Rexton', '1500');
carz.engine();
