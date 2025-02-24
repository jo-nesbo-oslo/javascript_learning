let gfg = new Object();

gfg.a = "JavaScript";
gfg.b = "GeeksforGeeks";
gfg.c = function () {
    return (gfg.a +" "+ gfg.b);
};

console.log("Subject: " + gfg.a);
console.log("Author: " + gfg.b);
console.log("Adding the strings: "+ gfg.c() );
