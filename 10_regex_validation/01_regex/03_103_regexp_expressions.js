// 
let str = "GFG\t@_123_$";
let regex = /\t/;
let match = str.search(regex);
if (match == -1) {
  console.log("No tab character present. ");
} else {
  console.log("Index of tab character: " + match);
}
