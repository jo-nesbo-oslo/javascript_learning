// 2. Finding All Digits in a String

let regex = /\d+/g;
let s = "I have 2 apples and 15 bananas.";

let res;
while ((res = regex.exec(s)) !== null) {
    console.log("Found:", res[0], "at position:", res.index);
}

