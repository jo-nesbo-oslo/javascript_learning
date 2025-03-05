Promise.all([
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task A done"), 1000)),
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task B done"), 500)),
    new Promise((resolve) => {
        setTimeout(() => {
            resolve('Task C done')
        }, 800)
    })
])
    .then(([resultA, resultB, resultC]) => {
        console.log(resultA, resultB, resultC);
        return new Promise((resolve) =>
            setTimeout(() => resolve("Final Task done"), 700));
    })
    .then((finalResult) =>
        console.log(finalResult));
