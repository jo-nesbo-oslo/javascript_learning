Promise.allSettled([
    Promise.resolve("Task 1 done"),
    Promise.reject("Task 2 failed"),
    Promise.resolve("Task 3 done")
])
    .then((results) => console.log(results));
