Promise.all([
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task A done"), 1000)),
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task B done"), 500))
])
    .then(([resultA, resultB]) => {
        console.log(resultA, resultB);
        return new Promise((resolve) =>
            setTimeout(() => resolve("Final Task done"), 700));
    })
    .then((finalResult) =>
        console.log(finalResult));
