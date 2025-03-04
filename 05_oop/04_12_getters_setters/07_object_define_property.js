const u = { name: "Anjali" };

Object.defineProperty(u, "greeting", {
    get: function () {
        return `Hello, ${this.name}!`;
    },
    set: function (newName) {
        this.name = newName;
    }
});

console.log(u.greeting);
u.greeting = "Ayushi";
console.log(u.greeting);
