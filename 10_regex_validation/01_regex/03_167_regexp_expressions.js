// 6. Replacing Lines with a Specific Pattern (Updated version)

let text = "Task 1: Incomplete\nTask 2: Complete\nTask 3: Incomplete";
let regex = /^Task (\d+): Incomplete$/gm;

let updatedText = text.replace(regex, "Task $1: Updated");
console.log(updatedText); 

