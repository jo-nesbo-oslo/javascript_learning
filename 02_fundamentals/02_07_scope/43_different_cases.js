function outer() {
    let outerVar = "I'm in the outer scope!";
    function inner() {
        console.log(outerVar); // Accessing parent's scope
    }
    inner();
}
outer();