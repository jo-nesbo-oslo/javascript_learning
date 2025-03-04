Promise.resolve(5)
    .then((value) => value * 2) // Multiplies by 2
    .then((value) => value + 6) // Adds 6
    .then((finalValue) => console.log(finalValue)); // Logs: 16
