import isUrl from 'is-url';
console.log(isUrl("https://www.example.com")); 
console.log(isUrl("http://example.com"));   
console.log(isUrl("www.example.com"));       
console.log(isUrl("invalid-url"));           

/*
npm install is-url
npm install is-url-http
*/
