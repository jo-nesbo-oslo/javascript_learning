// 4. Counting Lines with a Specific Pattern

let logs = "INFO: Started\nERROR: Missing file\nINFO: Completed";
let regex = /^ERROR:/gm;

let count = 0;
while (regex.exec(logs)) {
    count++;
}
console.log(`Error count: ${count}`); 


