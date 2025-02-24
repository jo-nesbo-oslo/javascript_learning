class Deque {
    constructor(capacity) {
        this.capacity = capacity;
        this.array = new Array(capacity);
        this.front = -1;
        this.rear = -1;
        this.size = 0;
    }

    isFull() {
        return this.size === this.capacity;
    }

    isEmpty() {
        return this.size === 0;
    }

    getPrevIndex(index) {
        return (index - 1 + this.capacity) % this.capacity;
    }

    getNextIndex(index) {
        return (index + 1) % this.capacity;
    }

    // Insert at the front of the deque
    insertFront(item) {
        if (this.isFull()) {
            console.log("Deque is full");
            return;
        }

        if (this.isEmpty()) {
            this.front = this.rear = 0;
        } else {
            this.front = this.getPrevIndex(this.front);
        }

        this.array[this.front] = item;
        this.size++;
    }

    // Insert at the rear of the deque
    insertRear(item) {
        if (this.isFull()) {
            console.log("Deque is full");
            return;
        }

        if (this.isEmpty()) {
            this.front = this.rear = 0;
        } else {
            this.rear = this.getNextIndex(this.rear);
        }

        this.array[this.rear] = item;
        this.size++;
    }

    // Delete from the front of the deque
    deleteFront() {
        if (this.isEmpty()) {
            console.log("Deque is empty");
            return;
        }

        const item = this.array[this.front];
        if (this.front === this.rear) {
            this.front = this.rear = -1;
        } else {
            this.front = this.getNextIndex(this.front);
        }

        this.size--;
        return item;
    }

    deleteRear() {
        if (this.isEmpty()) {
            console.log("Deque is empty");
            return;
        }

        const item = this.array[this.rear];
        if (this.front === this.rear) {
            this.front = this.rear = -1;
        } else {
            this.rear = this.getPrevIndex(this.rear);
        }

        this.size--;
        return item;
    }

    // Get the front element without removing it
    getFront() {
        if (this.isEmpty()) {
            console.log("Deque is empty");
            return;
        }

        return this.array[this.front];
    }

    // Get the rear element without removing it
    getRear() {
        if (this.isEmpty()) {
            console.log("Deque is empty");
            return;
        }

        return this.array[this.rear];
    }

    // Print the deque
    printDeque() {
        if (this.isEmpty()) {
            console.log("Deque is empty");
            return;
        }

        let i = this.front;
        while (true) {
            console.log(this.array[i]);
            if (i === this.rear) break;
            i = this.getNextIndex(i);
        }
    }
}

const deque = new Deque(5);

deque.insertFront(10);
deque.insertRear(20);
deque.insertFront(5);
deque.insertRear(25);

deque.printDeque(); 

console.log("Front element:", deque.getFront()); 
console.log("Rear element:", deque.getRear());   

deque.deleteFront();
deque.deleteRear();

deque.printDeque(); 
