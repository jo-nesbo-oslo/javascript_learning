let globalLet = "This is a global variable"

function fun() {
    let globalLet = "This is a local variable"
}
fun();
console.log(globalLet); // This is a global variable