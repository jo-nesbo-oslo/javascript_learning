// 1. Detecting Form Feeds
let regex = /\f/;
let str = "This is a form feed\fexample.";
if (regex.test(str)) {
    console.log("Form feed detected!");
} else {
    console.log("No form feed found.");
}
