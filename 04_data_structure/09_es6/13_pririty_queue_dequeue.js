// dequeue method to remove
// element from the queue
dequeue()
{
	// return the dequeued element
	// and remove it.
	// if the queue is empty
	// returns Underflow
	if (this.isEmpty())
		return "Underflow";
	return this.items.shift();
}
