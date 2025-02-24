// rear function
rear()
{
	// returns the lowest priority
	// element of the queue
	if (this.isEmpty())
		return "No elements in Queue";
	return this.items[this.items.length - 1];
}
