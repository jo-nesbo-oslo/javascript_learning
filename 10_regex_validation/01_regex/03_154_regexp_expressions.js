// 5. Matching Multi-Line Data

let data = `
apple
Banana
CHERRY
`;

let regex = /^banana$/im; 
// Matches 'banana' case-insensitively in multi-line mode
console.log(regex.test(data));

