let globalLet = "This is a global variable";;

function fun() {
    localLet = "This is a local variable";
}

fun();
console.log(globalLet); // This is a global variable
console.log(localLet); // This is a local variable