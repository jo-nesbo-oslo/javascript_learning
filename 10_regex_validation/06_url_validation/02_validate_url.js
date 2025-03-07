function isValid(url) {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}

console.log(isValid("https://www.example.com")); 
console.log(isValid("http://example.com"));     
console.log(isValid("www.example.com"));      
console.log(isValid("invalid-url"));         
