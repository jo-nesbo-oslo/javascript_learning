import isUrlHttp from 'is-url-http';
console.log(isUrlHttp("https://www.example.com"));
console.log(isUrlHttp("http://example.com"));   
console.log(isUrlHttp("www.example.com"));     
console.log(isUrlHttp("invalid-url"));              
