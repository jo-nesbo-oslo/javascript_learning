Promise.resolve("Task completed")
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log("Cleanup completed"));
