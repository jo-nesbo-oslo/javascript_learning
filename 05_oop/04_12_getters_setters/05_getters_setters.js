class Rectanlge {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get a() {
        return this.width * this.height;
    }

    set a(value) {
        console.log("Area cannot be set directly.");
    }
}

const rect = new Rectanlge(10, 5);
console.log(rect.a);
rect.a = 60; 
