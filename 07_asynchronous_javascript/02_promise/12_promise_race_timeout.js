let fetchData = new Promise((resolve) =>
    setTimeout(() =>
        resolve("Data loaded"), 3000));
let timeout = new Promise((_, reject) =>
    setTimeout(() =>
        reject("Timeout!"), 2000));
Promise.race([fetchData, timeout])
    .then((result) =>
        console.log(result))
    .catch((error) =>
        console.error(error));
