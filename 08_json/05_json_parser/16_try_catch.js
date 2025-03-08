let jsonString = '{"name": "GFG", "age": 22}';
try {
    let parsedData = JSON.parse(jsonString);
    console.log(parsedData);
} catch (error) {
    console.error('Error parsing JSON:', error);
}
