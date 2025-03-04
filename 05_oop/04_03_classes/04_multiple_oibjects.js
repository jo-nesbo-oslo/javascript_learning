class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    d() {
        console.log(`${this.year} ${this.make} ${this.model}`);
    }
}
let c1 = new Car("Toyota", "Corolla", 2021);
let c2 = new Car("Honda", "Civic", 2020);
c1.d();
c2.d(); 
