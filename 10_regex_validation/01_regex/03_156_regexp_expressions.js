// 1. Iterating Through Matches

let regex = /\d+/g; // Match digits
let str = "123 456 789";
let match;
while ((match = regex.exec(str)) !== null) {
    console.log(`Matched: ${match[0]}, Next search starts at: ${regex.lastIndex}`);
}


