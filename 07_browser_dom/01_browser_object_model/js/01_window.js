// This is console property
debugger;
console.log(window.location);

//1. Window Object
window.alert('Hello, World!');
console.log(window.innerWidth);

//2. Navigator Object
console.log(navigator.userAgent); 
console.log(navigator.language); 

//3. Location Object
console.log(location.href); 
// location.href = 'https://www.google.com'

// 4. Screen Object
console.log(screen.width);
console.log(screen.height); 

//5. History Object
history.back(); 
history.forward(); 

//6. Using window.resizeTo
let newWindow = window.open("http://127.0.0.1:5500/05_browser_dom/browser_object_model/event_bubbling.html", "NewWindow", "width=500,height=500");
newWindow.resizeTo(300, 300);


//6.5 Using window.resizeTo
let newWindowNotCrossOriginPolicy = window.open("https://www.example.com", "NewWindowNotCrossOriginPolicy", "width=500,height=500");
newWindowNotCrossOriginPolicy.resizeTo(300, 300);

