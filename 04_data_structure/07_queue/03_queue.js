// An other Apprach without Rear 

class CircularQueue {
    constructor(size) {
      this.size = size;
      this.queue = new Array(size);
      this.front = -1;
      this.count = 0; 
    }
  
    // Enqueue: Adds an element to the queue
    enqueue(element) {
      if (this.isFull()) {
        console.log("Queue is full!");
        return;
      }
  
      if (this.front === -1) {
        this.front = 0;
      }
  
      let rear = (this.front + this.count) % this.size; 
      this.queue[rear] = element;
      this.count++; 
      console.log(`${element} added to the queue`);
    }
  
    // Dequeue: Removes and returns the front element
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty!");
        return;
      }
  
      const dequeuedElement = this.queue[this.front];
      this.queue[this.front] = undefined;
  
      if (this.count === 1) {
        this.front = -1; 
      } else {
        this.front = (this.front + 1) % this.size; 
      }
  
      this.count--;
      console.log(`${dequeuedElement} removed from the queue`);
      return dequeuedElement;
    }
  
    // Peek: Returns the front element without removing it
    peek() {
      if (this.isEmpty()) {
        console.log("Queue is empty!");
        return null;
      }
  
      return this.queue[this.front];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.count === 0;
    }
  
    // Check if the queue is full
    isFull() {
      return this.count === this.size;
    }
  
    // Print the queue elements
    printQueue() {
      if (this.isEmpty()) {
        console.log("Queue is empty!");
        return;
      }
  
      let elements = [];
      for (let i = 0; i < this.count; i++) {
        let index = (this.front + i) % this.size;
        elements.push(this.queue[index]);
      }
      
      console.log("Queue:", elements.join(" -> "));
    }
  }
  
  // Example usage:
  const queue = new CircularQueue(5);
  
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.enqueue(40);
  queue.enqueue(50);
  
  queue.printQueue(); 
  
  queue.dequeue(); 
  queue.dequeue(); 
  
  queue.printQueue(); 
  
  queue.enqueue(60); 
  queue.enqueue(70); 
  
  queue.printQueue(); 
  
  queue.dequeue(); 
  
  queue.printQueue();
  