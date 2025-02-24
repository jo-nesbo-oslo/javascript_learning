// finds the index of element
indexOf(element)
{
    let count = 0;
    let current = this.head;

    // iterate over the list
    while (current != null) {
        // compare each element of the list
        // with given element
        if (current.element === element)
            return count;
        count++;
        current = current.next;
    }

    // not found
    return -1;
}
