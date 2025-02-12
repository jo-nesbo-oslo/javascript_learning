const person = {
    name: 'GFG',
    greet: function() {
        const arrowGreet = () => {
            console.log('Hello, ' + this.name); 
        };
        arrowGreet();
    }
};
person.greet();
