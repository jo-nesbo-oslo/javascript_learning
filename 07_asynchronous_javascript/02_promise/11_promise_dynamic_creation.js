function asyncTask(taskName) {
    return new Promise((resolve) => {
        setTimeout(() => 
            resolve(`${taskName} completed`), 1000);
    });
}
asyncTask("Download File").then((result) => 
    console.log(result));
