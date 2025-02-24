function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getCarInfo = function () {
        return `${this.year} ${this.make} ${this.model}`;
    };
}

let myCar = new Car('Toyota', 'Camry', 2020);
console.log(myCar.getCarInfo());
