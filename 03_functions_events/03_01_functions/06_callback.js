function num(n, callback) {
    return callback(n);
}

const doubleFunction = (n) => n * 2;

console.log(num(5, doubleFunction));
