let globalLet = "This is a global variable";

function fun() {
    let globalLet = "This is a local variable";
    console.log(window.globalLet); // This is a global variable
}
fun();