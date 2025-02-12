function mul(x) {
    return function(y) {
        return x * y;
  };
}
var mul = mul(2);
console.log(mul(5));
