class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Deque {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    // Add element at the front
    addFront(value) {
        let newNode = new Node(value);
        if (!this.front) {
            this.front = this.rear = newNode;
        } else {
            newNode.next = this.front;
            this.front.prev = newNode;
            this.front = newNode;
        }
        this.size++;
    }

    // Add element at the rear
    addRear(value) {
        let newNode = new Node(value);
        if (!this.rear) {
            this.front = this.rear = newNode;
        } else {
            newNode.prev = this.rear;
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    // Remove element from the front
    removeFront() {
        if (!this.front) return null;
        let removedValue = this.front.value;
        this.front = this.front.next;
        if (this.front) {
            this.front.prev = null;
        } else {
            this.rear = null;
        }
        this.size--;
        return removedValue;
    }

    // Remove element from the rear
    removeRear() {
        if (!this.rear) return null;
        let removedValue = this.rear.value;
        this.rear = this.rear.prev;
        if (this.rear) {
            this.rear.next = null;
        } else {
            this.front = null;
        }
        this.size--;
        return removedValue;
    }

    // Get the front element
    getFront() {
        return this.front ? this.front.value : null;
    }

    // Get the rear element
    getRear() {
        return this.rear ? this.rear.value : null;
    }

    // Check if the deque is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the size of the deque
    getSize() {
        return this.size;
    }

    // Print the deque elements
    printDeque() {
        let current = this.front;
        let result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log("Deque:", result.join(" <-> "));
    }
}

// Testing the Deque implementation
let deque = new Deque();
deque.addFront(10);
deque.addRear(20);
deque.addFront(5);

console.log("Front:", deque.getFront()); 
console.log("Rear:", deque.getRear());   

deque.printDeque(); 

deque.removeFront();
deque.removeRear();

deque.printDeque(); 

console.log("Size:", deque.getSize()); 
