// 

let regex = /(\d{2})-(\d{2})-(\d{4})/;
let s = "Today's date is 12-09-2023.";

let res = regex.exec(s);

if (res) {
    console.log("Full match:", res[0]);
    console.log("Day:", res[1]);
    console.log("Month:", res[2]);
    console.log("Year:", res[3]);
} else {
    console.log("No match found.");
}
