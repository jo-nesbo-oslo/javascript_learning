// 5. Matching File Extensions
let regex = /\.(jpg|png|gif)$/;
let filename = "picture.png";
if (regex.test(filename)) {
    console.log("Valid image file.");
} else {
    console.log("Invalid file format.");
}
