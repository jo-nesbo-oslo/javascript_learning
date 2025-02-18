// <script> 
	const array = ['a', 'b', 'c']; 
	
	const it = array[Symbol.iterator](); 
	
	// and on this iterator method we have ‘next’ method 
	
	console.log(JSON.stringify(it.next())); 
	//{ value: "a", done: false } 
	
	console.log(JSON.stringify(it.next())); 
	//{ value: "b", done: false } 
	
	console.log(JSON.stringify(it.next())); 
	//{ value: "c", done: false } 
	
	console.log(JSON.stringify(it.next())); 
	/* Actual it.next() will be { value: undefined, 
	done: true } but here you will get 
	{done: true} output because of JSON.stringify 
	as it omits undefined values*/
//</script>
