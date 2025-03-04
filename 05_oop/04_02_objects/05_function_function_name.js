let gfg = { };

gfg.a = "JavaScript";
gfg.b = "GeeksforGeeks";
gfg.c = add;

// Declare function add()
function add() {
    return (gfg.a +" "+ gfg.b);
};

console.log("Subject: " + gfg.a);
console.log("Author: " + gfg.b);
console.log("Adding the strings: "+ gfg.c());
