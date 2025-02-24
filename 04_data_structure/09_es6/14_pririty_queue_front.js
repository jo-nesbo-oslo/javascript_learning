// front function
front()
{
	// returns the highest priority element
	// in the Priority queue without removing it.
	if (this.isEmpty())
		return "No elements in Queue";
	return this.items[0];
}
