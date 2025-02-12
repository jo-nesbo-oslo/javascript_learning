function mul(factor) {
    return function(num) {
        return num * factor;
    };
}

const mul2 = mul(2);
console.log(mul2(5));
const mul3 = mul(3);
console.log(mul3(5)); 
