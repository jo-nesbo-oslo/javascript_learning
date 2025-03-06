const jsonS = '{"name": "Pooja", "age": 28}';
try {
    const obj = JSON.parse(jsonS);
    console.log(obj);
} catch (e) {
    console.error("Invalid JSON:", e.message);
}

