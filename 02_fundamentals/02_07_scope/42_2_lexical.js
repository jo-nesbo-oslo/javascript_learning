let globalLet = "This is a global variable";

function fun() {
    let globalLet = "This is a local variable";
    console.log(`globalLet: ${globalLet}`);
}
fun();
console.log(globalLet); // This is a global variable
