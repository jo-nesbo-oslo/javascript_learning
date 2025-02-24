class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

let myCar = new Car('Honda', 'Civic', 2022);
console.log(myCar.getCarInfo());
