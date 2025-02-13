function outerFun(a) {
    function outerInnerFun(b) {
        function innerFun(c) {
            return a + b + c;
        }
        return innerFun;
    }
    return outerInnerFun;
}

const addTen = outerFun(10);
const addFive = addTen(5);
console.log(addFive(8));
