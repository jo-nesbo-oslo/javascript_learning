// printQueue function
// prints all the element of the queue
printPQueue()
{
	let str = "";
	for (let i = 0; i < this.items.length; i++)
		str += this.items[i].element + " ";
	return str;
}
