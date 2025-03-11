// 4. Iterating Over Matches
let regex = /\d+/g;
let str = "The price is 20 dollars and 30 cents.";
let match;
while ((match = regex.exec(str)) !== null) {
    console.log(`Found: ${match[0]} at index ${match.index}`);
}
